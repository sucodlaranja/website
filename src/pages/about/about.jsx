
import "./about.css";
import { Link } from "react-router-dom";
function About() {
  return (


    <div className="about-container">
      <div className="about-Card">
        <img className="image" alt="eu" src="images/eu.jpeg" />
        <div className="description">
          Hi I'm João, I'm currently studying{" "}
          <strong>software engineering</strong> at{" "}
          <a href="https://www.uminho.pt/PT">University of Minho</a>.
          <div>
            I'm very passionate about coding, I entered software engineering
            because I wanted to develop video games but while i was learning
            with the course, I cultivated interest for distributed systems,
            security and web devoloping. I intend to make my master's degree
            on these subjects. At my <Link to="/portfolio">portfolio</Link> or
            in my <a href="https://github.com/sucodlaranja/">github</a> you
            can see some of my developed projects.
            <div>
              Some of my other interests are Music, Cinema, Video games and
              Reading.
            </div>
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
