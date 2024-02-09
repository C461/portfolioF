import { Container } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import camiloo from "../../assets/profile.png";

import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import NestIcon from "../../assets/NestJS.svg.png";
import tailwindIcon from "../../assets/tailwind.png";
import mongo from "../../assets/mongodb-svgrepo-com.svg";

function About() {
  return (
    <Container>
      <div>
        <h2 id="about" className="text-center text-5xl">
          About Me
        </h2>
        <span className="text-[12px] flex justify-center py-3">
          My introduction
        </span>
      </div>

      <div className="cont1  flex justify-center mt-[5%] ">
        <div className="about-image w-[50%] gap-y-3  ">
          <img src={camiloo} alt="me" />
        </div>

        <div className="about-text  w-[50%]  ">
          <div>
            <p>
              ¡Greetings! I am Camilo, a passionate web developer with a unique
              approach towards creating exceptional online experiences.
            </p>
            <br />
            <p>
              My toolbox includes technologies like HTML, CSS, and JavaScript,
              which I consider the essential foundation for any web project.
              With sharp skills in React, I embark on building intuitive and
              dynamic interfaces that captivate users and provide a seamless
              experience.
            </p>{" "}
            <br />
            <p>
              Plus, I’m immersed in the exciting universe of Node.js and NestJS,
              exploring the server side to create scalable and efficient
              applications.
            </p>
          </div>
          <div className="mt-10  flex justify-end">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mt-10 cursor-pointer hover:text-indigo-500"
            >
              Scroll down 👇🏻
            </ScrollLink>
          </div>
        </div>
      </div>

      <div className=" text-center">
        <div className="hard-skills flex flex-col   ">
          <h3 className="text-5xl ">Skills</h3>
          <div className="flex gap-x-8">
            <div className="hability">
              <img src={reactIcon} alt="React" />
            </div>
            <div className="hability">
              <img src={typescriptIcon} alt="Typescript" />
            </div>

            <div className="hability">
              <img src={nodeIcon} alt="Node" />
            </div>
            <div className="hability">
              <img src={htmlIcon} alt="Html" />
            </div>

            <div className="hability">
              <img src={cssIcon} alt="Css" />
            </div>

            <div className="hability">
              <img src={jsIcon} alt="JavaScript" />
            </div>

            <div className="hability">
              <img src={NestIcon} alt="Nestjs" />
            </div>

            <div className="hability">
              <img src={tailwindIcon} alt="tailwind" />
            </div>
            <div className="hability">
              <img src={mongo} alt="mongo" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
