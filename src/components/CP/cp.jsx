import React from "react";
import './cp.css'
const MainCp=({mainCp})=>{
return(
    <div className="Creat-project">
       <div className="CP">
        <h1>Create a project</h1>
        <img src={"cross.png"}/>
    </div></div>
)
}
MainCp.defaultProps={
    mainCp:[{}]
}
export default MainCp;