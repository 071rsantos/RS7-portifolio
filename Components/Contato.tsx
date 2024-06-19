import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from "react";

const Contato = () => {
    return (
        <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
            <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
                <div className="flex items-center space-x-6">
                    <div className="md:2-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <MapIcon className="md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Endereço</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">Rua Turipiranga, Caminho de Areia, Salvador-BA.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:2-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Telefone +55</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">71 9 9682-2628<br />71 3314-5812</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:2-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <FaLinkedin className="md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">LinkedIn</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">
                            <a href="https://www.linkedin.com/in/rodrigo-s-conceicao/" target="_blank" rel="noopener noreferrer">
                                Rodrigo Santos Conceição
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="md:2-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <FaGithub className="md:w-[5rem] md:h-[5rem] w-[2rem] h-[2rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">GitHub</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">
                            <a href="https://github.com/071rsantos" target="_blank" rel="noopener noreferrer">
                                071Rsantos
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
                    Rodrigo Santos Conceição 2024 | Todos os direiros reservados.
                </div>
                <div className="flex items-center space-x-10">
                    <p className="text-[18px] text-white opacity-20"><span className="text-orange-400">Email:</span> santos.rodrigo.c7@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contato;
