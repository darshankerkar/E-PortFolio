function Certifications() {
  return (
    <div id="certifications" className="certifications" style={{ display: "flex" }}>
      <div data-aos="fade-right" style={{ position: "relative" }}>
        {/* Simulated checkbox tick effect */}
        <img
          src="/E-PortFolio/assets/HackerRank.png"
          alt="HackerRank"
          style={{
            width: "650px",
            height: "724px",
            borderRadius: "12px",
            animation: "checkbox-pulse 1.2s ease-in-out forwards"
          }}
        />
      </div>

      <div>
        <h1
          style={{
            fontSize: "55px",
            paddingBottom: "50px",
            paddingLeft: "135px",
            paddingTop: "70px",
          }}
          data-aos="fade-up"
        >
          Courses & Certifications
        </h1>

        <div className="content" style={{ display: "flex" }}>
          <div className="content1" style={{ marginRight: "20px", marginLeft: "35px" }} data-aos="zoom-in">
            <i className="fa-solid fa-envelope-open-text" style={{ fontSize: "40px", paddingLeft: "45px", paddingBottom: "20px" }}></i>
            <h4>HackerRank Certificates</h4>
            <p>
              Certified in React Frontend Development, Java, and CSS through HackerRank, demonstrating hands-on expertise in both programming fundamentals and modern UI development.
            </p>
          </div>
          <div className="content2" style={{ marginRight: "10px" }} data-aos="zoom-in" data-aos-delay="150">
            <i className="fa-solid fa-certificate" style={{ fontSize: "40px", paddingLeft: "15px", paddingBottom: "20px" }}></i>
            <h4 style={{ width: "30px" }}>NPTEL Course</h4>
            <p>
              Earned an Elite+Gold certificate in the NPTEL Programming in Java course, securing a position in the top 1% nationwide, awarded by IIT Kharagpur under the Ministry of Education.
            </p>
          </div>
          <div className="content3" style={{ marginRight: "35px" }} data-aos="zoom-in" data-aos-delay="300">
            <i className="fa-solid fa-file" style={{ fontSize: "40px", paddingLeft: "75px", paddingBottom: "20px" }}></i>
            <h4>GitHub Certification - CESA VIT</h4>
            <p>
              Awarded a certification by CESA, Vidyalankar Institute of Technology for proficiency in GitHub version control and Vercel-based deployment, reflecting readiness for collaborative and real-world development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
