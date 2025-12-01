import LayoutClient from '../../components/LayoutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prices: Highfield House',
};

export default function Prices() {
  return (
    <LayoutClient>
      <h2>Room rates 2025: bed &amp; breakfast</h2>
      <div className="md:flex">
        <div className="flex-1 mr-16">
          <ul className="prices">
            <li>
              <span>£90</span> <span>Single Room per night</span>
            </li>
            <li>
              <span>£110</span> <span>Double room per night</span>
            </li>
            <li>
              <span>£120</span> <span>King room per night</span>
            </li>
            <li>
              <span>£130</span> <span>SuperKing/Twin room per night</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 max-w-xs">
          <p>
            To make a booking or enquiry, please phone us on{" "}
            <a href="tel:+441263825233">01263 825233</a>,{" "}
            <a href="tel:+447391009470">07391 009470</a> or email{" "}
            <a href="mailto:email@highfieldsheringham.com">
              email@highfieldsheringham.com
            </a>
          </p>
          <p>
            <strong>Away on business?</strong> Please call to discuss prices and
            options. If it&apos;s just a bed you&apos;re after, packed lunch and
            evening meal, or anything in between we&apos;ll have something to
            suit. Short and long stays welcome.
          </p>
          <p>
            Please note we may require a minimum stay of 2 nights during our
            busy periods (or 3 nights at bank holiday weekends).
          </p>
          <p>
            Check in as a general rule is between 4pm-6pm however we can be
            flexible to fit in with your plans. We ask that rooms are vacated by
            10am on day of departure.
          </p>
          <p>
            We&apos;ll require a deposit equal to the cost of the first night,
            paid by card, cheque or bank transfer within 5 days of booking. If
            you have to cancel, we&apos;ll return your deposit, less 5% handling
            charge, as long as you give us 14 days notice prior to your booked
            stay, else your deposit will become non-refundable. You may want to
            consider travel insurance to cover this eventuality.
          </p>
        </div>
      </div>
    </LayoutClient>
  );
}
