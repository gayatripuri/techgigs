import "./App.css";
import Header from "./components/Header/Navbar";
import HomePage from "./components/HomeBanner/HomeBanner";
import AboutPage from "./components/WhoWeAre/WhoWeAre";
import ContactPage from "./components/ContactUs/Contact";
import PricingPage from "./components/Pricing/Pricing";
import TestimonialPage from "./components/WhoWeAre/Impact";
import FeaturesPage from "./components/Features/Features";

import Footer from "./components/Footer/Footer";
import ExtraFeatures from "./components/ExtraFeatures/ExtraFeatures";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <FeaturesPage />
      <ExtraFeatures />
      <PricingPage />
      <TestimonialPage />
      <ContactPage />

      <Footer />
    </>
  );
}

export default App;
