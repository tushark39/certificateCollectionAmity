import React from 'react';
import logo from '../images/TEG.png'
export const Header = () => {
    return (
        <header>
            <nav className="navbar" style={{minHeight:80,backgroundColor:"#1a1a1a"}}>
                <div className="container-fluid " style={{}}>
                <a className="navbar-brand brandPicForceToCenter" href="#" style={{ left: '50%',position: 'absolute'}}><img src={logo} style={{width:110,height:70}} /></a>
                </div>
            </nav>
            <nav className="navbar toBeShownOnScroll" style={{minHeight:80,backgroundColor:"#1a1a1a"}}>
                <div className="container-fluid " style={{}}>
                <a className="navbar-brand" href="#" style={{}}><img src={logo} style={{width:110,height:70}} /></a>
                </div>
            </nav>

        </header>

    )
}
export const Footer = () => {
    return (
        <footer style={{backgroundColor:"#1a1a1a"}}>
           <div className="container" id="form">
            <div className="row">
                <div className="col-md-12" style={{minHeight:50,paddingTop:10,color:"#fff"}}>
                &#169; 2020 The E-Guardians
                </div>
            </div>
        </div>
        </footer>

    )
}