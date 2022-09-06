import TopBar from "../../components/topBar/topBar";
import "./portfolio.css";

import languages from "../../data/languages.json";

import { useState } from "react";
import { useEffect } from "react";

let projects = [];

function Portfolio() {
  useEffect(() => {
    const projectsfetch = async () => {
      let response = await fetch("https://sucodlaranja.github.io/Files/projects.json")
      projects = await response.json()

      setState(projects)
    }
    projectsfetch()

  }, [])
  const [state, setState] = useState(projects);


  function changeGrid(language) {
    var temp = [];
    if (language === "All") {
      temp = projects;
    } else {
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].language.includes(language)) {
          temp.push(projects[i]);
        }
      }
    }
    setState(temp);
  }


  function makeCodeLanguages() {
    return languages.map((lang) => (
      <button className="language" onClick={() => changeGrid(lang)}>{lang}</button>
    ));
  }

  return (
    <div>
      <TopBar name="Portfolio" />

      <div className="portfolio-container ">
        <div className="language-container">

          <button
            onClick={() => changeGrid("All")}
            className="language language-first"
          >
            All
          </button>
          {makeCodeLanguages()}


        </div>
        <div className="grid-container ">
          {state.map((project) => (
            <a key={project.name} href={project.link} target='_blank' rel='noopener noreferrer'>
              <div className="square-container hover:z-10 ">
                <div
                  className="square-image"
                  style={{ backgroundImage: `url(${project["image-src"]})` }}
                ></div>
                <div className="square-text">{project.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
