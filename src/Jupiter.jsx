

function Jupiter(props){

    return <div className="front">

    {props.levelOne ? <div className="main-window">
  
      <div className="left-window">

       <div className="planet-container" style={{backgroundImage:"url(../assets/planet-jupiter.svg)"}}>


       </div>

      

      </div>
      <div className="right-window">
          <div className="description">
          <h1>Jupiter</h1>
          <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.</p>
      
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

          </div>
      </div>
      
  </div>

: null}

{props.levelTwo ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/planet-jupiter-internal.svg)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Jupiter</h1>
      <p> When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.</p>
     
     <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}

{props.levelThree ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/geology-jupiter.png)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Jupiter</h1>
      <p>The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665. </p>
      
    <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}
  

  </div>
}


export default Jupiter;