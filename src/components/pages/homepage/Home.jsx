import React, { useState } from 'react';
import { NovedadesList } from './components/NovedadesList';
import novedadesData from './mocks/novedades.json';
import './home.css';

  export function Home() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <h1 className='title'>Novedades Music</h1>
      <NovedadesList novedades={novedadesData.news} />
    </div>
  );
}