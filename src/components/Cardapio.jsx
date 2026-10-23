import { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router";

const Cardapio = () => {

    const [imagens, setImagens] = useState([]);
    const [inicio, setInicio] = useState(0);
    const total = imagens.length;

    async function buscarImagens(){
        try {
            setImagens()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        buscarImagens()
    }, [])

    return ( 
        <div className="bg-[#E7E1DF] p-20">
            <h2 className="text-xl text-[#3B2416] text-center">Confira nosso</h2>
            <h1 className="text-[#A97744] text-5xl text-center font-bold mt-3">Cardápio</h1>

            <div className="flex flex-cols justify-center align-items mt-18 transition-transform duration-100 ease-in-out">
                <button><BiLeftArrowAlt
                onClick={() => setInicio((i) => (i - 1 + total) % total)} 
                className="cursor-pointer mr-15 hover:scale-120 duration-200 hover:fill-[#A97744] hover:rounded-full hover:bg-[#3B2416]" 
                size={ehDesktop() ? 50 : 30} /></button>
                {visiveis.map((imagem) => (
                    <img 
                    src={imagem.src} 
                    alt={imagem.alt}
                    className="w-60 md:w-50 hover:scale-110 md:hover:scale-150 duration-200" />
                    )) }
                <button><BiRightArrowAlt 
                onClick={() => setInicio((i) => (i+1) % total)} 
                className="cursor-pointer hover:scale-120 lg:ml-5 md:-ml-5 duration-200 block hover:fill-[#A97744] hover:rounded-full hover:bg-[#3B2416]" size={ehDesktop() ? 50 : 30} /></button>
            </div>

            <div className="flex justify-center">
                <Link to="" className="text-[#3B2416] px-10 py-3 md:px-30 md:py-5 font-semibold bg-[#CF9A5A] mt-10 md:mt-20 rounded hover:bg-[#3B2416] hover:text-[#CF9A5A] transition-transform duration-200 ease-in-out hover:scale-110 mb-10">Ver mais</Link>
            </div>

            <div class="flex justify-center w-[1000px] border-black ">
                <div className="w-[100px] flex justify-center align-items relative mt-18">
                    {
                    imagens.map((imagem) => (
                        <img 
                        src={imagem.src} 
                        alt={imagem.alt}
                        className="w-60 md:w-50 hover:scale-110 md:hover:scale-150 duration-200" />
                        )) 
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Cardapio;