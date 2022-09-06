import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Portfolio from "./pages/portfolio/portfolio";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/experience" element={<Experience />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
