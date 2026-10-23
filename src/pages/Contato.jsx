import AlgumaDuvida from "../components/AlgumaDuvida";
import BannerDinamico from "../components/BannerDinamico";

const Contato = () => {
    return ( 
        <>
            <BannerDinamico
                descricao={<>Depois do café eu <br className="lg:inline"/>me expresso.</>}
                imagem="/BannerContato.png"
                posicaoTopo="top-[151px]"
                alinhamento=" left-4 md:left-[133px]"
            />
            <AlgumaDuvida/>
        </>
     );
}
 
export default Contato;