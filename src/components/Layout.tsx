import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Highfield House, Sheringham' }: LayoutProps) {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? ' active' : '';
  };

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
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
    </>
  );
}
