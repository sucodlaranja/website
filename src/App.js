import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Portfolio from "./pages/portfolio/portfolio";
import About from "./pages/about/about";
import TopBar from "./components/topBar/topBar";

function App() {
  return (
    <HashRouter>
      <TopBar />
      <div className="website-container">
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
