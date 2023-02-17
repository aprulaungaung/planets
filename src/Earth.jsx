import React from 'react';

function Earth(props){

   
   
    
   

    return <div className="front">

      {props.levelOne ? <div className="main-window">
    
        <div className="left-window">

         <div className="planet-container" style={{backgroundImage:"url(../assets/planet-earth.svg)"}}>


         </div>

        

        </div>
        <div className="right-window">
            <div className="description">
            <h1>Earth</h1>
            <p> Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.</p>
            
        <div class="wiki">
           <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>
           
      </div>

            </div>
        </div>
        
    </div>
  
  : null}

  {props.levelTwo ? <div className="main-window">
    
    <div className="left-window">

     <div className="planet-container" style={{backgroundImage:"url(../assets/planet-earth-internal.svg)"}}>


     </div>
      
    </div>
    <div className="right-window">
        <div className="description">
        <h1>Earth</h1>
        <p>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
        
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

        </div>
    </div>
    
</div>
  
  
  :null}

  {props.levelThree ? <div className="main-window">
    
    <div className="left-window">

     <div className="planet-container" style={{backgroundImage:"url(../assets/geology-earth.png)"}}>


     </div>
      
    </div>
    <div className="right-window">
        <div className="description">
        <h1>Earth</h1>
        <p>The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.</p>
        
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

        </div>
    </div>
    
</div>
  
  
  :null}
    
  
    </div>
}

export default Earth;