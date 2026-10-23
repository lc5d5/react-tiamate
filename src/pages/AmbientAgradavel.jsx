import React from "react";
import photo1 from '../assets/1igthAA.webp';
import photo2 from '../assets/2igthAA.webp';
import photo3 from '../assets/3igthAA.webp';
import photo4 from '../assets/4igthAA.webp';
import photo5 from '../assets/5igthAA.webp';
import photo6 from '../assets/6igthAA.webp';
import { FaInstagram } from "react-icons/fa";

const AmbientAgradavel = () => {
    return (
        <section className="flex justify-center w-full py-10 px-4">
            
            <div className="flex flex-col gap-6 max-w-6xl w-full">

                {/* Cabeçalho */}
                <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
                    <div className="flex flex-col">
                        <h6 className="text-[#7A6458] dark:text-gray-300 block text-sm font-medium">
                            Para você e seus amigos
                        </h6>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#A97744] dark:text-white mt-1">
                            Ambiente agradável
                        </h1>
                    </div>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group cursor-pointer mt-4 md:mt-0"
                    >
                        <span className="text-sm font-medium text-[#7A6458] dark:text-gray-200 group-hover:underline">
                            Veja mais
                        </span>
                        <div className="w-12 h-12 rounded-full bg-[#D28C56] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
                            <FaInstagram size={22} />
                        </div>
                    </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
                    <img
                        src={photo1}
                        alt="Ambiente agradável 1"
                        className="w-full h-80 object-cover"
                    />
                    <img
                        src={photo2}
                        alt="Ambiente agradável 2"
                        className="w-full h-80 object-cover"
                    />
                    <img
                        src={photo3}
                        alt="Ambiente agradável 3"
                        className="w-full h-80 object-cover"
                    />
                    <img
                        src={photo4}
                        alt="Ambiente agradável 4"
                        className="w-full h-80 object-cover"
                    />
                    <img
                        src={photo5}
                        alt="Ambiente agradável 5"
                        className="w-full h-80 object-cover"
                    />
                    <img
                        src={photo6}
                        alt="Ambiente agradável 6"
                        className="w-full h-80 object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default AmbientAgradavel;