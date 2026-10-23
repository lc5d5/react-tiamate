import BoasVindas from "../components/BoasVindas";
import BannerDinamico from "../components/BannerDinamico";
import Depoimentos from "../components/Depoimentos";
import FitCultural from "../components/FitCultural";
import AmbientAgradavel from "./AmbientAgradavel";
import Cardapio from "./Cardapio";

const Home = () => {
    return (
        <>
            <BannerDinamico
                titulo="Um café quentinho"
                descricao={<>aqui na Tiamate<br />muda o dia.</>}
                imagem="/Banner_01.png"
                posicaoTopo="top-[110px]"
            />
            <BoasVindas />
            <FitCultural />
            <AmbientAgradavel />
            <Cardapio />
            <Depoimentos />
        </>
    );
}

export default Home;