import { useState } from "react";
import { BiArrowBack, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const QuemSomos = () => {

    const tamanho = document.querySelector("body").clientWidth <= 400 ? 400 : 600 
    const [posicao, setPosicao] = useState(0);

    function proximo(){
        if(posicao < 3){
            setPosicao(posicao + 1);
        }        
    }
    function anterior(){
        if(posicao > 0){
            setPosicao(posicao - 1);
        }        
    }


    

    return (
        <div className="flex flex-col justify-center lg:items-center *:flex-1 p-4 lg:py-25 lg:px-33.5 text-[#3B2416]">
            <div className="flex flex-col items-center">
                <h6 className="text-lg mb-3">Para os amantes de café</h6>
                <h2 className="text-[#A97744] text-[50px] mb-8 font-bold">Quem Somos</h2>
                <p className="text-[#3B2416] mb-11 text-center md:text-left">Com um modelo de negocio sólido e rentavel, a Tiamate se destaca entre as melhores oportunidades de franquia pelas 4 razões que seguem:</p>
                <div className="w-100 md:w-150 overflow-hidden">
                    <div style={{ left: `-${posicao * tamanho}px`}} className={`flex w-[${tamanho * 4}px] relative duration-200`}>
                        <div className="flex items-center gap-4">
                            <img src="./icone1.png" alt="" />
                            <p>Universidade corporativa que auxilia na capacitação operacional e desenvolvimento de habilidades gerenciais</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="./icone2.png" alt="" />
                            <p>Universidade corporativa que auxilia na capacitação operacional e desenvolvimento de habilidades gerenciais</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="./icone3.png" alt="" />
                            <p>Universidade corporativa que auxilia na capacitação operacional e desenvolvimento de habilidades gerenciais</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="./icone4.png" alt="" />
                            <p>Universidade corporativa que auxilia na capacitação operacional e desenvolvimento de habilidades gerenciais</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 mt-15 *:bg-[#A97744] *:duration-200 *:hover:bg-[#3B2416] *:rounded-full *:w-7.5 *:h-7.5 *:text-white *:flex *:justify-center *:items-center *:p-1 *:cursor-pointer">
                    <BiLeftArrowAlt onClick={anterior}/>
                    <BiRightArrowAlt onClick={proximo} />
                </div>
            </div>
            <div className="flex justify-end">
                <img src="./cafezao.png" alt="" />
            </div>
        </div>
    );
}

export default QuemSomos;