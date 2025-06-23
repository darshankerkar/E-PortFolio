import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./vertical-stepper.css";

const steps = [
  {
    number: 1,
    color: "#FFD600",
    title: "Programming Languages",
    desc: "Proficient in Python and Java with experience building scalable, object-oriented applications. Comfortable with C for understanding low-level systems and memory management.",
  },
  {
    number: 2,
    color: "#FF4D6D",
    title: "Web Development",
    desc: "Skilled in designing responsive and accessible user interfaces using HTML5 and CSS3. Familiar with JavaScript and React for building interactive web components.",
  },
  {
    number: 3,
    color: "#FF884D",
    title: "Database Management",
    desc: "Experienced in writing optimized queries, managing relational databases, and ensuring data integrity and security through SQL.",
  },
  {
    number: 4,
    color: "#4DB8FF",
    title: "Software Development Practices",
    desc: "Strong foundation in object-oriented programming and algorithmic problem-solving. Comfortable using Git for collaborative development and code tracking.",
  },
  {
    number: 5,
    color: "#4DFFCB",
    title: "Cloud & DevOps",
    desc: "Hands-on experience with Docker for containerization and an introductory understanding of Kubernetes for orchestration and scaling cloud-based applications.",
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="skills" id="skills" style={{ paddingLeft: "35px" }}>
      <br />
      <br />
      <h1 style={{ fontSize: "55px", paddingBottom: "0px" }} data-aos="fade-up">
        From Logic to Execution: My Core Technical Skills
      </h1>
      <div className="timeline">
        {steps.map((step, idx) => (
          <div className="timeline-row" key={step.number}>
            {/* Left side content */}
            <div
              className={`timeline-content ${idx % 2 === 0 ? "show" : ""}`}
              data-aos="fade-right"
              data-aos-delay={idx * 150}
            >
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>

            {/* Center timeline indicator */}
            <div className="timeline-center">
              <span
                className="timeline-circle"
                style={{ borderColor: step.color, color: step.color }}
              >
                {step.number}
              </span>
              <span
                className="timeline-bar"
                style={{
                  background: step.color,
                  left: idx % 2 === 0 ? "-30px" : "10px",
                  width: "60px",
                }}
              />
            </div>

            {/* Right side content */}
            <div
              className={`timeline-content ${idx % 2 !== 0 ? "show" : ""}`}
              data-aos="fade-left"
              data-aos-delay={idx * 150}
            >
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

