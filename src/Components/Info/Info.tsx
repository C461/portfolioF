import sharp from "../../assets/splad-fotor-bg-remover-2024012218158.png";
import CamiloOrozco from "../../assets/co.png";
import { Link as ScrollLink } from "react-scroll";
import { Container } from "./styles";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoChatboxEllipsesOutline,
} from "react-icons/io5";

function Info() {
  return (
    <Container>
      <div className="cont-2 flex gap-x-20 justify-center  ml-40 w-[50%]  ">
        <div className="social-media relative z-10 flex flex-col gap-y-6 items-center justify-center w-[30%]">
          <a
            href="https://www.linkedin.com/in/efrain-camilo-orozco-osorio-79a180170/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/C461"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://wa.link/v7wwy0"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IoChatboxEllipsesOutline />
          </a>
        </div>

        <div
          id="home"
          className="hero-text max-h-[500px]   flex flex-col items-stretch justify-center"
        >
          <p className="text-4xl">Hi, I'm</p>

          <h1 className="name">Camilo Orozco</h1>
          <div className=" text-1 w-[95%] ">
            <p className="present text-justify text-[14px] ">
              "Transforming ideas into captivating experiences" I am a
              passionate developer with experience in creating web applications.
              I specialize in writing clean and efficient code to deliver
              effective technology solutions. I’m always looking to learn and
              improve. ¡ Ready to collaborate on exciting projects.
            </p>
          </div>

          <div>
            <h3 className="hover:brightness-75 text-indigo-500 cursor-pointer my-4 font-medium">
              Full Stack Developer
            </h3>
            <p className="small-resume">1 Year of Learning</p>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="contact p-4 text-3xl rounded-md mt-8 text-center  cursor-pointer hover:brightness-75 "
            >
              Contact me
            </ScrollLink>
          </div>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="scroll mt-10 cursor-pointer hover:text-indigo-500"
          >
            Scroll down 👇🏻
          </ScrollLink>
        </div>
      </div>
      <div className="hero-image flex justify-center w-[50%]   ">
        <img
          src={sharp}
          alt="Ilustração"
          className="img-1 text-indigo-500 w-[700px] h-[800px] translate-x-[-5%] translate-y-[-180px]   "
        />
        <img
          src={CamiloOrozco}
          alt="me"
          className="absolute translate-x-[2%]  translate-y-[-10%] rounded-b-[50%] "
        />
      </div>
    </Container>
  );
}

export default Info;
