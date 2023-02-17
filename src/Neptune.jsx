

function Neptune(props){

    return <div className="front">

    {props.levelOne ? <div className="main-window">
  
      <div className="left-window">

       <div className="planet-container" style={{backgroundImage:"url(../assets/planet-neptune.svg)"}}>


       </div>

      

      </div>
      <div className="right-window">
          <div className="description">
          <h1>Neptune</h1>
          <p>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.</p>
         
       <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

          </div>
      </div>
      
  </div>

: null}

{props.levelTwo ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/planet-neptune-internal.svg)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Neptune</h1>
      <p> Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.</p>
      
    <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}

{props.levelThree ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/geology-neptune.png)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Neptune</h1>
      <p>Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.</p>
      
    <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}
  

  </div>
}


export default Neptune;