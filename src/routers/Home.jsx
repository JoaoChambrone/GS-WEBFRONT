import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHealthNormal } from "react-icons/gi";
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaUser, FaHome } from "react-icons/fa";
import "../styles/home.scss";

function HomePersonalizada() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const navegarPara = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    setUsuarioLogado(usuario);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('usuarioLogado');
    navegarPara('/');
  }

  return (
    <>
      <h1 className='h1i'> <FaHome /> </h1>
      <h1 className='h1i'>Bem-vindo, </h1>
      {usuarioLogado && (
        <div className='user'>
          <p><FaUser /> Usuário: {usuarioLogado.usuario}</p>
          <button onClick={handleLogout}>SAIR</button>
        </div>
      )}
      <main>
        <section>
          <div>
            <img className="imgrel" src="src/assets/Untitled-design-88.jpg" alt="erro" />
          </div>
          <div className="divh2">
            <div className='tit'>
              <h1>PANCEIA<br /> CARE</h1>
            </div>
            <div className='divtxt'>
              <p>A PANCEIA CARE É INOVAÇÃO, AUTOMAÇÃO E SAÚDE. JUNTO COM A HAPVIDA, NOSSA MISSÃO É TORNAR
                A SAÚDE MAIS MODERNA, E NOSSO TIME DE DESENVOLVIMENTO VEM TRABALHANDO FORTE PARA QUE ISSO SEJA POSSÍVEL.</p>
              <GiHealthNormal />
            </div>

          </div>
          <a className='linkext' href="https://www.hapvida.com.br/site/"><h1><FaLongArrowAltRight /> Conheça a Hapvida <img src="src/assets/logo-hapvida-escudo-2048.png" alt="erro" /> <FaLongArrowAltLeft /></h1></a>
        </section>
        <aside>
          <div className="as1">
            <h1>A NOSSA SOLUÇÃO</h1>
            <p> A nossa solução consiste em um aplicativo, que terá uma inteligência artificial capaz de detectar e informar o usuário sobre a incompatibilidade de medicamentos. Basta ele digitar o nome do medicamento, e a IA trará suas incompatibilidades. Além disso, o app contará também com uma seção com recomendações para a prevenção de DCNTs. Também, paralelamente, estamos desenvolvendo o PCS I (Panceia Care System I), sistema de infusão automática da qual você pode conhecer mais clicando no botão no final da página. </p>
          </div>
          <div className="as2">
            <h1>COMO TER ACESSO?</h1>
            <p>Para ter acesso à nossa IA, será necessário apenas fazer um cadastro na nossa plataforma. Ela funcionará de forma gratuita e qualquer um poderá acessar, seja médico ou paciente. Já o Panceia Care System I, quando estiver desenvolvido, custará um valor que ainda não foi definido. </p>

          </div>
          <div className="as3">
            <h1>QUEM SOMOS?</h1>
            <p>Somos uma dupla de estudantes de Engenharia de Software, que recebemos o desafio da Hapvida de unir tecnologia e saúde. Estamos usando nossos conhecimentos para tentar desenvolver as melhores soluções para o mundo.</p>
          </div>
        </aside>
      </main>
      <h1 className='krisiun'>CONHEÇA MELHOR OS PROJETOS</h1>
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
        <Link to="/pcs" className='link3'>
          <div className='link3div'>
            <h1>PCS I</h1>
            <p>Conheça melhor o dispositivo que está sendo desenvolvido por nós!</p>
            <img src="src/assets/a9e5c159d6b99766a02676f5d144312d-icone-de-bolsa-de-infusao-de-pressao.png" alt="erro" />
          </div>
        </Link>
      </section>
    </>
  );
}

export default HomePersonalizada;

