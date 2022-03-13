import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes, Route, Router } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Portfolio from "./pages/portfolio/portfolio";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
