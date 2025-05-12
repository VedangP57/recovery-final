'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Find Treatment', href: '/states' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const getHeaderBackground = () => {
    if (!isHomePage || isScrolled) return 'bg-background shadow-soft-sm dark:bg-background';
    return 'bg-transparent dark:bg-background';
  };

  const getLinkColor = (isDesktop = true) => {
    if (!isHomePage) {
      return 'text-foreground hover:text-primary-600';
    }
    if (isScrolled) {
      return 'text-foreground hover:text-primary-600';
    }
    if (isDesktop) {
      return 'text-white hover:text-primary-200';
    }
    return 'text-foreground hover:text-primary-600';
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        getHeaderBackground()
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center space-x-1 transition-transform duration-300 hover:scale-[1.02]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
              "rounded-lg px-2 py-1"
            )}
          >
            <span className={cn(
              'text-2xl font-bold tracking-tight transition-colors duration-300',
              !isHomePage || isScrolled ? 'text-foreground' : 'text-white'
            )}>
              Recovery<span className="text-primary-600 font-extrabold">.</span>
              <span className="text-xs font-medium ml-1 tracking-wide text-muted-foreground">com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  'hover:scale-105 transition-transform',
                  getLinkColor(true),
                  item.href === pathname && 'text-primary-600 font-semibold'
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg p-1"
            >
              {isMenuOpen ? (
                <X className={cn('h-6 w-6', !isHomePage || isScrolled ? 'text-foreground' : 'text-white')} />
              ) : (
                <Menu className={cn('h-6 w-6', !isHomePage || isScrolled ? 'text-foreground' : 'text-white')} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-sm rounded-b-lg shadow-soft-lg',
            isMenuOpen ? 'h-auto opacity-100 py-4' : 'h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="space-y-4 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block text-base font-medium transition-all duration-300',
                  'hover:translate-x-1',
                  getLinkColor(false),
                  item.href === pathname && 'text-primary-600 font-semibold'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
} 