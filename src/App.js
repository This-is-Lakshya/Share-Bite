import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import RegisterAsInd from './pages/Register/RegisterAsInd.jsx';
import RegisterAsNGO from './pages/Register/RegisterAsNGO.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />

          <Route path={'/login'} element={<Login />} />

          <Route path={'/register'} element={<Register />} />
          <Route path={'/registerAsIndividual'} element={<RegisterAsInd />} />
          <Route path={'/registerAsNGO'} element={<RegisterAsNGO />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
