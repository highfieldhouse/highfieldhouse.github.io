'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? ' active' : '';
  };

  return (
    <div className="max-w-screen-md m-auto">
      <header>
        <h1>
          <strong>Highfield House</strong>
          <span>Bed &amp; Breakfast, in the heart of Sheringham</span>
        </h1>
      </header>
      <nav>
        <ul className="list">
          <Link className={isActive('/')} href="/">
            About
          </Link>
          <Link className={isActive('/breakfast')} href="/breakfast/">
            Breakfast
          </Link>
          <Link className={isActive('/prices')} href="/prices/">
            Prices
          </Link>
          <Link className={isActive('/how-to-find-us')} href="/how-to-find-us/">
            Map
          </Link>
          <Link className={isActive('/contact-us')} href="/contact-us/">
            Contact
          </Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
