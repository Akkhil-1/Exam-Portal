import React from "react";
import { ComplexNavbar } from "./components/Header";
import { FooterWithLogo } from "./components/Footer";
import {TypewriterEffectDemo} from "./components/Hero";
import { HorizontalCard } from "./components/Features";

function LandingPage() {
  return (
    <div>
      <ComplexNavbar/>
      <TypewriterEffectDemo/>
      <HorizontalCard />
      <FooterWithLogo />
    </div>
  );
}

export default LandingPage;
