import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
    return ( 
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <Particle/>
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        Olá, me chamo <span className="text-orange-400">Rodrigo Santos</span>
                    </h1>
                    <TextEffect/>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <a href="https://drive.google.com/file/d/1XpGL9KVkZO9dZvyWBMbs3PSl3e_022TA/view?usp=sharing">
                            <button className="px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <p>Download CV</p>
                                <ArrowDownTrayIcon/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
                    <Image src="/images/capaLinkedin.png" alt="User" layout="fill" className="object-cover rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;