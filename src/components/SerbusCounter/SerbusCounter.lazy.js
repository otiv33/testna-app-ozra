import React, { lazy, Suspense } from 'react';

const LazySerbusCounter = lazy(() => import('./SerbusCounter'));

const SerbusCounter = props => (
  <Suspense fallback={null}>
    <LazySerbusCounter {...props} />
  </Suspense>
);

export default SerbusCounter;
