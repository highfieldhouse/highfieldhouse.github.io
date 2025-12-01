'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CoastalMinimalLayoutProps {
  children: React.ReactNode;
}

export default function CoastalMinimalLayout({ children }: CoastalMinimalLayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#f0f9ff',
        borderBottom: '1px solid #e0f2fe',
        padding: '1.5rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            color: '#0c4a6e',
            margin: 0,
            letterSpacing: '0.05em'
          }}>
            HIGHFIELD HOUSE
          </h1>
          <p style={{
            fontSize: '0.875rem',
            color: '#0369a1',
            margin: '0.25rem 0 0 0',
            fontWeight: '300'
          }}>
            Sheringham, Norfolk
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0f2fe',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.75rem 1rem',
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto'
        }}>
          <Link
            href="/preview/coastal-minimal"
            style={{
              color: isActive('/preview/coastal-minimal') ? '#0c4a6e' : '#0369a1',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: isActive('/preview/coastal-minimal') ? '500' : '400',
              borderBottom: isActive('/preview/coastal-minimal') ? '2px solid #0c4a6e' : '2px solid transparent',
              paddingBottom: '0.5rem',
              whiteSpace: 'nowrap'
            }}
          >
            About
          </Link>
          <Link
            href="/preview/coastal-minimal/breakfast"
            style={{
              color: isActive('/preview/coastal-minimal/breakfast') ? '#0c4a6e' : '#0369a1',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: isActive('/preview/coastal-minimal/breakfast') ? '500' : '400',
              borderBottom: isActive('/preview/coastal-minimal/breakfast') ? '2px solid #0c4a6e' : '2px solid transparent',
              paddingBottom: '0.5rem',
              whiteSpace: 'nowrap'
            }}
          >
            Breakfast
          </Link>
          <Link
            href="/preview/coastal-minimal/prices"
            style={{
              color: isActive('/preview/coastal-minimal/prices') ? '#0c4a6e' : '#0369a1',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: isActive('/preview/coastal-minimal/prices') ? '500' : '400',
              borderBottom: isActive('/preview/coastal-minimal/prices') ? '2px solid #0c4a6e' : '2px solid transparent',
              paddingBottom: '0.5rem',
              whiteSpace: 'nowrap'
            }}
          >
            Prices
          </Link>
          <Link
            href="/preview/coastal-minimal/how-to-find-us"
            style={{
              color: isActive('/preview/coastal-minimal/how-to-find-us') ? '#0c4a6e' : '#0369a1',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: isActive('/preview/coastal-minimal/how-to-find-us') ? '500' : '400',
              borderBottom: isActive('/preview/coastal-minimal/how-to-find-us') ? '2px solid #0c4a6e' : '2px solid transparent',
              paddingBottom: '0.5rem',
              whiteSpace: 'nowrap'
            }}
          >
            Map
          </Link>
          <Link
            href="/preview/coastal-minimal/contact-us"
            style={{
              color: isActive('/preview/coastal-minimal/contact-us') ? '#0c4a6e' : '#0369a1',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: isActive('/preview/coastal-minimal/contact-us') ? '500' : '400',
              borderBottom: isActive('/preview/coastal-minimal/contact-us') ? '2px solid #0c4a6e' : '2px solid transparent',
              paddingBottom: '0.5rem',
              whiteSpace: 'nowrap'
            }}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        {children}
      </main>
    </div>
  );
}
