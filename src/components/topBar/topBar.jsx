import "./topBar.css";
import { useState } from "react";
import { useTransition, animated } from 'react-spring'

function TopBar() {
  const [menu, setMenu] = useState(false);
  const transition = useTransition(menu, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 0, opacity: 0 },
  })

  function changeMenu() {
    var visibility = !menu;
    setMenu(visibility);
  }

  function showMenu() {
    return (
      <div>
        <button className="menu-Title" onClick={() => changeMenu()}>
          Menu
        </button>
        <div className="menu-container">
          {transition((styles, item) => item && <animated.div style={styles}><button className="menu-Title" onClick={() => changeMenu()} >Back</button>
            <div className="menu-content">
              <p className="Home-Button"><a href='/'>Home</a></p>
              <p>CV</p>
              <p><a href="/about">About me</a></p>
              <p><a href="/portfolio">Portfolio</a></p>
            </div></animated.div>)}
        </div>
      </div>);
  }

  return (
    <div className="topBar-Container">
      <div >{showMenu()}</div>
    </div>
  );
}

export default TopBar;
