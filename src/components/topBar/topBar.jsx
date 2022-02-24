import "./topBar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function TopBar() {
  const [menu, setMenu] = useState(false);

  function changeMenu() {
    var visibility = !menu;
    return setMenu(visibility);
  }

  function showMenu() {
    if (menu) {
      return (
        <div className="menu-container">
          <button className="menu-Title menu-in-top" onClick={() => changeMenu()} >Back</button>
          <div className="menu-content menu-in-top">
            <p>Home</p>
            <p>CV</p>
            <p>About me</p>
            <p>Portfolio</p>
          </div>
        </div>);
    } else {
      return (
        <button className="menu-Title menu-in-top" onClick={() => changeMenu()}>
          Menu
        </button>
      );
    }
  }
  return (
    <div className="topBar-Container">
      <div className="icon">{showMenu()}</div>
    </div>
  );
}

export default TopBar;
