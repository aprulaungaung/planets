

function Mercury(props){

    return <div className="front">

    {props.levelOne ? <div className="main-window">
  
      <div className="left-window">

       <div className="planet-container" style={{backgroundImage:"url(../assets/planet-mercury.svg)"}}>


       </div>

      

      </div>
      <div className="right-window">
          <div className="description">
          <h1>Mercury</h1>
          <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
          
          <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

          </div>
      </div>
      
  </div>

: null}

{props.levelTwo ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/planet-mercury-internal.svg)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Mercury</h1>
      <p> Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.</p>
      
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>
     

      </div>
  </div>
  
</div>


:null}

{props.levelThree ? <div className="main-window">
  
  <div className="left-window">

   <div className="planet-container" style={{backgroundImage:"url(../assets/geology-mercury.png)"}}>


   </div>
    
  </div>
  <div className="right-window">
      <div className="description">
      <h1>Mercury</h1>
      <p>Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s. </p>
     
      <div class="wiki">
       <p>Source:<a href="https://en.wikipedia.org/wiki/Main_Page" style={{color:"#fff", fontSize:"16px"}}>Wikipedia<img src="../assets/icon-source.svg" alt="source"/></a> </p>

      </div>

      </div>
  </div>
  
</div>


:null}
  

  </div>
}

export default Mercury;