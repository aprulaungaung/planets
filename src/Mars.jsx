

function Mars(props){

    return <div className="front">

    {props.levelOne ? <div className="main-window">
  
      <div className="left-window">

       <div className="planet-container" style={{backgroundImage:"url(../assets/planet-mars.svg)"}}>


       </div>

      

      </div>
      <div className="right-window">
          <div className="description">
          <h1>Mars</h1>
          <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
      
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

          </div>
      </div>
      
  </div>

: null}

{props.levelTwo ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/planet-mars-internal.svg)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Mars</h1>
      <p>Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.</p>
      
    <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}

{props.levelThree ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/geology-mars.png)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Mars</h1>
      <p>Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt. </p>
      
    <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>
      </div>
  </div>
  
</div>


:null}
  

  </div>
}

export default Mars;