// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroBanner from './components/HeroBanner';
// import Features from './components/Features';
// import GadgetListing from './components/GadgetListing';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import './styles/global.css';

// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <HeroBanner />
//       <Features />
//       <GadgetListing />
//       <ContactUs />
//       <Footer />
//     </div>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes, not Switch
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetListing from './components/GadgetListing';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SignUpPage from './components/SignUpPage';  
import SignInPage from './components/SignInPage';  
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<HeroBanner />} />  {/* Use element prop */}
          <Route path="/features" element={<Features />} />
          <Route path="/gadget-listing" element={<GadgetListing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />  {/* You can have a separate Sign In page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
