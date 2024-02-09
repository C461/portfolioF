import Info from "../Info/Info";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Project/Projects";
import { Container } from "./styles"

function Main() {
  return (
   
    <Container>
      
      <Info/>
      <About/>
      <Projects/>
      <Contact/>
    </Container>
  );
}

export default Main;
