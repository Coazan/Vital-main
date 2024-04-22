import React, { useState } from 'react';
import { NovedadesList } from './components/NovedadesList';
import novedadesData from './mocks/novedades.json';
import './home.css';

  export function Home() {

  return (
    <div >
      <h1 className='title'>Novedades Music</h1>
      <NovedadesList novedades={novedadesData.news} />
    </div>
  );
}