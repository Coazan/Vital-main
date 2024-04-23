import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login, Profile, Search } from '../components/pages';



export const AppRouter = () => {
  const authStatus = 'not-authenticated';


  return (
    <Routes>

      {authStatus === 'not-authenticated' ? (
        <Route path='/' element={<Login />} />
      ) : (
        <Route path='*' element={<Home />} />

      )}
      {/* Siempre que no coincida con ninguna ruta anterior */}

      <Route path='*' element={<Navigate to='/' />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />



    </Routes>
  );
};
