import "./about.css";
import Award from "../../img/award.png";
import Me2 from "../../img/KKK.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Computer Programming:  Java, Python, And Javascript. Developing, Testing,
          And Releasing IOS Applications Using Xcode Implementing Software
          Design Patterns And Using RESTful APIs To Power App Using Agile
          Development Methodologies With Scrum And Kanban Boards In JIRA Source
          Control Management With GIT Along SourceTree, BitBucket, And GitHub.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
