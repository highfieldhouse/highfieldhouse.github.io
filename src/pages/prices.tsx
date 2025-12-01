import Layout from '../components/Layout';

export default function Prices() {
  return (
    <Layout title="Prices: Highfield House">
      <h2>Room rates 2025: bed &amp; breakfast</h2>
      <div className="md:flex">
        <div className="flex-1 mr-16">
          <ul className="prices" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3b82f6' }}>£90</span>
              <span style={{ alignSelf: 'center' }}>Single Room per night</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3b82f6' }}>£110</span>
              <span style={{ alignSelf: 'center' }}>Double room per night</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3b82f6' }}>£120</span>
              <span style={{ alignSelf: 'center' }}>King room per night</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3b82f6' }}>£130</span>
              <span style={{ alignSelf: 'center' }}>SuperKing/Twin room per night</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 max-w-xs">
          <p>
            To make a booking or enquiry, please phone us on{' '}
            <a href="tel:+441263825233">01263 825233</a>,{' '}
            <a href="tel:+447391009470">07391 009470</a> or email{' '}
            <a href="mailto:email@highfieldsheringham.com">email@highfieldsheringham.com</a>
          </p>
          <p>
            <strong>Away on business?</strong> Please call to discuss prices and options. If it&apos;s just a bed
            you&apos;re after, packed lunch and evening meal, or anything in between we&apos;ll have something to
            suit. Short and long stays welcome.
          </p>
          <p>
            Please note we may require a minimum stay of 2 nights during our busy periods (or 3 nights at bank
            holiday weekends).
          </p>
          <p>
            Check in as a general rule is between 4pm-6pm however we can be flexible to fit in with your plans.
            We ask that rooms are vacated by 10am on day of departure.
          </p>
          <p>
            We&apos;ll require a deposit equal to the cost of the first night, paid by card, cheque or bank transfer within 5
            days of booking. If you have to cancel, we&apos;ll return your deposit, less 5% handling charge, as long as you
            give us 14 days notice prior to your booked stay, else your deposit will become non-refundable. You may
            want to consider travel insurance to cover this eventuality.
          </p>
        </div>
      </div>
    </Layout>
  );
}
