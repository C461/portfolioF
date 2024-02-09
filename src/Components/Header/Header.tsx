import { useState } from "react";
import CV from "../../assets/CV - CAMILO OROZCO.pdf";
import { Container } from "./styles";
import bluberry from "../../assets/bluberry-fotor-bg-remover-20240122212345.png";

function Header() {
  
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container >
      <div className="flex gap-x-2 justify-items-center">
        <img src={bluberry} alt="" className="w-24 animate-bounce duration-1000 infinite" />
        <a href="#home" className="logo">
          <span>Camilo</span>
          <span>Orozco</span>
        </a>
      </div>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      /> 
     {/*  <label htmlFor="switch" className="bg-[#2D3273]">
        Toggle
      </label> */}

      <nav className={isActive ? 'active' : ''}>
        <a  href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About Me
        </a>
        <a href="#project" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a
          href={CV}
          download
          className="bg-[#2D3273] text-center w-[10rem] rounded-2xl"
        >
          CV
        </a>
      </nav>

      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}

export default Header;
