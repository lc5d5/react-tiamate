const BoasVindas = () => {
  return (
    <section className="bg-[#E7E1DF] text-[#3B2416] py-10 px-5 sm:px-8 md:py-16 md:px-10 font-archivo  tracking-tight">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10">
        <div>
          <img
            src="./banner2.png"
            alt="Bebidas Tiamate"
            className=" w-full h-auto object-cover" />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="mb-2 text-base sm:text-lg">
            Para os amantes de café
          </p>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A97744] mb-6 leading-tight">
            Bem-vindo a<br />Tiamate Coffee
          </h3>

          <p className="mb-4 text-sm sm:text-base">
            A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro
            sabor do café e o seu espírito inovador. Visamos fazer parte da vida
            das pessoas e diferentes culturas, isso é o que nos motiva a
            oferecer o café mais gostoso. Por isso, selecionamos as melhores
            plantações, os grãos, os blends e as pessoas que vão colocar a mão
            na massa para fazer esse delicioso café.
          </p>

          <p className="text-sm sm:text-base">
            Pensamos em fazer os seus momentos mais felizes, seja no café da
            manhã ou em uma reunião. Individualmente ou entre amigos. A Tiamate
            Coffee investe em um conceito atual que transmite às pessoas uma
            sensação de bem-estar. Enquanto nosso café aproxima as pessoas,
            nossos serviços de Wi-Fi gratuito as mantêm conectadas. Descubra
            como navegar na internet enquanto você saboreia um Tiamate.
          </p>

        </div>
      </div>
    </section>
  );
};

export default BoasVindas;