import "./topBar.css";
import { useState } from "react";
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom"
import { GoPrimitiveDot } from "react-icons/go";

function TopBar(props) {
  const [menu, setMenu] = useState(false);
  const [middle, setmiddle] = useState(false);
  const transition = useTransition(middle, {
    from: { x: -150, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -150, y: 0, opacity: 0 },

  })
  const menuContent = [{
    "link": "/",
    "name": "Home",
    "class": "Home-Button"
  },
  {
    "link": "JoaoMartinsCV.pdf",
    "name": "CV",
    "class": ""
  },
  {
    "link": "/about",
    "name": "About Me",
    "class": ""
  },
  {
    "link": "/experience",
    "name": "Experience",
    "class": ""
  },
  {
    "link": "/portfolio",
    "name": "Portfolio",
    "class": ""
  },
  ]
  const transitionBack = useTransition(middle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  function changeMenu() {
    var visibility = !middle;
    setmiddle(visibility);
    if (!menu) {
      setMenu(!menu)
    }
    else {
      setTimeout(() => setMenu(!menu), 200)
    }
  }
  function showMenuContent() {
    return (
      menuContent.map((content) => {
        if (content.name === "CV") {
          return (<p className={content.class} ><a href={content.link} target='_blank' rel='noopener noreferrer'>{content.name}</a></p>)
        }
        else if (content.name === props.name) {
          return (<p className={content.class} ><div className="thisPage  items-center"><GoPrimitiveDot /><Link to={content.link}>{content.name}</Link></div></p>)
        }

        return (<p className={content.class} ><Link to={content.link}>{content.name}</Link></p>)
      }))

  }

  function showMenu() {
    return (
      <div>
        {!menu &&
          <div className="topBar-Container">

            <button className="menu-Title " onClick={() => changeMenu()}>
              Menu
            </button>

          </div>
        }
        {menu && <div>
          {transitionBack((styles, item) => item && <animated.div style={styles}>
            <div className="topBarOn-Container">
              <button className="menu-Title" onClick={() => changeMenu()} >Back</button>
            </div></animated.div>)}

          <div className="menu-container">
            {transition((styles, item) => item && <animated.div style={styles}>
              <div className="menu-content">

                {showMenuContent()}
              </div>
            </animated.div>)}
          </div>

        </div>
        }
      </div>
    );
  }

  return (

    <div >{showMenu()}</div>

  );
}

export default TopBar;
