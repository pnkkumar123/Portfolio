import React, { useState } from "react";
import styled from "styled-components";
import { useGetProjectQuery } from "../redux/slice/ProjectSlice";

const Projects = () => {
  const { data, isFetching, error } = useGetProjectQuery();
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (index) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === index ? null : index
    );
  };

  if (isFetching) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <Wrapper>
      <div className="main-container">
        <div className="project">
          {data?.products &&
            data?.products.map((project, index) => {
              const {
                _id,
                name,
                prjct,
                description,
                Backend,
                Frontend,
                Database,
                Payment,
                DevelopmentTools,
                VersionControl,
                Deployment,
              } = project;
             
                const handleLinkClick = () => {
                  window.open(prjct, '_blank'); // Open the project link in a new window
                };
              return (
                <div key={_id} className="project-item">
                  <h2>{name}</h2>
                <div className="link">
                <button  onClick={handleLinkClick}>Project Link</button>
                </div>
         
                        <h2 style={{ textAlign: 'center' }}>Skills</h2>
                  <div className="skills">
                   
                      <>
                        <div>
                          <h3>Backend</h3>
                          {Backend?.map((skill, idx) => (
                           skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div>
                          <h3>Frontend</h3>
                          {Frontend?.map((skill, idx) => (
                            skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div>
                          <h3>Database</h3>
                          {Database?.map((skill, idx) => (
                             skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div>
                          <h3>Payment</h3>
                          {Payment?.map((skill, idx) => (
                           skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div>
                          <h3>Development Tools</h3>
                          {DevelopmentTools?.map((skill, idx) => (
                            skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div>
                          <h3>Version Control</h3>
                          {VersionControl?.map((skill, idx) => (
                            skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div>
                          <h3>Deployment</h3>
                          {Deployment?.map((skill, idx) => (
                  skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                      </>
                 
                  </div>
                        <h5>{description}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  .main-container {
    margin-top: 50px;
    max-height: 72vh;
    max-width: 100%;
    height: 74vh;
    width: 100%;
    overflow-y: auto;
    border-radius: 10px;
    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(222, 215, 210);
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(222, 215, 210);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }
  .project {
    margin-top:20px;
   border:1px solid black;
   border-radius:7px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .project-item {
    padding: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(222, 215, 210);
  }
  .skills-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .skills {
    box-shadow: 0 0 10px rgba(25, 26, 26, 0.81);
    border-radius:8px;
    display: flex;
    overflow-x:auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .skills > div {
    margin: 10px;
  }
  button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    margin-right:10px;
  }
  .link{
    height:20px;
    width:150px;
    display:flex;
    flex-direction:row;
    margin:auto;
    align-items:center;
    justify-items:center;
  }
  .link button{
    width:100%;
    padding:10px;
    background-color:blue;
    color:white;
  }
 
`;

export default Projects;
