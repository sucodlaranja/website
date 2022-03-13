import { useEffect, useState } from "react";
import TopBar from "../../components/topBar/topBar";
import "./homepage.css";
import TypeWriterEffect from "react-typewriter-effect";

function Homepage() {
  const [word, setword] = useState("Web Developer");

  useEffect(() => {
    var frases = ["Hello World", "Web Devoloper", "Hi am João Martins!"];
    setTimeout(() => {
      setword(frases[Math.floor(Math.random() * frases.length)]);
    }, 10000);
  });
  return (
    <div>
      <TopBar />
      <header className="homepage">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "white",
            fontWeight: 500,
            fontSize: "1.5em",
          }}
          startDelay={2000}
          cursorColor="orange"
          multiText={[
            "Hello World.",
            "Hello I'm João! ",
            "Welcome To my Website!",
          ]}
          multiTextDelay={2000}
          typeSpeed={40}
        />
      </header>
    </div>
  );
}

export default Homepage;
