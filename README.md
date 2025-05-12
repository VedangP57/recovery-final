# RehabDirectory

A comprehensive rehabilitation center directory website built with Next.js and Tailwind CSS. This project helps individuals find trusted rehabilitation centers across the United States.

## Features

- 🏥 Browse rehabilitation centers by state
- 🔍 Advanced filtering options
- 📱 Responsive design
- 📞 Contact forms and information
- 🗺️ Interactive maps
- ⭐ Ratings and reviews
- 💊 Treatment program details
- 🏢 Facility information

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React
- Node.js

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rehab-directory.git
   cd rehab-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app
  ├── page.tsx                  → Homepage
  ├── about/page.tsx           → About page
  ├── contact/page.tsx         → Contact page
  ├── states/page.tsx          → List of states
  ├── states/[state]/page.tsx  → Rehabs per state
  ├── rehabs/[slug]/page.tsx   → Rehab detail page

/components
  ├── Header.tsx
  ├── Footer.tsx
  ├── RehabCard.tsx
  ├── StateCard.tsx
  ├── Hero.tsx
  ├── Testimonial.tsx

/data
  └── rehabs.json              → Dummy data for all rehabs
```

## Development

- The project uses TypeScript for type safety
- Tailwind CSS for styling
- Next.js App Router for routing and server components
- Mock data is stored in `/data/rehabs.json`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)
- UI components inspired by [Tailwind UI](https://tailwindui.com) # recovery-final
