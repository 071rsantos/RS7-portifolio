import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLinguage from "./SkilsLinguage";

const Skils = () => {
    return(
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">Escolaridade & <span className="text-orange-400">Habilidades</span></h1>
            <div className="w-[80%] mx-auto pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkilsItem title="Técnico em Desenvolvimento de Sistemas" year="2022 - 2023"/>
                    <SkilsItem title="Superior em Análise e Desenvolvimento de Sistemas" year="2024 - 2026"/>
                    <SkilsLinguage
                        skill1="Java"
                        skill2="JavaScript"
                        skill3="React"
                        skill4="TypeScript"
                        level1="w-[70%]"
                        level2="w-[60%]"
                        level3="w-[50%]"
                        level4="w-[40%]"
                    />
                </div>
                <div>
                    <SkilsItem title="Curso em video - Hardware - 20 horas" year="2024"/>
                    <SkilsItem title="Bootcamp Java Santander - 80 horas" year="2024"/>
                    <SkilsLinguage
                        skill1="Montagem e manutenção de pc"
                        skill2="Spring"
                        skill3="Testes unitarios"
                        skill4="Stream API"
                        level1="w-[100%]"
                        level2="w-[50%]"
                        level3="w-[50%]"
                        level4="w-[70%]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Skils;