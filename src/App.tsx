import type { FC } from 'react';
import { memo } from 'react';

// import resets from '../../../components/_resets.module.css';
import resets from '../components/_resets.module.css';
// import { MacBookPro142 } from '../../../components/MacBookPro142/MacBookPro142.js';
import { MacBookPro142 } from '../components/MacBookPro142/MacBookPro142.js';
import classes from './App.module.css';
// @ts-nocheck
// import EmailSubscription from '../components/ContactForm.jsx'


interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MacBookPro142 />
    </div>
  );
});
