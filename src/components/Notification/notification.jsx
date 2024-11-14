import React from "react";
import './notification.css';
const MainNotification=({ notifications })=>{
return(
    <div className="noti">
<h1>Notification</h1>
<p>You Have 3 <span>Notification</span>  Today !</p>
<div className="pages">
<h4>Today</h4>
<div className="page">

 <img src={"/z.png"} alt="" />
 <p className="reaction"><span>Zainab Saad</span> comment on your project  2h</p>

   </div> 
   <div className="b"></div>
 
         <div className="page">
          <img src={"/a.png"} alt="" />
          <p className="reaction"><span>Ali Saad</span> Apply your project  2h</p>
        
                </div> 
                <div className="b"></div>
                <div className="page">
                    <img src={"/h.png"} alt="" />
                    <p className="reaction"><span>Karar Emad</span> Liked your project  2h</p>
                  
                </div>
                <div className="b"></div>
                <h4>This Week</h4>
                <div className="acc">
                    <img src={"/g.png"} alt="" />
                    <div className="NS">
                    <h5><span>Zina saad</span>comment on your project  1d</h5>
                    </div> </div>
                <div className="acc">
                    <img src={"/g.png"} alt="" />
                    <div className="NS">
                    <h5><span>Ghoufran saad</span>comment on your project  2d</h5>
        
                </div> </div>
                <div className="acc">
                    <img src={"/h.png"} alt="" />
                    <div className="NS">
                    <h5><span>Huda salih</span>comment on your project  2d</h5>
                   
                </div> </div>
                <div className="acc">
                    <img src={"/a.png"} alt="" />
                    <div className="NS">
                    <h5><span>Ali saad</span>comment on your project  3d</h5>
                   
                </div> </div>
                </div></div>

)
}
MainNotification.defaultProps = {
    notifications: [
      { name: '', time: '', imgSrc: '' },
      { name: '', time: '', imgSrc: '' },
      { name: '', time: '', imgSrc: '' },
    ],
  };
export default MainNotification;