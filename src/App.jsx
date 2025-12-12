import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';

function App() {
  return (
    <>
      <NavbarComponent />
      {/* Use container-fluid to allow full-width pages */}
      <main className="container-fluid mt-4 mb-5 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;