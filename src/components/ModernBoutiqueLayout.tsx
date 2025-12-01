'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ModernBoutiqueLayoutProps {
  children: React.ReactNode;
}

export default function ModernBoutiqueLayout({ children }: ModernBoutiqueLayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1e293b',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            margin: 0,
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            HIGHFIELD HOUSE
          </h1>
          <p style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '1rem',
            color: '#f59e0b',
            margin: 0,
            fontWeight: '500',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Boutique Bed & Breakfast
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #e2e8f0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '0',
          flexWrap: 'wrap'
        }}>
          {[
            { path: '/preview/modern-boutique', label: 'About' },
            { path: '/preview/modern-boutique/breakfast', label: 'Breakfast' },
            { path: '/preview/modern-boutique/prices', label: 'Prices' },
            { path: '/preview/modern-boutique/how-to-find-us', label: 'Map' },
            { path: '/preview/modern-boutique/contact-us', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                color: isActive(path) ? '#f59e0b' : '#1e293b',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: '600',
                padding: '1.25rem 1.5rem',
                borderBottom: isActive(path) ? '3px solid #f59e0b' : '3px solid transparent',
                transition: 'all 0.2s',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '3rem 1.5rem'
      }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e293b',
        color: '#94a3b8',
        padding: '2rem 1.5rem',
        marginTop: '4rem',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '0.875rem'
      }}>
        <p style={{ margin: 0 }}>
          Highfield House &copy; 2025 • Sheringham, Norfolk
        </p>
      </footer>
    </div>
  );
}
