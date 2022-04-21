import TopBar from "../../components/topBar/topBar";
import "./about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <TopBar />
      <div className="about">
        <div className="about-container">
          <img className="image" alt="eu" src="images/eu.jpeg" />
          <div className="description">
            Hi i'm João, i'm currently studying{" "}
            <strong>software engineering</strong> at{" "}
            <a href="https://www.uminho.pt/PT">University of Minho</a>.
            <p>
              i'm very passionate about coding in geral but i have a special
              place in my heart for distributed systems and security, i'm also
              learning to love web developing as well. In my{" "}
              <Link to="/portfolio">portfolio</Link> or at my{" "}
              <a href="https://github.com/sucodlaranja">github</a> you can see
              some of my developed projects.
              <p>
                Some of my other interests are Music and Cinema, sadly i'm not
                that good at any of those.
              </p>
              <p>
                Write me an email if you want to chat at{" "}
                <strong>a17ndremonteiro@gmail.com</strong>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
