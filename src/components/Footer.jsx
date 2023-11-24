import { } from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import "../styles/footer.scss"



function Footer() {
  return (
   <>
      <footer>
        <div className="logo">
            <img src="src/assets/IMG-20231122-WA0013-removebg-preview.png" alt="erro" />
        </div>
        <div className="contato">
          <h3>Contato</h3>
          <p className="fontmod">E-mail: panceiacare@gmail.com.br</p>
          <p className="fontmod">Telefone: (11) 1234-5678</p>
        </div>
        <div className="sobre-nos">
          <h3>Sobre Nós</h3>
          <a className="hoverfooter" href="https://www.facebook.com/?locale=pt_BR"><AiOutlineFacebook /></a>
          <a className="hoverfooter" href="https://www.instagram.com/"><AiOutlineInstagram /></a>
          <a className="hoverfooter" href="https://br.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"><AiOutlineLinkedin /></a>
        </div>
      </footer>
    </>
   
  );
}

export default Footer;