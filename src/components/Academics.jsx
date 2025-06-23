function Academics() {
  return (
    <div className="academics" id="academics">
      <div id="about" style={{ paddingTop: "45px" }}>
        <h1
          style={{
            paddingTop: "55px",
            paddingLeft: "35px",
            fontSize: "55px",
          }}
          data-aos="fade-up"
        >
          Academic Performance Overview
        </h1>
        <div
          className="content"
          style={{ display: "flex", paddingLeft: "35px", paddingTop: "55px" }}
        >
          <div className="content1" data-aos="fade-right">
            <h4><i className="fa-solid fa-circle"></i> Academic Excellance during Btech</h4>
            <p style={{ width: "500px", paddingTop: "15px", paddingLeft: "27px" }}>
              Consistently maintained outstanding academic performance with a
              perfect CGPA of 10 in both the first and second semesters of the
              BTech program.
            </p>
            <p style={{ width: "500px", paddingLeft: "27px" }}>
              Secured a top 1% rank countrywide in the NPTEL Programming in Java
              course, demonstrating strong problem-solving abilities and a deep
              understanding of object-oriented programming concepts.
            </p>
          </div>
          <div className="content2" style={{ paddingLeft: "380px" }} data-aos="fade-left">
            <h4><i className="fa-solid fa-circle"></i> Scholastic Achievements</h4>
            <p style={{ width: "500px", paddingTop: "15px", paddingLeft: "27px" }}>
              Secured a Distinction grade in Class 10, laying a strong academic foundation through consistent performance across all subjects.
            </p>
            <p style={{ width: "500px", paddingLeft: "27px" }}>
              Again achieved Distinction in Class 12 with a focus on science and mathematics, reinforcing my interest in technology and problem-solving.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Academics;

