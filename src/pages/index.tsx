import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <h2>Welcome to Highfield House</h2>
      <div className="md:flex">
        <div className="flex-1 md:mr-16">
          <p>
            A lovely spacious Edwardian Bed &amp; Breakfast in the heart of Sheringham, quietly tucked away yet just
            a stones throw to the <strong>town centre</strong>, <strong>beach</strong>, <strong>coastal path</strong>,
            <strong> rail station</strong> and <strong>golf course</strong>.
          </p>
          <div className="bg-orange-200 border-l-4 border-orange-500 text-orange-700 px-4 py-2 mb-4" role="alert">
            <p className="m-0">
              After a busy day, come and relax in our quiet garden, grab a
              book or game from our small library and head to our outside bar.<br />
              We are open all year!<br />
              <strong>Garden Bar now open!</strong>
            </p>
          </div>
          <p>
            We&apos;d love for you to come and stay with us - you&apos;ll get the very best of good ole Norfolk hospitality,
            with a great nights sleep in one of our quiet en-suite bedrooms and a breakfast to write home about.
          </p>
          <p>
            <strong>Sheringham town</strong> is an absolute must see, there really is something for everyone, from
            our blue flag beach with lovely promenade to our steam railway, which never fails to enthral, whatever
            your age.
          </p>
          <p>
            There is a links golf course situated on the cliff tops with views to put you right off your game. We
            have some beautiful coastal and inland walks, with many renowned beauty spots and wildlife, with a coastal
            bus service to hail if you don&apos;t fancy the walking back. The surrounding area is awash with National Trust
            places of interest and you will never struggle for some truly great food and a refreshing pint.
          </p>
          <p>We hope that you will visit us soon, and return often.</p>
          <p><em>— Sammy &amp; John</em></p>
        </div>
        <div className="flex-1 max-w-xs">
          <p><img src="/images/room.jpeg" alt="Guest room" /></p>
          <p><img src="/images/kettle.jpeg" alt="Room amenities" /></p>
          <p><img src="/images/outside-evening.jpeg" alt="Garden evening" /></p>
          <p><img src="/images/190123-5Mont-029-768x513.jpg" alt="Exterior view" /></p>
        </div>
      </div>
    </Layout>
  );
}
