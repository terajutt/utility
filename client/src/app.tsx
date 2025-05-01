import { Switch, Route } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import GstCalculator from "@/pages/GstCalculator";
import StandardCalculator from "@/pages/StandardCalculator";
import BmiCalculator from "@/pages/BmiCalculator";
import AgeCalculator from "@/pages/AgeCalculator";
import QrCodeGenerator from "@/pages/QrCodeGenerator";
import LinkShortener from "@/pages/LinkShortener";
import TextTools from "@/pages/TextTools";
import UnitConverter from "@/pages/UnitConverter";
import AboutModal from "@/pages/AboutModal";
import NotFound from "@/pages/not-found";
import { useState } from "react";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header onAboutClick={() => setShowAbout(true)} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gst-calculator" component={GstCalculator} />
          <Route path="/calculator" component={StandardCalculator} />
          <Route path="/bmi-calculator" component={BmiCalculator} />
          <Route path="/age-calculator" component={AgeCalculator} />
          <Route path="/qr-code-generator" component={QrCodeGenerator} />
          <Route path="/link-shortener" component={LinkShortener} />
          <Route path="/text-tools" component={TextTools} />
          <Route path="/unit-converter" component={UnitConverter} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer onAboutClick={() => setShowAbout(true)} />
      
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
    </div>
  );
}

export default App;
