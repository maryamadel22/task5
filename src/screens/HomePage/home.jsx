import React, { useState } from 'react';
import Container from "../../components/Container/container";
import MainHeader from "../../components/Header/header";
import './home.css'
import MainWp from "../../components/WP/wp";
import MainCp from '../../components/CP/cp';
const MainHome = () =>{
    const [showWP, setShowWP] = useState(false);
    const [showCP, setShowCP] = useState(false);

    const handelclike=()=>{
        setShowWP(!showWP);
    
    } 
    const handelclike2=()=>{
        setShowCP(!showCP);
    
    } 
    return(
    
   <Container>
    <MainHeader />
    <div className="cards">
        <div className="card"> 
            <div className="profile">
                <img src={"/mustafa.png"} alt="" />
                <p>Mustafa Emad</p>
                <div className="rate">
                    <img src={"/rate.png" }alt="" /></div>
                <button>Edit Profile</button>
            </div>
            <div className="about">
                <h1>About</h1>
                <p>GreenTech Solutions Inc.Renewable Energy & Technology San Francisco, California, with operations in North America and Europe</p> 
                </div>
                <div className="project">
                    <h1>Projects History</h1>
                    <div className="PN">
                    <div className="stat"></div>
                    <h2>project Name</h2>
                    <p className="date">22 Jan 2024 - 11 May  2024. </p>
                    <p>Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. </p>
                    
                    </div>
                    <div className="PN">
                    <div className="stat"></div>
                    <h2>project Name</h2>
                    <p className="date">22 Jan 2024 - 11 May  2024. </p>
                    <p>Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently.  </p>
                    
                    </div>

                </div>
        </div>
        <div className="card2">
            <div className="IP">
                <img className="person" src={"/mustafa.png"} alt="" />
                <input  type="text" placeholder="Mustafa Let’s Create a Project !" />
                <img className="plus" src={"/blus.png"} onClick={handelclike2} />
                {showCP && (<MainCp />  )} 
            </div>
            <div className="body">
            <div className="CN"> 
                <div className="info">
               <div className="imag"></div>
               <div className="name">
                <h1> Client Name</h1>
                <p>Posted 2 hours ago </p> 
                 </div>
                </div>
                <div className="av">   
                <button>Available</button>
                <div className="sets">
                <div className="set"></div>
                <div className="set"></div>
                <div className="set">  </div>
                </div>
                </div>   
            </div>
            <div className="Full-Sack">
            <h1 className="Full-Sack">Looking for Full-Sack Developer
            with experience +2 years</h1> 
            <p>to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...<a className="active">See more</a></p>
            <img src={"/person.png"} alt="" />
            <div className="midea">
            <img  src={"/like.png"} alt="" /><p>like</p>
            <img className="commint" src={"/comm.png"} alt="" /><p>commint</p>
            </div>
           
            </div>
          
            </div>
            <div className="body">
            <div className="CN"> 
                <div className="info">
               <div className="imag"></div>
               <div className="name">
                <h1> Client Name</h1>
                <p>Posted 2 hours ago </p> 
                 </div>
                </div>
                <div className="av">   
                <button>Available</button>
                <div className="sets">
                <div className="set"></div>
                <div className="set"></div>
                <div className="set">  </div>
                </div>
                </div>   
            </div>
            <div className="Full-Sack">
            <h1 className="Full-Sack">Looking for Full-Sack Developer
            with experience +2 years</h1> 
            <p>to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development</p>
            <h1>Duration of project</h1>
            <p>4 Months</p>
            <h1>Pricing</h1>
            <p>Hourly   $ 50</p>
            
            <div className="midea">
            <img  src={"/like.png"} alt="" /><p>like</p>
            <img className="commint" src={"/comm.png"} alt="" /><p>commint</p>
            </div>
           
            </div>
          
            </div>
        </div>
        <div className="card3"> 
            <div className="RP">
                <div className="p">
                <h1>Your Recent Project</h1>
                <p className="AllP">see all projects</p>
                </div>
                <div className="web">
                    <img src={"/web.png"} />
                    <div className="detals">
                     <h1>Web Design Project</h1>
                    <p className="time">10$/Hour</p>
                    </div>
                    <img className="more" src={"/iconP.png"} onClick={handelclike}  />
                  
                </div>
                {showWP && (<MainWp />  )} 
                <div className="b"></div>
                
                <div className="web">
                    <img src={"/web.png"} />
                    <div className="detals">
                     <h1>Web Design Project</h1>
                    <p className="time">10$/Hour</p>
                    </div>
                    <img className="more" src={"/iconP.png"} onClick={handelclike}  />
                   
                </div>
                
                
                <div className="web">
                    <img src={"/web.png"} />
                    <div className="detals">
                     <h1>Web Design Project</h1>
                    <p className="time">10$/Hour</p>
                    </div>
                    <img className="more" src={"/iconP.png"} onClick={handelclike}  />
                   
                </div>
               
                
                <div className="web">
                    <img src={"/web.png"} />
                    <div className="detals">
                     <h1>Web Design Project</h1>
                    <p className="time">10$/Hour</p>
                    </div>
                    <img className="more" src={"/iconP.png"} onClick={handelclike}  />
                   
                </div>
                
            </div>
           
            <div className="FL">
                <div className="Titel">
                <h1>Freelancers You Worked With</h1>
                <p className="SL">See All</p>
                </div>
                <div className="acc">
                    <img src={"/z.png"} alt="" />
                    <div className="NS">
                    <h5>Zena saad</h5>
                    <p className="sub">2 months ago</p>
                </div></div>
                <div className="acc">
                    <img src={"/g.png"} alt="" />
                    <div className="NS">
                    <h5>Ghoufran saad</h5>
                    <p className="sub">3 months ago</p>
                </div> </div>
                <div className="acc">
                    <img src={"/h.png"} alt="" />
                    <div className="NS">
                    <h5>Huda salih</h5>
                    <p className="sub">7 months ago</p>
                </div> </div>
                <div className="acc">
                    <img src={"/a.png"} alt="" />
                    <div className="NS">
                    <h5>ali saad</h5>
                    <p className="sub">1 year ago</p>
                </div> </div>
                <div className="acc">
                    <img src={"/AK.png"}alt="" />
                    <div className="NS">
                    <h5>Ahmed khaled</h5>
                    <p className="sub">2 year ago</p>
                </div>  </div>
            </div>
        </div>
   </div>
  
   </Container>
   
)
}

export default MainHome;