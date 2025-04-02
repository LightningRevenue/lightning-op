import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Ecommerce from './pages/Ecommerce';
import './App.css';
import Blog from './pages/Blog';
import BlogPostPage from './blog-pages/BlogPostPage';
import CookiePolicy from './pages/CookiePolicy';
import TermeniSiConditii from './pages/TermeniSiConditii';
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate';
import SendGridDashboard from './pages/SendGridDashboard';
import LimitedOffer from './pages/LimitedOffer';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/despre-noi" element={<DespreNoi />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/dezvoltare-web" element={<DezvoltareWeb />} />
        <Route path="/optimizare-seo" element={<OptimizareSEO />} />
        <Route path="/marketing-digital" element={<MarketingDigital />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/hosting-security" element={<HostingSecurity />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
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
        <Route path="/politica-cookie" element={<CookiePolicy />} />
        <Route path="/termeni-si-conditii" element={<TermeniSiConditii />} />
        <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
        <Route path="/dashboard/email" element={<SendGridDashboard />} />
        <Route path="/oferta-limitata" element={<LimitedOffer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;