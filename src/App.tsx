import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ParcelCollectionPage } from './pages/ParcelCollectionPage';
import { UKParcelDeliveryPage } from './pages/UKParcelDeliveryPage';
import { BusinessCourierSolutionsPage } from './pages/BusinessCourierSolutionsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { TrackPage } from './pages/TrackPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-swift-dark text-slate-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/parcel-collection" element={<ParcelCollectionPage />} />
            <Route path="/services/uk-parcel-delivery" element={<UKParcelDeliveryPage />} />
            <Route path="/services/business-courier-solutions" element={<BusinessCourierSolutionsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
