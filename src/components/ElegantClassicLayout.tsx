'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ElegantClassicLayoutProps {
  children: React.ReactNode;
}

export default function ElegantClassicLayout({ children }: ElegantClassicLayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#8b7355',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '2rem',
          fontWeight: '400',
          color: '#faf8f5',
          margin: 0,
          marginBottom: '0.5rem'
        }}>
          Highfield House
        </h1>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.875rem',
          color: '#f5f1ed',
          margin: 0,
          fontStyle: 'italic'
        }}>
          Bed & Breakfast • Sheringham
        </p>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8dfd5',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {[
            { path: '/preview/elegant-classic', label: 'About' },
            { path: '/preview/elegant-classic/breakfast', label: 'Breakfast' },
            { path: '/preview/elegant-classic/prices', label: 'Prices' },
            { path: '/preview/elegant-classic/how-to-find-us', label: 'Map' },
            { path: '/preview/elegant-classic/contact-us', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              style={{
                fontFamily: 'Georgia, serif',
                color: isActive(path) ? '#8b7355' : '#5d4e3e',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: isActive(path) ? '600' : '400',
                paddingBottom: '0.25rem',
                borderBottom: isActive(path) ? '2px solid #8b7355' : 'none'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2.5rem 1.25rem'
      }}>
        {children}
      </main>
    </div>
  );
}
