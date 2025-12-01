'use client';

import "../styles/globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? ' active' : '';
  };

  useEffect(() => {
    // Initialize Matomo
    if (typeof window !== 'undefined') {
      (window as any)._paq = (window as any)._paq || [];
      (window as any)._paq.push(['trackPageView']);
      (window as any)._paq.push(['enableLinkTracking']);
      (function() {
        const u = "//matomo.rnlds.com/";
        (window as any)._paq.push(['setTrackerUrl', u + 'matomo.php']);
        (window as any)._paq.push(['setSiteId', '1']);
        const d = document;
        const g = d.createElement('script');
        const s = d.getElementsByTagName('script')[0];
        g.async = true;
        g.src = u + 'matomo.js';
        s.parentNode?.insertBefore(g, s);
      })();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Highfield House, Sheringham</title>
        <meta name="description" content="Bed & Breakfast in the heart of Sheringham" />
      </head>
      <body>
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
              <Link className={isActive('/breakfast/')} href="/breakfast/">
                Breakfast
              </Link>
              <Link className={isActive('/prices/')} href="/prices/">
                Prices
              </Link>
              <Link className={isActive('/how-to-find-us/')} href="/how-to-find-us/">
                Map
              </Link>
              <Link className={isActive('/contact-us/')} href="/contact-us/">
                Contact
              </Link>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
