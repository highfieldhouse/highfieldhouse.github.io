import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout title="Page Not Found: Highfield House">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link href="/">Return to homepage</Link>
      </p>
    </Layout>
  );
}
