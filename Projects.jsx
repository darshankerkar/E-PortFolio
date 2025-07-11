function Projects() {
  return (
    <div className="projects" id="projects" style={{ paddingTop: "5px", paddingLeft: "55px" }}>
      <h1 style={{ fontSize: "55px" }} data-aos="fade-up">Projects : Where Skills Meet Creativity</h1>

      <div className="content" style={{ paddingTop: "45px" }}>
        <div className="content1" data-aos="fade-right">
          <h4><i className="fa-solid fa-arrows-to-dot"></i> To-Do List App</h4>
          <p style={{ width: "650px", marginLeft: "29px" }}>
            A responsive and interactive task management application built using React and CSS, featuring dynamic state updates, animations, and a clean user interface.
          </p>
        </div>
        <div className="content2" data-aos="fade-left" style={{ paddingLeft: "780px" }}>
          <h4><i className="fa-solid fa-arrows-to-dot"></i> SmartEats VIT (Dummy UI)</h4>
          <p style={{ width: "650px", marginLeft: "29px" }}>
            A visually engaging frontend-only web app concept for a food recommendation platform, designed using HTML, CSS, and React to simulate user flows and modern UI design.
          </p>
        </div>
        <div className="content3" data-aos="fade-right">
          <h4><i className="fa-solid fa-arrows-to-dot"></i> Rock Paper Scissors Game</h4>
          <p style={{ width: "650px", marginLeft: "29px" }}>
            A simple command-line game developed in Python, showcasing logic implementation, conditionals, and user interaction.
          </p>
        </div>
        <div className="content4" data-aos="fade-left" style={{ paddingLeft: "780px" }}>
          <h4><i className="fa-solid fa-arrows-to-dot"></i> Guess the Number</h4>
          <p style={{ width: "650px", marginLeft: "29px" }}>
            A Python-based number guessing game that demonstrates core programming logic, loops, and input handling in a terminal environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
