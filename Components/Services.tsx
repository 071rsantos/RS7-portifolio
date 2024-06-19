import { CodeBracketIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import React from "react";

const Services = () => {
    return(
        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
            <p className="heading">
                Meus <span className="text-orange-400">Serviços</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div>
                    <div className="bg-purple-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CpuChipIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeB]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">MONTAGEM E MANUTENÇÃO DE COMPUTADORES</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">Certificado em hardware pelo Curso em Vídeo, sou hábil em montagem e manutenção de computadores, incluindo instalação de sistemas operacionais e resolução de problemas. Possuo experiência prática adquirida através de trabalhos autônomos na área.</p>
                    </div>
                </div>
                <div>
                <div className="bg-green-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeB]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">PROGRAMAÇÃO</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">Sou formado como Técnico em Desenvolvimento de Sistemas pela escola técnica Senai, onde adquiri habilidades em programação front-end utilizando HTML, CSS, JavaScript e PHP, e back-end com Java, PHP e manipulação de banco de dados.</p>
                    </div>
                </div>
                <div>
                <div className="bg-yellow-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <ComputerDesktopIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeB]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">TESTES DE SOFTWARE E MICROSERVIÇOS</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">Em busca de me tornar um profissional cada vez mais completo, participei do bootcamp de backend com Java do Santander. Nesse curso, aprendi sobre gerenciamento de Maven, testes unitários, Stream API e Spring Boot.</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Services;