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
        startDelay={1000}
        cursorColor="orange"
        multiText={[
          "Hello World.",
          "Welcome to my Website!",
          "I'm João Martins!",
        ]}
        multiTextDelay={2000}
        typeSpeed={40}
      />
    </div>
  );
}

export default Homepage;
