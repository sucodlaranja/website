import "./homepage.css";
import TypeWriterEffect from "react-typewriter-effect";

function Homepage() {
  return (
    <div className="homepage-container">

      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "white",
          fontWeight: 500,
          fontSize: "1.5em",
        }}
        startDelay={2000}
        cursorColor="orange"
        multiText={["Hello World.", "I'm João!", "Welcome to my Website!"]}
        multiTextDelay={2000}
        typeSpeed={40}
      />

    </div>
  );
}

export default Homepage;
