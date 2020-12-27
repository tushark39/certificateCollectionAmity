import React from 'react'
import backgroundImage from '../images/background.jpg'
const DisplayPage=()=>{
    return(
        <div className="backgroundImage" >
            <div className="backgroundImageText">
            <h1 style={{fontSize:50}}>Achivement Record</h1>
            <h3 style={{fontSize:30}}>B.Tech CSE SEM 1</h3>
            <div>
            <a href="#form"><i style={{fontSize:70,marginTop:150}} class="fas fa-chevron-circle-down"></i></a>
            </div>
            </div> 
           
        </div>
    )
}
export default DisplayPage;