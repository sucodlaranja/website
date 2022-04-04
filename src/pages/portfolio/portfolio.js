import TopBar from "../../components/topBar/topBar";
import './portfolio.css'
import projects from '../../data/projects.json'
import { useState } from "react";
function Portfolio() {
  const [state, setState] = useState(projects);

  function changeGrid(language) {
    var temp = []
    if (language === "All") {
      temp = projects
    }
    else {
      for (var i = 0; i < projects.length; i++) {
        console.log(projects[i])
        if (projects[i].language.includes(language)) {
          temp.push(projects[i])
        }
      }
    }
    setState(temp)
  }

  return (
    <div>
      <TopBar />

      <div className="portfolio-container">
        <div className="language-container">
          <button onClick={() => changeGrid("All")} className="language language-first">All</button>
          <button onClick={() => changeGrid("C")} className="language" >C</button>
          <button onClick={() => changeGrid("Prolog")} className="language" >Prolog</button>
          <button onClick={() => changeGrid("Java")} className="language" >Java</button>
          <button onClick={() => changeGrid("Javascript")} className="language" >Javascript</button>
          <button onClick={() => changeGrid("Flutter")} className="language" >Flutter</button>

        </div>
        <div className="grid-container">
          {state.map((project) =>
            <div className="square-container" style={{ backgroundImage: `url(${project["image-src"]})` }}>
              <div className="square-text">{project.name}</div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
