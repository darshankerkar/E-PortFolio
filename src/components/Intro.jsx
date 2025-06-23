
function Tabs() {
    
  return (
    <div id="home">
      <div style={{ display: "flex" }}>
        <div className="content" style={{ paddingLeft: "35px" }}>
          <h1 style={{ paddingTop: "90px", fontSize: "55px" }}>
            <span style={{ display: "block" }}>Darshan's ePortfolio :</span>
            <span style={{ display: "block" }}>Showcasing Professional</span>
            <span style={{ display: "block" }}>Journey</span>
          </h1>
          <p style={{ paddingTop: "18px", width: "800px" }}>
            Welcome to my ePortfolio! Explore my skills, experiences, and
            aspirations as a BTech IT student. I'm dedicated to building
            impactful digital solutions, learning continuously, and contributing
            to the evolving world of technology. Here, you'll find a glimpse
            into my technical journey, academic milestones, certifications, and
            the projects that define my growth as a future IT professional.
          </p>
          <div className="icon" style={{marginTop:"30px"}}>
            <i className="fa-solid fa-d" style={{backgroundColor:"#db6bbd",padding:"10px",borderRadius:"50%"}}></i>
            <b style={{fontSize:"25px"}}> by Darshan Kerkar</b>
          </div>
        </div>
        <div class="hero-image" style={{paddingLeft:"170px"}}>
          <img
            src="In_Suit.jpg"
            alt="Darshan"
            style={{ height: "722px", width: "499px"}}
          />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
