import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Pizza from "./pages/Pizza.jsx";
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
};

export default App;
