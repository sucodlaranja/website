import "./portfolio.css";

import languages from "../../data/languages.json";

import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/card/card";

let projects = [];

function Portfolio() {
  useEffect(() => {
    const projectsfetch = async () => {
      let response = await fetch(
        "https://sucodlaranja.github.io/Files/projects.json"
      );
      projects = await response.json();
      console.log(projects);
      setState(projects);
    };
    projectsfetch();
  }, []);
  const [state, setState] = useState(projects);
  const [language, setLanguage] = useState("All");

  function changeGrid(language) {
    let temp = [];
    if (language === "All") {
      temp = projects;
    } else {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].language.includes(language)) {
          temp.push(projects[i]);
        }
      }
    }
    setState(temp);
    setLanguage(language);
  }

  function makeCodeLanguages() {
    return languages.map((lang, index) => (
      <button
        key={index}
        className={
          lang === language
            ? "!w-40 transition-all ease-in rounded-xl  hover:bg-orange-600 px-4 sm:px-0 bg-orange-600 text-base  hover:text-white text-white"
            : "!w-40 text-black transition-all ease-in rounded-xl px-4 sm:px-0  hover:bg-orange-600 text-base  hover:text-white"
        }
        onClick={() => changeGrid(lang)}
      >
        {lang}
      </button>
    ));
  }

  return (
    <div>
      <div className="w-full">
        <div className="flex px-2 py-2 space-x-2 overflow-auto sm:justify-center">
          <button
            onClick={() => changeGrid("All")}
            className={
              "All" === language
                ? "!w-40 transition-all ease-in rounded-xl  hover:bg-orange-600 px-4 sm:px-0 bg-orange-600 hover:text-white text-white"
                : "!w-40 text-black transition-all ease-in rounded-xl px-4 sm:px-0 hover:bg-orange-600 hover:text-white"
            }
          >
            All
          </button>
          {makeCodeLanguages()}
        </div>
      </div>
      <div className="grid w-full gap-5 py-10 sm:grid-cols-2 lg:grid-cols-5 place-items-center">
        {state.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
