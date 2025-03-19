import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/regular/ScrollToTop';
import CookieConsent from './components/regular/CookieConsent';
import Home from './pages/Home';
import DespreNoi from './pages/DespreNoi';
import Servicii from './pages/Servicii';
import DezvoltareWeb from './pages/DezvoltareWeb';
import OptimizareSEO from './pages/OptimizareSEO';
import MarketingDigital from './pages/MarketingDigital';
import SocialMedia from './pages/SocialMedia';
import Branding from './pages/Branding';
import HostingSecurity from './pages/HostingSecurity';
import Cariere from './pages/Cariere';
import Booking from './pages/Programari';
import Portfolio from './pages/Portfolio';
import EbookDownload from './pages/EbookDownload';
import NotFound from './pages/NotFound';
import Partners from './pages/Partners';
import CRMWaitlist from './pages/CRMWaitlist';
import Waitlist from './pages/Waitlist';
import Dashboard from './pages/Dashboard';
import CRM from './pages/CRM';
import GoogleStartups from './pages/GoogleStartups';
import MicrosoftStartups from './pages/MicrosoftStartups';
import AmazonStartups from './pages/AmazonStartups';
import MongoDBStartups from './pages/MongoDBStartups';
import HubSpotStartups from './pages/HubSpotStartups';
import IntercomStartups from './pages/IntercomStartups';
import StripeStartups from './pages/StripeStartups';
import FinantareStartup from './pages/FinantareStartup';
import StartupFinantareForm from './pages/StartupFinantareForm';
import './App.css';
import Blog from './pages/Blog';
import BlogPostPage from './blog-pages/BlogPostPage';

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}>
            <Route path=":slug" element={<BlogPostPage />} />
          </Route>
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/dezvoltare-web" element={<DezvoltareWeb />} />
          <Route path="/optimizare-seo" element={<OptimizareSEO />} />
          <Route path="/marketing-digital" element={<MarketingDigital />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/hosting-security" element={<HostingSecurity />} />
          <Route path="/cariere" element={<Cariere />} />
          <Route path="/programari" element={<Booking />} />
          <Route path="/portofoliu" element={<Portfolio />} />
          <Route path="/ebook-digitalizare" element={<EbookDownload />} />
          <Route path="/parteneri" element={<Partners />} />
          <Route path="/crm-waitlist" element={<CRMWaitlist />} />
          <Route path="/sales-intelligence" element={<Waitlist />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/google-startups" element={<GoogleStartups />} />
          <Route path="/microsoft-startups" element={<MicrosoftStartups />} />
          <Route path="/amazon-startups" element={<AmazonStartups />} />
          <Route path="/mongodb-startups" element={<MongoDBStartups />} />
          <Route path="/hubspot-startups" element={<HubSpotStartups />} />
          <Route path="/intercom-startups" element={<IntercomStartups />} />
          <Route path="/stripe-startups" element={<StripeStartups />} />
          <Route path="/finantare-startup" element={<FinantareStartup />} />
          <Route path="/inscriere-startup-finantare" element={<StartupFinantareForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;