import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router';

const Header = () => {
    const [mostraMenu, setMostraMenu] = useState(false);
    const [tamanho, setTamanho] = useState(window.innerWidth);
    return (
        <>
            {tamanho > 780 ? (
                <header className="bg-[#292625] px-10.75 lg:px-4 h-27.5 w-screen flex items-center justify-between">
                    <div className='flex items-center'>
                        <img src="./public/HeaderLogo_horizontal_01.png" className="w-37.5 h-[48.97px]" alt="" />
                        <ul className='flex ml-13.75 lg:ml-5 gap-11.25 lg:gap-5'>
                            <li>
                                <Link to="/" className="hover:text-yellow-500 text-[18px] text-[#F5E7DA]">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/nosso-cafe" className="hover:text-yellow-500 whitespace-nowrap text-[18px] text-[#F5E7DA]">Nosso Café</Link>
                            </li>
                            <li>
                                <Link to="/contato" className="hover:text-yellow-500 text-[18px] text-[#F5E7DA]">Contato</Link>
                            </li>
                            <li>
                                <Link to="/cardapio" className="hover:text-yellow-500 text-[18px] text-[#F5E7DA]">Cardápio</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                        <Link to="/franquia" className="bg-[#C7794A] text-[#3B2416] ml-35.75 xl:ml-10 lg:ml-3 font-semibold w-55 lg:w-50 h-13 flex items-center justify-center whitespace-nowrap px-5.75">Seja um Franqueado</Link>
                    </div>
                </header>
            ) : (
                <header >
                    <div className="bg-[#292625] px-4.75  items-center justify-between lg:px-4 h-27.5 w-screen flex flex-row">
                        <div className='flex'>
                             <BiMenu onClick={event => mostraMenu ? (setMostraMenu(false)) : (setMostraMenu(true))} className='text-white size-15' />
                            <img src={(tamanho < 700) ? ("./public/headerlogo.png"):("./public/HeaderLogo_horizontal_01.png")}  className={(tamanho < 700) ? ("mt-2 w-10 h-10") : ("w-37.5 h-[48.97px] mt-2")} alt="" />
                        </div>
                       
                        <Link to="/franquia" className="bg-[#C7794A] text-[#3B2416] xl:ml-10 lg:ml-3 font-semibold w-55 lg:w-50 h-13 flex items-center justify-center whitespace-nowrap px-5.75">Seja um Franqueado</Link>
                        
                        
                    </div>
                    <div className={mostraMenu ? (" flex ") : ("hidden opacity-0 invisible")}>
                        <div id="overlay" onClick={() => { setMostraMenu(false) }} className={mostraMenu ? ("w-full h-screen bg-[#292625]/70 fixed top-0 left-0 duration-200") : ("opacity-0 invisible")}></div>
                        <ul className='w-2/4 h-screen flex flex-col items-start gap-10 relative z-10 bg-[#C7794A]'>
                            <li>
                                <Link to="/" onClick={() => { setMostraMenu(false) }} className="hover:text-yellow-500 text-[25px] text-black font-bold">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/nosso-cafe" onClick={() => { setMostraMenu(false) }} className="hover:text-yellow-500 whitespace-nowrap text-[25px] text-black font-bold mt-5 mb-5">Nosso Café</Link>
                            </li>
                            <li>
                                <Link to="/contato" onClick={() => { setMostraMenu(false) }} className="hover:text-yellow-500 text-[25px] text-black font-bold">Contato</Link>
                            </li>
                            <li>
                                <Link to="/cardapio" onClick={() => { setMostraMenu(false) }} className="hover:text-yellow-500 text-[25px] text-black font-bold">Cardápio</Link>
                            </li>
                        </ul>
                    </div>
                </header>

            )}
        </>

    );
}

export default Header;