import "./topBar.css";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { useLocation } from "react-router-dom";

function TopBar() {
  const location = useLocation().pathname;
  const [menu, setMenu] = useState(false);
  const [middle, setmiddle] = useState(false);
  const transition = useTransition(middle, {
    from: { x: -150, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -150, y: 0, opacity: 0 },
  });

  const menuContent = [
    {
      link: "/",
      name: "Home",
      class: "Home-Button",
    },
    {
      link: "JoaoMartinsCV.pdf",
      name: "CV",
      class: "",
    },
    {
      link: "/about",
      name: "About Me",
      class: "",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
      class: "",
    },
  ];
  const transitionBack = useTransition(middle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function changeMenu() {
    let visibility = !middle;
    setmiddle(visibility);
    if (!menu) {
      setMenu(!menu);
    } else {
      setTimeout(() => setMenu(!menu), 200);
    }
  }
  function showMenuContent() {
    return menuContent.map((content, index) => {
      if (content.name === "CV") {
        return (
          <div key={index} className={content.class}>
            <a
              href={content.link}
              onClick={() => changeMenu()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.name}
            </a>
          </div>
        );
      } else if (content.link === location) {
        return (
          <div key={index} className={content.class}>
            <div className="items-center thisPage" onClick={() => changeMenu()}>
              <GoPrimitiveDot color="white" />
              <Link to={content.link}>{content.name}</Link>
            </div>
          </div>
        );
      }

      return (
        <div key={index} className={content.class}>
          <Link to={content.link} onClick={() => changeMenu()}>
            {content.name}
          </Link>
        </div>
      );
    });
  }

  function showMenu() {
    return (
      <div className="z-20">
        {!menu && (
          <div>
            <div className="h-[5vh]">
              <div className="flex px-5 items-center self-center justify-end w-full h-full font-bold">
                <button onClick={() => changeMenu()}>Menu</button>
              </div>
            </div>
          </div>
        )}
        {menu && (
          <div>
            {transitionBack(
              (styles, item) =>
                item && (
                  <animated.div style={styles}>
                    <div className="h-[5vh]">
                      <div className="flex items-center px-5 self-center justify-end w-full h-full font-bold">
                        <button onClick={() => changeMenu()}>Back</button>
                      </div>
                    </div>
                  </animated.div>
                )
            )}

            <div className=" menu-container">
              {transition(
                (styles, item) =>
                  item && (
                    <animated.div style={styles}>
                      <div className="flex flex-col justify-center h-full text-center space-y-14">
                        {showMenuContent()}
                      </div>
                    </animated.div>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return <div>{showMenu()}</div>;
}

export default TopBar;
