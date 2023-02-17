

function Venus(props){

    return <div className="front">

    {props.levelOne ? <div className="main-window">
  
      <div className="left-window">

       <div className="planet-container" style={{backgroundImage:"url(../assets/planet-venus.svg)"}}>


       </div>

      

      </div>
      <div className="right-window">
          <div className="description">
          <h1>Venus</h1>
          <p>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. </p>
          
          <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

          </div>
      </div>
      
  </div>

: null}

{props.levelTwo ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/planet-venus-internal.svg)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Venus</h1>
      <p>The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.</p>
      
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}

{props.levelThree ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/geology-venus.png)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Venus</h1>
      <p>Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.</p>
     
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}
  

  </div>
}


export default Venus;