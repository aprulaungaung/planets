import React from 'react';

function Navbar(props){

    return <div className ="nav-container">

   <nav className="titlebar">
        <div className="brand">
        <h3>THE PLANETS</h3>
        </div>
        <label for="checkbox" className="check">
        <img  src="../assets/icon-hamburger.svg" className="hamburger" alt="hamburger"></img>
        </label>
        <input type="checkbox" id="checkbox"/>
        <ul className="main-menu">
          <li className ="sub-menu"><div className="menu-link" onClick={props.mercury}>MERCURY</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.venus}>VENUS</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.earth}>EARTH</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.mars}>MARS</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.jupiter}>JUPITER</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.saturn}>SATURN</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.uranus}>URANUS</div></li>
          <li className ="sub-menu"><div className="menu-link" onClick={props.neptune}>NEPTUNE</div></li>

        </ul>
        
        
        <hr className="underline1"/>
      </nav>
      
      <hr className="underline2"/>

    </div>
}


export default Navbar;