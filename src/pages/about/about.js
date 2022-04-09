import TopBar from "../../components/topBar/topBar";
import './about.css'
function About() {
  return (
    <div>
      <TopBar />
      <div className="about">
        <div className="about-container">
          <img className="image" alt="eu" src="images/eu.jpeg" />
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis quam ligula, et sodales sapien cursus eget. Maecenas et arcu lobortis, viverra lectus vitae, hendrerit nisl. Sed vestibulum id ex sed rutrum. Nullam ultricies augue non augue fermentum sodales. Quisque sed dignissim dui. Curabitur vel elementum quam. Sed ut orci est. Quisque fringilla lacus ac pellentesque vulputate. Maecenas pretium dolor vel orci faucibus, quis semper velit scelerisque. Nunc eget nulla arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus viverra feugiat fermentum. Nulla dapibus eleifend dui sed consequat. Pellentesque ut erat sem. Pellentesque blandit scelerisque velit, sed hendrerit lorem faucibus sit amet.</div>
        </div>
      </div>
    </div>
  );
}

export default About;
