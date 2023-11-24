import { } from 'react';
import '../styles/secoes.scss'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaHome } from "react-icons/fa";


function PIAI() {

  return (
    <>
      <main className='mainpia'>
        <Link to="/home" className='homeback'> <h1><FaLongArrowAltLeft /> VOLTAR <FaHome /> </h1></Link>
        <section className='piasec'>
          <div>
            <p>A nossa IA foi batizada de PIA I (Panceia Inteligência Artificial 1) e estará disponível para os clientes tanto aqui em nossa página Web ou em uma Aplicação quando for desenvolvida. Ela trará informações e incompatibilidades de remédios do qual o usuário digitar. Basta apenas ter um cadastro em nossas plataformas.</p>
          </div>
          <img src="src/assets/7339540.png" alt="erro" />
          <div>
            <p>Ja fizemos um protótipo dela com Python, onde o usuário faz um cadastro, loga e consegue ususfruir do protótipo da AI, que no momento é um programa ligado a um banco de dados com medicamentos e suas incompatibilidades como valor</p>
          </div>
          <img src="src/assets/blue-artificial-intelligence-technology-circuit-file-free-png.webp" alt="erro" />
        </section>
        <a className="apia" href="https://youtu.be/kPHl3oUDW-Y?si=UxJ19zt-BTd9drqS"><h1><FaLongArrowAltRight /> VEJA AQUI O PROTOTIPO DA PIA I FUNCIONANDO <FaLongArrowAltLeft /></h1></a>
        <section className='links'>
         <Link to="/dcnts" className='link2'>
            <div className='link2div'>
              <h1>DCNTs</h1>
              <p>Conheça as principais DCNTs, e dicas para previni-las</p>
              <img src="src/assets/DOENÇA-CRÕNICAS.png" alt="erro" />
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
export default PIAI;