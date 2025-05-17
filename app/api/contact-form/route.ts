import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  console.log('API route hit: /api/contact-form');

  try {
    // Log the request headers
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));

    // Parse the request body
    const body = await request.json();
    console.log('Request body:', body);

    // Validate the request body
    const validatedData = contactSchema.parse(body);
    console.log('Validated data:', validatedData);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return new NextResponse(
        JSON.stringify({ error: 'Email service is not configured' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Recovery.com <contact@recovery.com>',
      to: ['vedangpatel187@gmail.com'],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      replyTo: validatedData.email,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || 'Not provided'}
Message: ${validatedData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${validatedData.message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return new NextResponse(
        JSON.stringify({ error: 'Failed to send message' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    console.log('Email sent successfully:', data);
    return new NextResponse(
      JSON.stringify({ message: 'Message sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    if (error instanceof z.ZodError) {
      return new NextResponse(
        JSON.stringify({
          error: 'Invalid form data',
          details: error.errors
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 