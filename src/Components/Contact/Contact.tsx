import Form from "../Form/Form";
import { IoCall, IoLocationSharp, IoMail, IoInformationCircle } from "react-icons/io5";

import { Container } from "./styles";
function Contact() {
  return (
    <Container>
      <header className="">
        <h2 id="contact">Contact Me</h2>
      </header>

      <div className="form-1 flex ">
        <div className="w-[50%]  ">
          <div className="contacts flex flex-col ">
            <div className="flex ">
            <IoInformationCircle  />
            <h2 className="font-semibold tracking-wider  text-4xl">Contact Info</h2>
            </div>
            <div className="contact flex   cursor-pointer">
              <IoCall />
              <a href="https://wa.link/v7wwy0" target="_blank">
                (+57) 3006859904
              </a>
            </div>

            <div className=" contact flex  cursor-pointer">
              <IoMail/>
              <a href="mailto:kozefra@gmail.com?subject=Saludos&body=%C2%A1Hola%2C%20Camilo!%0D%0A%0D%0AVi%20tu%20perfil%20y%20me%20pareci%C3%B3%20interesante%20tu%20experiencia%20como%20desarrollador.%20%C2%BFPodr%C3%ADamos%20charlar%20m%C3%A1s%20sobre%20tu%20trabajo%20y%20explorar%20posibles%20colaboraciones%3F%0D%0A%0D%0ASaludos">
                @camiloOrozco.com
              </a>
            </div>

            <div className=" contact flex  cursor-pointer">
              <IoLocationSharp />
              <a href="">Armenia, Colombia.</a>
            </div>
          </div>
        </div>
        <div className="form2 w-[50%]">
          <Form />
        </div>
      </div>
    </Container>
  );
}

export default Contact;
