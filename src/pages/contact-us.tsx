import Layout from '../components/Layout';

export default function ContactUs() {
  return (
    <Layout title="Contact us: Highfield House">
      <h2>Contact us</h2>
      <p>To make a booking or enquiry, please get in touch:</p>
      <ul className="list">
        <li>
          Call <a href="tel:+441263825233">01263 825233</a> or{' '}
          <a href="tel:+447391009470">07391 009470</a>.
        </li>
        <li>
          Email <a href="mailto:email@highfieldsheringham.com">email@highfieldsheringham.com</a>
        </li>
      </ul>
    </Layout>
  );
}
