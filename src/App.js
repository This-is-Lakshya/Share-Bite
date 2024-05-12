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
import RequestGenForm from './pages/RequestGeneration/RequestGenForm.jsx';
import FAQs from './pages/FAQs/FAQs.jsx';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import PrivacyPolicy from './pages/Documentations/PrivacyPolicy.jsx';
import ApprovedRegistrationNGO from './pages/Register/ApprovedRegistrationNGO.jsx';
import TermsAndConditions from './pages/Documentations/TermsAndConditions.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyCx5bKP1xej96W7ayf0CUGm0ognsCtZFI8",
  authDomain: "sharebite-4c56e.firebaseapp.com",
  databaseURL: "https://sharebite-4c56e-default-rtdb.firebaseio.com",
  projectId: "sharebite-4c56e",
  storageBucket: "sharebite-4c56e.appspot.com",
  messagingSenderId: "4976226832",
  appId: "1:4976226832:web:729866a1c23c7b70ea1095",
  measurementId: "G-0T3641WZ74"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />

          <Route path={'/requestGeneration'} element={<RequestGenForm />} />

          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />

          <Route path={'/login'} element={<Login />} />

          <Route path={'/register'} element={<Register />} />
          <Route path={'/registerAsIndividual'} element={<RegisterAsInd />} />
          <Route path={'/registerAsNGO'} element={<RegisterAsNGO />} />
          <Route path={'/approvedRegistrationNGOs'} element={<ApprovedRegistrationNGO />} />

          <Route path={'/FAQs'} element={<FAQs />} />
          <Route path={'/privacyPolicy'} element={<PrivacyPolicy />} />
          <Route path={'/termsAndConditions'} element={<TermsAndConditions />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
