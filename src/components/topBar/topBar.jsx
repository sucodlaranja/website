import "./topBar.css";
import { useState } from "react";
import { useTransition, animated, config } from 'react-spring'
import { Link } from "react-router-dom"

function TopBar() {
  const [menu, setMenu] = useState(false);
  const [middle, setmiddle] = useState(false);
  const transition = useTransition(middle, {
    from: { x: -150, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -150, y: 0, opacity: 0 },

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

  function showMenu() {
    return (
      <div>
        {!menu &&
          <div className="topBar-Container">
            <button className="menu-Title" onClick={() => changeMenu()}>
              Menu
            </button>
          </div>
        }
        {menu && <div>

          <div className="topBarOn-Container">
            <button className="menu-Title" onClick={() => changeMenu()} >Back</button>
          </div>

          <div className="menu-container">
            {transition((styles, item) => item && <animated.div style={styles}>

              <div className="menu-content">
                <p className="Home-Button"><Link to='/'>Home</Link></p>
                <p>CV</p>
                <p><Link to="/about">About me</Link></p>
                <p><Link to="/portfolio">Portfolio</Link></p>
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
