import TopBar from "../../components/topBar/topBar";
import "./about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <TopBar name="About Me" />
      <div className="about">
        <div className="about-container">
          <img className="image" alt="eu" src="images/eu.jpeg" />
          <div className="description">
            Hi I'm João, I'm currently studying{" "}
            <strong>software engineering</strong> at{" "}
            <a href="https://www.uminho.pt/PT">University of Minho</a>.
            <p>
              I'm very passionate about coding, I entered software engineering
              because I wanted to develop video games but while i was learning
              with the course, I cultivated interest for distributed systems,
              security and web devoloping. I intend to make my master's degree
              on these subjects. At my <Link to="/portfolio">portfolio</Link> or
              in my <a href="https://github.com/sucodlaranja/">github</a> you
              can see some of my developed projects.
              <p>
                Some of my other interests are Music, Cinema, Video games and
                Reading.
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
