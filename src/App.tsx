import React, { Suspense } from 'react';
import './App.sass';
import Home from './home/page';

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Home />
    </Suspense>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
