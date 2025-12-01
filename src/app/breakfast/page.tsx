import LayoutClient from '../../components/LayoutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breakfast: Highfield House',
};

export default function Breakfast() {
  return (
    <LayoutClient>
      <h2>Breakfast</h2>
      <div className="md:flex">
        <div className="flex-1 md:mr-16">
          <p>
            Our mission is to bring you the very best breakfast you&apos;ve ever eaten – with choice and quality second to
            none; it should see you through till tea time!
          </p>
          <h3>Breakfast table</h3>
          <ul className="list">
            <li>Fruit juice</li>
            <li>Fresh fruit</li>
            <li>Choice of cereals including porridge</li>
            <li>Yoghurt</li>
          </ul>
          <h3>Breakfast menu</h3>
          <ul className="list">
            <li>Full English breakfast, ingredients sourced locally.</li>
            <li>Ful Vegetarian &amp; Vegan menu to choose from including scrambled Tofu on toast and vegetarian eggs benedict!.</li>
            <li>Eggs Benedict, with bacon or salmon, our rich Hollandaise sauce freshly made each morning.</li>
            <li>Scrambled or Poached Eggs on toast with some smoked salmon if you fancy.</li>
            <li>Smoked kipper served with scrambled eggs, baked tomato and bread &amp; butter.</li>
            <li>Toasted white or wholemeal bread.</li>
            <li>Selection of jams and marmalade.</li>
          </ul>
          <h3>Drinks</h3>
          <ul className="list">
            <li>Tea, Earl Grey, decaffeinated, fruit and herbal</li>
            <li>Cafetière of fresh coffee</li>
          </ul>
        </div>
        <div className="flex-1 max-w-xs">
          <p><img src="/images/English.jpg" alt="Full English breakfast" /></p>
          <p><img src="/images/dining-room-624x466.jpg" alt="Dining room" /></p>
          <p><img src="/images/Benedict.jpg" alt="Eggs Benedict" /></p>
        </div>
      </div>
    </LayoutClient>
  );
}
