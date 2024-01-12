import "./styles.css";

function AboutMe() {
  return (
    <div>
      <div className="container">
        <img src="soltad.jpg" alt="Solomon tadesse" />
        <div>
          <p>
            Hello there! I am Solomon Tadesse, and I am 3rd year software
            engineering student in AASTU.
          </p>
          <div className="btn">
            <button className="resume">Resume</button>
            <button className="project">Projects</button>
            <button className="contact">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
