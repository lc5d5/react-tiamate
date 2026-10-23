/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AXIOS } from '../services';


const TiamateMidia = () => {

  const [noticias, setNoticias] = useState([]);

  async function buscarNoticias() {
    try {
      const resposta = await AXIOS.get("/noticias");
      setNoticias(resposta.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    buscarNoticias();
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">

      <div className="mb-10 left-0 text-left">
        <span className="block text-sm md:text-base font-normal text-gray-700 tracking-wide">
          Fique por dentro
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#b37d4e] mt-1">
          Tiamate na Mídia
        </h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {noticias.map((item) => (
          <div key={item.id} className="flex flex-col group border border-gray-100 rounded-lg p-4 shadow-sm">

            <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-gray-100">
              <img
                src={item.imagem}
                alt={`Notícia do jornal ${item.jornal}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <span className="text-sm font-bold text-amber-800 mt-4 uppercase">{item.jornal}</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-6 leading-snug min-h-[56px]">
              {item.titulo}
            </h3>


            <Link
              to={`/noticia/${item.id}`}
              className="mt-auto block w-full text-center py-3 px-4 bg-amber-800 text-white font-medium rounded hover:bg-amber-900 transition-colors duration-200"
            >
              Notícia Completa
            </Link>

          </div>
        ))}
      </div>
    </section>

  );
}

export default TiamateMidia;