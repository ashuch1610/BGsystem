//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Manufacturing from './pages/Manufacturing';
import Engineeringservices from './pages/Engineeringservices';
import TrainingServices from "./pages/TrainingServices";
import RegistrationForm from "./pages/RegistrationForm";
import ContactForm from "./pages/ContactForm";
const App=()=> {
  
  return (
   
 <div className='bg-img'>
   <Router>
        <Navbar/>
       
        <Routes >
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/BG_Design_AS/services" element={<Services/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/gallery" element={<Gallery/>} />
          <Route exact path="/contact" element={<ContactForm/>} />
          <Route exact path="/footer" element={<Footer/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/manufacturing" element={<Manufacturing/>} />
          <Route exact path="/engineering-services" element={<Engineeringservices/>} />
          <Route exaxt path='/trainging-services'  element={<TrainingServices/>}/>
          <Route exaxt path='/registration-form' element={<RegistrationForm/>}/>
      

        </Routes>
        <Footer/>
      </Router>
     </div>
  );
}

export default App;
