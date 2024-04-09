import React from 'react'
import { useGetProjectQuery } from '../redux/slice/ProjectSlice'
import styled from 'styled-components';


const Skills = () => {
  const { data, isFetching, error } = useGetProjectQuery();
  if (isFetching) return <div>loading...</div>
  if (error) return <div>error..</div>
  return (
    <Wrapper>
      {
        data?.products && data?.products.map((skill) => {
          const { _id, Backend, Frontend, Database, Payment, DevelopmentTools, VersionControl, Deployment } = skill;
          return (
            <div key={_id}>
              <div className='skills'>
              <div className='skill'>
                          <h3>Backend</h3>
                          {Backend?.map((skill, idx) => (
                           skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
             
                        <div className='skill'>
                          <h3>Frontend</h3>
                          {Frontend?.map((skill, idx) => (
                            skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div className='skill'>
                          <h3>Database</h3>
                          {Database?.map((skill, idx) => (
                             skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div className='skill'>
                          <h3>Payment</h3>
                          {Payment?.map((skill, idx) => (
                           skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div className='skill'>
                          <h3>Development Tools</h3>
                          {DevelopmentTools?.map((skill, idx) => (
                            skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div className='skill'>
                          <h3>Version Control</h3>
                          {VersionControl?.map((skill, idx) => (
                            skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
                        <div className='skill'>
                          <h3>Deployment</h3>
                          {Deployment?.map((skill, idx) => (
                  skill ? ( <button key={idx}>{skill ? skill : ""}</button>) : ""
                          ))}
                        </div>
            </div>
            </div>
          );
        })
      }
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-items:center;
align-items:center;
margin:auto;

.skills{
  box-shadow: 0 0 10px rgba(25, 26, 26, 0.81);
   border-radius:8px;
  margin-top:50px;
  display:flex;
  flex-direction:column;
}
.skill{
  box-shadow: 0 0 3px lightgreen;
  margin-top:10px;
  msrgin-bottom:15px;
  width:100%;
  justify-items:center;
  display:flex;
  flex-direction:row;
  gap:20px;
}
.skill span {
  padding:0 0 10px 10px;
 
}


`
export default Skills;
