import React from 'react';

export const Gaming = ({novedadesPerPage, totalNovedades, currentPage, setCurrentPage }) => {

  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalNovedades / novedadesPerPage); i++ ){
    pageNumber.push(i)
  }

  const onPreviusPage = () =>{
    setCurrentPage(currentPage - 1);
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }

  return (
    <nav 
      className='pagination is-centered' 
      role='navigation' 
      aria-label='pagination'
    >
      <a 
        className={`pagination-previous is-link ${
          currentPage === 1 ? 'is-disabled' : ''
        }`} 
        onClick={onPreviusPage} >Anterior</a>
      <a 
        className={`pagination-next ${
        currentPage >= pageNumber.length ? 'is-disabled' : ''}`} 
        onClick={onNextPage}>Siguiente</a>
        <ul class='pagination-list'>
          {
            pageNumber.map(noPage => (
              <li key={noPage}>
                <a 
                  className={`pagination-link ${
                    noPage === currentPage ? 'is-current' : ''
                  }`}
                  onClick={() => onSpecificPage(noPage)}
                >
                  {noPage}
                </a>
              </li>
            ))
          }
        </ul>
    </nav>
  );
}