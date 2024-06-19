import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Sobre = () => {
    return(
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className="text-[50px] font-bold uppercase text-orange-400 mb-[1rem]">
                    SOBRE MIM
                </h1>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                    <p className="text-[19px] text-slate-300 w-[80%]">
                    Aspirante a programador backend. Com conhecimento em JAVA, POO e MySQL, estou atualmente focado no desenvolvimento do meu conhecimento em Spring. Minha missão é entrar na área, desempenhar bem e evoluir, buscando constantemente a excelência técnica através de estudos.
                    </p>
                </div>
                <a href="https://drive.google.com/file/d/1XpGL9KVkZO9dZvyWBMbs3PSl3e_022TA/view?usp=sharing">
                            <button className="px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <p>Download CV</p>
                                <ArrowDownTrayIcon/>
                            </button>
                </a>
            </div>
            <div className=" lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                <Image src="/images/foto-portifolio.jpeg" 
                alt="user"
                layout="fill"
                objectFit="contain"
                className="relative z-[11] w-[100%] h-[100%] object-contain"
                />
                <div className="absolute w-[100%] h-[100%] z-[10] bg-orange-400 top-[-2rem] right-[-2rem]"></div>
            </div>
        </div>
    </div>
    );
}

export default Sobre;