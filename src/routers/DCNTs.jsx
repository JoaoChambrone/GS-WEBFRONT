import { } from 'react';
import '../styles/secoes.scss'
import {Link} from 'react-router-dom'
import { FaLongArrowAltLeft, FaHome } from "react-icons/fa";


function DCNTs() {
  
  return (
    <>
      <main className='mainpia'>
      <Link to="/home" className='homeback'> <h1><FaLongArrowAltLeft /> VOLTAR <FaHome /> </h1></Link>
        <section className='piasec'>
          <div>
            <h1>Introdução às Doenças Crônicas Não Transmissíveis (DCNTs)</h1><br />
            <p>Doenças Crônicas Não Transmissíveis (DCNTs) são condições de longa duração, geralmente progredindo lentamente, e não são causadas por agentes infecciosos. Exemplos incluem diabetes, doenças cardiovasculares, câncer e doenças respiratórias crônicas. Estas doenças representam uma parcela significativa da carga global de morbidade e mortalidade, sendo muitas vezes associadas a fatores de risco comportamentais como má alimentação, sedentarismo, tabagismo e consumo excessivo de álcool.</p>
          </div>
          <img src="src/assets/Doenças+Crônicas+não+Transmissíveis+(DCNT).jpg" alt="erro" />
          <div>
            <h1> Prevenção de Doenças Crônicas Não Transmissíveis (DCNTs)</h1><br />
            <p>A prevenção das DCNTs começa com escolhas de estilo de vida saudável. Manter uma dieta equilibrada, rica em frutas, vegetais e grãos integrais, associada à prática regular de atividades físicas, pode reduzir significativamente o risco dessas doenças. Evitar o tabagismo e moderar o consumo de álcool são passos adicionais importantes. Exames de saúde regulares e monitoramento de fatores de risco, como pressão arterial e níveis de glicose, também desempenham um papel crucial na prevenção.</p>
          </div>
          <img src="src/assets/061fa0_3f9e80385c624555ba7d7e83792d9719~mv2.webp" alt="erro" />
          <div>
            <h1> Rotina Saudável para Prevenção de DCNTs </h1><br />
            <p>Uma rotina saudável é fundamental na prevenção de DCNTs. Inclua pelo menos 150 minutos de atividade física moderada por semana, distribuídos ao longo dos dias. Opte por alimentos nutritivos, evitando o excesso de sal, açúcar e gorduras saturadas. Mantenha um sono adequado, pois a privação do sono pode contribuir para o desenvolvimento de doenças crônicas. Gerencie o estresse por meio de técnicas como meditação e yoga. Consulte regularmente um profissional de saúde para avaliação e orientação personalizada. Esses passos simples podem fazer uma grande diferença na promoção da saúde a longo prazo.</p>
          </div>
          <img src="src/assets/Depositphotos_160465124_l-2015.jpg" alt="erro" />
        </section>
        <section className='links'>
         <Link to="/pia" className='link1'>
           <div className='link1div'>
             <h1>PIA I</h1>
             <p>Conheça melhor a nossa inteligência artificial</p>
             <img src="src/assets/7339540.png" alt="erro" />
           </div>
          </Link>
          <Link to="/pcs" className='link3'>
            <div className='link3div'>
              <h1>PCS I</h1>
              <p>Conheça melhor o dispositivo que está sendo desenvolvido por nós!</p>
              <img src="src/assets/a9e5c159d6b99766a02676f5d144312d-icone-de-bolsa-de-infusao-de-pressao.png" alt="erro" />
            </div>
          </Link>
      </section>
      </main>

    </>
  );
}
export default DCNTs;