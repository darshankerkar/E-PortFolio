function About() {
  return (
    <>
      <div id="about" style={{ paddingTop: "45px" }}>
        <h1
          style={{
            paddingTop: "55px",
            paddingLeft: "35px",
            fontSize: "55px",
          }}
          data-aos="fade-up"
        >
          <span style={{ display: "block" }}>
            About Me: BTech IT Student at Vidyalankar{" "}
          </span>
          <span style={{ display: "block" }}>Institute of Technology</span>
        </h1>

        <div
          className="content"
          style={{ display: "flex", paddingLeft: "35px", paddingTop: "55px" }}
        >
          <div className="content1" data-aos="fade-right" data-aos-delay="300">
            <h4>
              <i className="fa-solid fa-circle"></i> Aspiring IT Professional
            </h4>
            <p
              style={{
                width: "500px",
                paddingTop: "15px",
                paddingLeft: "27px",
              }}
            >
              Driven to excel in the dynamic field of Information Technology,
              constantly striving to bridge the gap between innovative ideas and
              real-world solutions.
            </p>
            <p style={{ width: "500px", paddingLeft: "27px" }}>
              Fueled by curiosity and a passion for building, I aim to create
              meaningful digital experiences through continuous learning,
              collaboration, and hands-on problem solving.
            </p>
          </div>

          <div
            className="content2"
            style={{ paddingLeft: "380px" }}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h4>
              <i className="fa-solid fa-circle"></i> Vidyalankar Institute of
              Technology
            </h4>
            <p
              style={{
                width: "500px",
                paddingTop: "15px",
                paddingLeft: "27px",
              }}
            >
              Pursuing a Bachelor of Technology in Information Technology,
              graduating in May 2028.
            </p>
            <p style={{ width: "500px", paddingLeft: "27px" }}>
              Actively engaging in academic projects, certifications, and
              technical communities to strengthen my foundation in software
              development, cloud technologies, and real-world problem solving.
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ height: "300px" }}></div>
      </div>
    </>
  );
}

export default About;

