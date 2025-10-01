import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Shipping from "./pages/Shipping";
import Contact from "./pages/Contact";
import CostCalculator from "./pages/CostCalculator";
import SendQuotation from "./pages/SendQuotation";
import CourierDelivery from "./pages/CourierDelivery";
import B2BExchange from "./pages/B2BExchange";
import LogisticsSolutions from "./pages/LogisticsSolutions";
import TrackShipment from "./pages/TrackShipment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingTerms from "./pages/ShippingTerms";
import InsurancePolicy from "./pages/InsurancePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/shipping" element={<Shipping />} />
          <Route path="/services/courier-delivery" element={<CourierDelivery />} />
          <Route path="/services/b2b-exchange" element={<B2BExchange />} />
          <Route path="/services/logistics-solutions" element={<LogisticsSolutions />} />
          <Route path="/track-shipment" element={<TrackShipment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/send-quotation" element={<SendQuotation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/shipping-terms" element={<ShippingTerms />} />
          <Route path="/insurance-policy" element={<InsurancePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
