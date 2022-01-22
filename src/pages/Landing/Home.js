import React from 'react';
import Description from './components/Description';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

export default function Home() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Description />
    </>
  );
}
