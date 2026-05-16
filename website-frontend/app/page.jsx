"use client";

import React from "react";

import AboutUs from "@/components/main/AboutUs";
import ClientsSection from "@/components/main/ClientsSection";
import FlowSection from "@/components/main/FlowSection";
import Footer from "@/components/main/Footer";
import HeroSection from "@/components/main/HeroSection";
import LogoSection from "@/components/main/LogoSection";
import Navbar from "@/components/main/Navbar";
import Pricing from "@/components/main/Pricing";
import ScrollToTop from "@/components/ScrollToTop";
import ProblemSection from "@/components/main/ProblemSection";
import Guarantee from "@/components/main/Guarantee";
import GetQuotesButton from "@/components/GetQuotesButton";
import WhoThisIsFor from "@/components/main/WhoThisIsFor";
import FAQSection from "@/components/main/FAQSection";
import ComparisonSection from "@/components/main/ComparisonSection";

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ProblemSection />
      <FlowSection />
      <Pricing />
      <Guarantee />
      <ClientsSection />
      <WhoThisIsFor />
      <ComparisonSection />
      <FAQSection />
      <LogoSection />
      <Footer />
      <ScrollToTop />
      {/* <GetQuotesButton /> */}
    </>
  );
};

export default Page;
