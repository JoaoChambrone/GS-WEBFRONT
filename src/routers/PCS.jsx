import { } from 'react';
import '../styles/secoes.scss'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft, FaHome } from "react-icons/fa";


function PCS() {

    return (
        <>
            <main className='mainpia'>
                <Link to="/home" className='homeback'> <h1><FaLongArrowAltLeft /> VOLTAR <FaHome /> </h1></Link>
                <section className='piasec'>
                    <div>
                        <p>Batizamos de Panceia Care System I o nosso Sistema de Infusão Automática. Através do Arduino, prototipamos esse sistema. Nele, será possível que o médico ou enfermeiro, deixe previamente programado o horário e quantidade de medicação que será aplicado no paciente. No futuro, planejamos integrar a IA PIA I nesse sistema, para evitar que haja erros na infusão, como dois remédios incompativeis serem aplicados no mesmo paciente.</p>
                    </div>
                    <img src="src/assets/bomba-de-infusao.jpg" alt="erro" />
                    <div>
                        <p>O sistema ainda está em fase de protótipo, mas no escopo do projeto, ja levantamos algumas funcionalidades que queremos que ele tenha no futuro, como integração com nossa IA, sistema de desligamento automatico em caso de o sistema estar ligado mas sem uso, sistema de aquecimento e resfriamento,Detector de temperatura e luminosidade para controle de melhores condições para os medicamentos, como outras funcionalidades. </p>
                    </div>
                    <img src="src/assets/conheca-os-principais-tipos-de-infusao-na-medicina.jpg" alt="erro" />
                </section>
                <section className='links'>
                    <Link to="/pia" className='link1'>
                        <div className='link1div'>
                            <h1>PIA I</h1>
                            <p>Conheça melhor a nossa inteligência artificial</p>
                            <img src="src/assets/7339540.png" alt="erro" />
                        </div>
                    </Link>
                    <Link to="/dcnts" className='link2'>
                        <div className='link2div'>
                            <h1>DCNTs</h1>
                            <p>Conheça as principais DCNTs, e dicas para previni-las</p>
                            <img src="src/assets/DOENÇA-CRÕNICAS.png" alt="erro" />
                        </div>
                    </Link>
                </section>
            </main>

        </>
    );
}
export default PCS;