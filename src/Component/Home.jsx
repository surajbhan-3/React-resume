import React from 'react'
import "../index.css"
import {FaLocationDot,FaEarthAsia} from "react-icons/fa6";
import {FaTwitter,FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaBookReader} from "react-icons/fa"
import {BiSolidPhoneCall,BiSolidMoviePlay} from "react-icons/bi"
import {RiJavascriptFill} from "react-icons/ri"
import {SiMongodb,SiYourtraveldottv} from "react-icons/si"
import {GiMusicSpell,GiCampCookingPot} from "react-icons/gi"
import profile from "../assests/surajbhan-res.jpg"

function Home() {
  return (
    <React.Fragment>

        <div className="main-container">
                    
                      <div className="header-div">
                            <div className="prof">
                                <h1>SURAJ BHAN SINGH</h1>
                                <p>FULL STACK WEB DEVELOPER</p>
                                <p>Self motivated full stack web developer with experties in creating ready to
                                    use user-friendly application with minimum supervision. Team collaborator
                                    with good interpersonal skills. Looking for challenging role in growth
                                    oriented organisation.</p>

                            </div>
                            <div className="image-div">
                                      <img style={{height:"inherit"}}  src={profile} alt="" />
                            </div>

                            <div className="info-div">

                                    <p><BiSolidPhoneCall/> +91 8920213684</p>
                                    <a href="https://twitter.com/surajbhan2boaz" target="_blank" rel="noopener noreferrer">
                                    <p><FaTwitter/> Twitter</p>
                                    </a>
                                    
                                    <a href="https://surajbhan-3.github.io/" target="_blank" rel="noopener noreferrer"> <p><FaEarthAsia/> surajbhan-3</p></a>
                                    
                                    <p><FaLocationDot/>  Faridabad, Haryana</p>

                            </div>


                      </div>




                      <div className="about-div">

                                    <div className="whoami">
                                        <h1>Who am i</h1>
                                        <p>
                                        I'm a passionate computer science enthusiast with a focus on full-stack development using Node.js, JavaScript, HTML, CSS, React and MongoDB. I have experience working on various projects, including web applications and websites. <br /> <br /> I believe in creating user-friendly and visually appealing web applications. Continuous learning is important to me, and I enjoy reading and playing games in my free time. I'm open to new opportunities and projects, so feel free to reach out to me. <br /> <br />

                        
                                        </p>
                                        <button><FaHtml5 size={40}/></button><button><FaCss3Alt size={40}/></button><button> <RiJavascriptFill size={40}/> </button>
                                        <button><FaReact size={40} /></button>
                                        <button><FaNodeJs size={40}/></button>
                                        <button><SiMongodb size={40}/></button>
                                       

                                    </div>

                                   <div className="expretin">
                                    <h1>Expert In</h1>

                                    <p>I believe in creating user-friendly and visually appealing web applications. Continuous learning is important to me, and I enjoy reading and playing games in my free time. I'm open to new opportunities and projects, so feel free to reach out to me.</p>
                                  <div className="progress-div">
                                    <div>
                                    <h5>HTML <br />
                                       <progress value={80} max={100}></progress>
                                     </h5> <span>  <h5>CSS <br /> <progress value={80} max={100}></progress> </h5></span>
                                    </div>
                                    

                                    <div>
                                    <h5>Javascript <br />
                                       <progress value={70} max={100}></progress>
                                     </h5> <span>  <h5>React <br /> <progress value={60} max={100}></progress> </h5></span>
                                     
                                    </div>
                                     <div>
                                     <h5>Node.js <br /> <progress value={60} max={100}>60%</progress> </h5>
                                     </div>


                                    </div>

                                    
                                    
                                    

                                   </div>


                      </div>

                        <div className="mid-div">
                            
                                <div className="edu-div">
                                <h1>Education</h1>
                                    <div className='edu-1'>
                                        <div>
                                        <p>   <strong>    Full Stack Web Devlopment ( Full Time ) </strong>
                                           <br />  Masai School,Bangaluru  <br />
                                          May 2022 - Present</p>  
                                          <hr />
                                        </div>
                                    </div>
                                    <div className='edu-2'>
                                        <div>

                                        <p>   <strong>    Diploma in Mechanical Engineering

                                                

                                               </strong>
                                           <br />  Govt. Polytechnic,Gurugram
                                         <br />
                                         July 2015 - June 2018 </p>  
                                          <hr />
                                        </div>
                                    </div>
                                    <div className='edu-3'>
                                        <div>
                                        <p>   <strong>    Full Stack Web Devlopment ( Full Time ) </strong>
                                           <br />  Masai School,Bangaluru  <br />
                                          May 2022 - Present</p>  
                                          <hr />
                                        </div>
                                    </div>

                                </div>




                                <div className="exp-div">
                                <h1>Experience</h1>

                                <div className='exp-1'>
                                <div>
                                        <p>   <strong>    Full Stack Web Devlopment ( Full Time ) </strong>
                                           <br />  Masai School,Bangaluru  <br />
                                          May 2022 - Present</p>  
                                          <hr />
                                        </div>
                                    </div>
                                    <div className='exp-2'>
                                    <div>
                                        <p>   <strong>    Full Stack Web Devlopment ( Full Time ) </strong>
                                           <br />  Masai School,Bangaluru  <br />
                                          May 2022 - Present</p>  
                                          <hr />
                                        </div>
                                    </div>
                                    <div className='exp-3'>
                                      
                                        <div>
                                        <p>   <strong>    Full Stack Web Devlopment ( Full Time ) </strong>
                                           <br />  Masai School,Bangaluru  <br />
                                          May 2022 - Present</p>  
                                          <hr />
                                        </div>
                                    </div>

                                </div>
                                   
                        </div>

                        <h1 style={{textAlign:"center",marginTop:"20px"}} >WHAT I DO</h1>

                        <div className="bottom-div">

                            <button className="div-1">Web <br /> Development</button>
                            <button className="div-2">Fronted <br />Development</button>
                            <button className="div-3">Backend <br />Development</button>
                            <button className="div-4">UI/UX  <br /> Development</button>
                        </div>

                        <div className="footer">

                           <div> <button> <SiYourtraveldottv/> Travelling</button> </div>
                           <div> <button className='btn-2'> <FaBookReader/> Reading</button></div>
                           <div>  <button className='btn-3'> <BiSolidMoviePlay/> Movie</button></div>
                           <div>   <button className='btn-4'><GiMusicSpell/> Music</button> </div>
                           <div>   <button> <GiCampCookingPot/> Cooking</button></div>

                        </div>

                        <div className='credit'>
                                     <div>
                                        <strong>Developed by Suraj bhan singh </strong>
                                     </div>
                                     <div>
                                        <strong>Design credit <a href="http://https://www.behance.net/psdfreebies" target="_blank" rel="noopener noreferrer">psdfreebies</a></strong>
                                        
                                     </div>
                        </div>

          </div>
             
    </React.Fragment>
  )
}

export default Home