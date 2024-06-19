import React from "react";

interface Props{
    skill1:string;
    skill2:string;
    skill3:string;
    skill4:string;
    level1:string;
    level2:string;
    level3:string;
    level4:string;
}

const SkilsLinguage = ({skill1,skill2,skill3,skill4,level1,level2,level3,level4}:Props) =>{
    return(
        <div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skill1}
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
            </div>
            <div className="relative mb-[3rem]">
            <h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                {skill2}
            </h1>
            <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
        </div>
        <div className="relative mb-[3rem]">
        <h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {skill3}
        </h1>
        <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
    </div>
    <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skill4}
                </h1>
                <span className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
            </div>
        </div>
    );
}

export default SkilsLinguage;