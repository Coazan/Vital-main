import { NavBar } from "./components/navbar";
import { Profile, Home, Search, Login } from "./components/pages"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

