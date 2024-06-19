import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Services from "@/Components/Services";
import Sobre from "@/Components/Sobre";
import Skils from "@/Components/Skils"
import React, { useState } from "react";
import Projetos from "@/Components/Projetos";
import Contato from "@/Components/Contato";

const HomePage = () => {

  const [nav, setNav]=useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return <div className="overflow-x-hidden">
      <div>
        {/* NAVBAR */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* HERO SECTION */}
        <Hero/>
        {/*Sobre*/}
        <div className="relative z-[30]">
          <Sobre/>
          {/*Serviços*/}
          <Services/>
          {/* Habilidades */}
          <Skils/>
          {/* Projetos */}
          <Projetos/>
          {/* Contato */}
          <Contato/>
        </div>
      </div>
    </div>;
};

export default HomePage;