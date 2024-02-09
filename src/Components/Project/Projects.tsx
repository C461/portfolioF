import externalLink from "../../assets/external-link.svg";

import { Container } from "./styles";

function Projects() {
  return (
    <Container>
      <h2>My Projects</h2>
      <div id="project" className="projects">
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a
                href="https://crudfront1-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Authentication task app</h3>
            <p>
              Taskapp is a simple web application to manage tasks, created with
              Express and React. It offers user registration and authentication,
              allows you to add, edit, and delete tasks, as well as mark them as
              completed. It uses MongoDB to store data and JSON Web Tokens (JWT)
              for authentication. It is a practical tool to stay organized and
              productive.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Express</li>
              <li>React Vite</li>
              <li>Tailwind</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>

        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a
                href="https://ecommercemusic-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Music Store</h3>
            <p>
              MusicStore is an online store of musical instruments and audio
              equipment, developed with React, Vite and CSS. It allows users to
              explore and purchase a variety of musical instruments, recording
              equipment, accessories and more, all from the comfort of their
              browser. It stands out for its simple function of adding to the
              cart, providing a hassle-free shopping experience.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React vite</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>

        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a
                href="https://frontendtask-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>CRUD NestJs</h3>
            <p>
              A CRUD app for tasks, developed with React Vite and NestJS, allows
              the user to create, read, update, and delete tasks. In the
              frontend, React Vite is used to build the user interface, while in
              the backend NestJS is used to manage requests and operations with
              the database.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React Vite</li>
              <li>NestJS</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
