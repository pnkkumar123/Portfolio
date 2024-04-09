import React from "react";
import imgSrc from "../assets/IMG_1022.JPG";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <figure style={{ marginRight: "2rem" }}>
        <img
          src={imgSrc}
          alt="description"
          style={{
            width: "450px", // Adjust the image width as needed
            height: "450px", // Adjust the image height as needed
            borderRadius: "50%",
            marginTop:"5rem"
          }}
        />
      </figure>
      <figcaption>
        <p style={{fontWeight:"bold"}}>
          As a Full web developer, I've gained valuable experience through
          hands-on <NavLink to="/projects">PROJECTS</NavLink> utilizing various web technologies{" "}
          <NavLink to="/skills" >SKILLS</NavLink>. Eager to apply my skills and
          contribute to dynamic projects with a keen focus on creativity and
          user-centric solutions. Explore my portfolio to witness my passion for
          clean code and creative design. Let's build something amazing together!
          Eager to contribute innovative solutions and collaborate with dynamic
          teams.
        </p>
      </figcaption>
      <hr  />
    </div>
  );
};

export default Home;
