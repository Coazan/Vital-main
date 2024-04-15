
import { NavBar } from "./components/navbar";
import { Profile, Home, Search, Login } from "./components/pages"; // Asumiendo que tienes estos componentes exportados correctamente
import { FavoritesSongs } from "./context/favoritesContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <FavoritesSongs>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </FavoritesSongs>
    </BrowserRouter>
  );
}

export default App;

