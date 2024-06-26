import React, { useEffect, useState } from 'react';
import { Gaming } from './Gaming';

export const NovedadesList = ({ novedades }) => {

  const totalNovedades = novedades.length

  const [novedadesPerPage, setNovedadesPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * novedadesPerPage
  const firstIndex = lastIndex - novedadesPerPage
  

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Cargando novedades...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>

      <div className='container'>
        <div className='row justify-content'>
          <div className='col-md-8 offset-md-2'>
            <div className='container-novedades'>
              {novedades.map((novedad) => (
                <div className='card-novedades' key={novedad.id}>
                  <figure className='container-img'>
                    <img src={novedad.imagen} alt={novedad.title} />
                  </figure>
                  <div className='info-novedad'>
                    <h3>{novedad.title}</h3>
                    <p>{novedad.descripcion}</p>
                    <a href={novedad.ver} target="_blank"><button>Ver Más</button></a>
                  </div>
                </div>
              )).slice(firstIndex, lastIndex)}
            </div>
          </div>
        </div>
      </div>
      <Gaming 
        novedadesPerPage={novedadesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalNovedades={totalNovedades}
      />
    </>
  );
}