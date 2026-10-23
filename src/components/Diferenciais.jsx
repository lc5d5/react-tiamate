import { useState } from 'react';
import { LuCoffee, LuDollarSign, LuHeartHandshake, LuMonitor, LuStore, LuTruck } from 'react-icons/lu';

const dadosDiferenciais = [
  {
    id: 1,
    titulo: "Média de Lucratividade",
    descricao: "A tiamate possui faturamento bruto percentual de lucro de 12% a 18%.",
    icon: LuDollarSign ,
  },
  {
    id: 2,
    titulo: "Logística Eficiente",
    descricao: "Entrega rápida e segura para garantir o abastecimento constante do seu negócio.",
    icon: LuTruck,
  },
  {
    id: 3,
    titulo: "Qualidade Premium",
    descricao: "Produtos selecionados com o mais alto padrão de sabor e aroma do mercado.",
    icon: LuCoffee,
  },
  {
    id: 4,
    titulo: "Suporte à Loja",
    descricao: "Acompanhamento completo desde a inauguração até a gestão diária da franquia.",
    icon: LuStore,
  },
  {
    id: 5,
    titulo: "Tecnologia de Ponta",
    descricao: "Sistemas integrados para simplificar as vendas e o controle de estoque.",
    icon: LuMonitor,
  },
  {
    id: 6,
    titulo: "Compromisso Social",
    descricao: "Parcerias sustentáveis que valorizam produtores locais e o meio ambiente.",
    icon: LuHeartHandshake,
  },
];


export default function Diferenciais() {
  const [itemAtivo, setItemAtivo] = useState(dadosDiferenciais[0]);

  const IconeGrande = itemAtivo.icon;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-[#8B6E4E]">
        
        {/* LADO ESQUERDO: Título e Ícones Pequenos */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1">
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Diferenciais <br className="hidden md:inline" /> da Tiamate
          </h2>
          
          <div className="grid grid-cols-4 gap-3 max-w-[240px]">
            {dadosDiferenciais.map((item) => {
              const IconePequeno = item.icon;
              const isSelected = item.id === itemAtivo.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setItemAtivo(item)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                    ${isSelected 
                      ? 'bg-[#4A2E1B] text-white border-[#4A2E1B] scale-110 shadow-md' 
                      : 'bg-[#F2ECE4] text-[#4A2E1B] border-[#D1C2B2] hover:bg-[#E5DCD0]'
                    }`}
                  aria-label={item.titulo}
                >
                  <IconePequeno size={20} />
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTRO: Ícone Grande */}
        <div className="flex justify-center order-2 md:order-2">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-[#C4A482] bg-[#F2ECE4] flex items-center justify-center p-8 shadow-sm transition-all duration-500 transform">
            <div className="w-full h-full rounded-full bg-[#4A2E1B] text-[#F2ECE4] flex items-center justify-center shadow-inner">
              <IconeGrande className="w-24 h-24 md:w-28 md:h-28 animate-fade-in" />
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Texto Dinâmico */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-3 min-h-[150px] md:pl-6 border-t md:border-t-0 md:border-l border-dashed border-blue-400 pt-6 md:pt-0">
          <h3 className="text-3xl font-bold mb-4 text-[#8B6E4E]">
            {itemAtivo.titulo}
          </h3>
          <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
            {itemAtivo.descricao}
          </p>
        </div>

      </div>
    </section>
  );
}
