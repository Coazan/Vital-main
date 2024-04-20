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
    <nav className="d-flex justify-content-center">
  <ul className="pagination">
    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <a className="page-link" href="#" onClick={onPreviusPage}>Anterior</a>
    </li>
    {pageNumber.map(noPage => (
      <li key={noPage} className={`page-item ${noPage === currentPage ? 'active' : ''}`}>
        <a className="page-link" href="#" onClick={() => onSpecificPage(noPage)}>{noPage}</a>
      </li>
    ))}
    <li className={`page-item ${currentPage >= pageNumber.length ? 'disabled' : ''}`}>
      <a className="page-link" href="#" onClick={onNextPage}>Siguiente</a>
    </li>
  </ul>
</nav>


  );
}