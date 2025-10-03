import React from "react";
import HeroSection1 from "./Herosection1" 
import Automation from "./Homeautomation"
import HeroSection2 from "./Herosection2";
import SecuritySolutions from "./Securitysolutions"
import AvSolutions from "./Avsolutions"
import CCtvNetworking from "./Cctvnetworking"
export default function AutomationHome() {
  return (
    <>
    <HeroSection1/>
    <Automation/>
    <HeroSection2/>
    <SecuritySolutions/>
    <AvSolutions/>
    <CCtvNetworking/>
    </>
  );
};

