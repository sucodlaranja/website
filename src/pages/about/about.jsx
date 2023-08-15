import "./about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about-container">
      <div className="about-Card rounded-lg w-[95%] sm:w-[70%]">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 mt-1 border-4 rounded-full"
            alt="eu"
            src="images/eu.jpeg"
          />
        </div>
        <div className="mx-2 sm:mx-10 overflow-auto break-words h-[70%]  sm:h-[75%]">
          Hello, my name is João and I am currently pursuing a{" "}
          <strong>Master's degree</strong> in Cryptography, Information
          Security, and Language Engineering at{" "}
          <a
            href="https://www.uminho.pt/PT"
            className="hover:underline font-medium"
          >
            University of Minho
          </a>
          .
          <div>
            I initially became interested in coding because of my passion for
            video game development. However, as I progressed through my studies,
            I developed a keen interest in distributed systems, security, and
            web development. You can find some of my projects on my{" "}
            <Link to="/portfolio" className="hover:underline font-medium">
              portfolio
            </Link>{" "}
            or{" "}
            <a
              href="https://github.com/sucodlaranja/"
              className="hover:underline font-medium"
            >
              github
            </a>{" "}
            .
            <div>Some of my other interests are Music, Cinema and Reading.</div>
            <br />
            <div>
              Write me an email if you want to chat at{" "}
              <strong>a17ndremonteiro@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
