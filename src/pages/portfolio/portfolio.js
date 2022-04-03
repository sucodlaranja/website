import TopBar from "../../components/topBar/topBar";
import './portfolio.css'
import projects from '../../data/projects.json'
function Portfolio() {


  return (
    <div>
      <TopBar />

      <div className="portfolio-container">
        <div className="language-container">
          <a className="language language-first" href="">C</a>
          <a className="language" href="">Prolog</a>
          <a className="language" href="">Java</a>
          <a className="language" href="">Javascript</a>
          <a className="language" href="">Flutter</a>

        </div>
        <div className="grid-container">
          {projects.map((project) =>
            <div className="square-container" style={{backgroundImage: `url(${project["image-src"]})`}}>
              {project.name}
              
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
