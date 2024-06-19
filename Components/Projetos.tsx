import React from "react";
import Image from "next/image";

const Projetos = () => {
    return(
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-orange-400">jetos</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div>
                    <a href="https://github.com/071rsantos/valoreco" className="text-center">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 realative -w[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p1.png" 
                        alt="portifolio"
                        layout="fill"
                        className="object-contain"
                        />
                    </div>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">INSPIRADO PELO JOGO LETRECO, FIZ UM PROJETO BASEADO NO JOGO VALORANT.</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/071rsantos/PassagensA-reas" className="text-center">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 realative -w[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p2.png" 
                        alt="portifolio"
                        layout="fill"
                        className="object-contain"
                        />
                    </div>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">PROGRAMA DE REGISTRO E VENDA DE PASSAGENS AREAS UTILIZANDO PHP.</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/071rsantos/atividadeCarros" className="text-center">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 realative -w[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p3.jpg" 
                        alt="portifolio"
                        layout="fill"
                        className="object-contain"
                        />
                    </div>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">PROJETO BÁSICO EM JAVA DE UMA FACTORY DE CARROS, UTILIZAÇÃO DE PADRÕES DE PROJETOS.</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/071rsantos/calculadoraFactory" className="text-center">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 realative -w[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p4.png" 
                        alt="portifolio"
                        layout="fill"
                        className="object-contain"
                        />
                    </div>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">CALCULADORA EM JAVASCRIPT UTILIZANDO O PADRÃO DE PROJETO FACTORY.</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/071rsantos/Academia" className="text-center">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 realative -w[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p5.jpg" 
                        alt="portifolio"
                        layout="fill"
                        className="object-contain"
                        />
                    </div>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">PROJETO EM JAVA UTILIZANDO OS CONCEITOS DA ORIENTAÇÃO OBJETO PARA MATRICULA EM UMA ACADEMIA</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/071rsantos/desafio-POO-DIO" className="text-center">
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 realative -w[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p6.jpg" 
                        alt="portifolio"
                        layout="fill"
                        className="object-contain"
                        />
                    </div>
                    <p className="text-[15px] text-[#d3d2d2] font-normal">PROJETO DO BOOTCAMP SANTANDER ONDE CRIAMOS UM AMBIENTE DE BOOTCAMP UTILIZANDO OS CONCEITOS DA ORIENTAÇÃO OBJETO</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
