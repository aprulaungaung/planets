import React,{useState} from 'react';
import Navbar from './Navbar';
import Control from './Control';
import Background from './Background';
import Earth from './Earth';
import Mercury from './Mercury';
import Venus from './Venus';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import Footer from './Footer';



function App(){

   
    const [mercury, setMercury] = useState(true);
    const [venus, setVenus] = useState(false);
    const [earth, setEarth] = useState(false);
    const [mars, setMars] = useState(false);
    const [jupiter, setJupiter] = useState(false);
    const [saturn, setSaturn] = useState(false);
    const [uranus, setUranus] = useState(false);
    const [neptune, setNeptune] = useState(false);


    const [one,setOne] = useState(true);
    const [two,setTwo] = useState(false);
    const [three,setThree] = useState(false);

    function fnOne(){

        setOne(true);
        setTwo(false);
        setThree(false);
        
    }
    
    function fnTwo(){

        setTwo(true);
        setOne(false);
        setThree(false);
        console.log("I was called");
    }

    function fnThree(){

        setThree(true);
        setOne(false);
        setTwo(false);
        console.log("I was called");
        
    }
    function tuneMercury(){

        setMercury(true);
        setEarth(false);
        setVenus(false);
        setMars(false);
        setJupiter(false);
        setSaturn(false);
        setUranus(false);
        setNeptune(false);
    }

    function tuneVenus(){

        setVenus(true);
        setEarth(false);
        setMercury(false);
        setMars(false);
        setJupiter(false);
        setSaturn(false);
        setUranus(false);
        setNeptune(false);
    }

    function tuneEarth(){

        setEarth(true);
        setMercury(false);
        setVenus(false);
        setMars(false);
        setJupiter(false);
        setSaturn(false);
        setUranus(false);
        setNeptune(false);
    }

    function tuneMars(){

        setMars(true);
        setEarth(false);
        setMercury(false);
        setVenus(false);
        setJupiter(false);
        setSaturn(false);
        setUranus(false);
        setNeptune(false);
    }

    function tuneJupiter(){

        setJupiter(true);
        setMercury(false);
        setVenus(false);
        setMars(false);
        setEarth(false);
        setSaturn(false);
        setUranus(false);
        setNeptune(false);
    }

    function tuneSaturn(){

        setSaturn(true);
        setJupiter(false);
        setMercury(false);
        setVenus(false);
        setMars(false);
        setEarth(false);
        setUranus(false);
        setNeptune(false);
    }

    function tuneUranus(){

        setUranus(true);
        setSaturn(false);
        setJupiter(false);
        setMercury(false);
        setVenus(false);
        setMars(false);
        setEarth(false);
        setNeptune(false);
    }

    function tuneNeptune(){

        setNeptune(true);
        setUranus(false);
        setSaturn(false);
        setJupiter(false);
        setMercury(false);
        setVenus(false);
        setMars(false);
        setEarth(false);

    }

    return <div>

    <Navbar 
        mercury = {tuneMercury}
        venus = {tuneVenus}
        earth = {tuneEarth}
        mars = {tuneMars}
        jupiter = {tuneJupiter}
        saturn = {tuneSaturn}
        uranus = {tuneUranus}
        neptune = {tuneNeptune}
    />
    <Background />

    <Control 

        stepOne = {one}
        stepTwo = {two}
        stepThree = {three}
        setOne = {fnOne}
        setTwo = {fnTwo}
        setThree = {fnThree}
    />

    {mercury ? <Mercury 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}
        
    /> 
    
    :null}

    {mercury ? <Footer 

     title1="Rotation Time"
     title2="Revolution Time"
     title3="Radius"
     title4="Average Temp."
     rotate="58.6 Days "
     revol="87.97 Days"
     radius="2,439.7 KM"
     average="430°c"

    
   />
   
    :null}

    {venus ? <Venus 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}
    /> 
    
    :null}

    {venus ? <Footer 

      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="243 Days"
      revol=" 224.7 Days"
      radius="6,051.8 KM "
      average="471°c"

    /> 
    
    :null}
    
    {earth ? <Earth 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}
    /> : null }
   
   {earth ? <Footer 

      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="0.99 Days"
      revol="365.26 Days"
      radius="6,371 KM"
      average="16°c"
   
   /> 
   
   :null}
   
   {mars ? <Mars 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}
   /> 
   
   : null}

   {mars ? <Footer 

      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="1.03 Days"
      revol="1.88 Years"
      radius="3,389.5 KM"
      average="-28°c"

   /> 
   
   :null}

   {jupiter ? <Jupiter 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}

   /> 
   
   : null}

   {jupiter ? <Footer 

      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="9.93 Hours"
      revol="11.86 Years"
      radius="69,911 KM "
      average="-108°c"

   /> 
   
   : null}

   {saturn ? <Saturn 
    
        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}

   /> 
   
   : null}

   {saturn ? <Footer 

      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="10.8 Hours"
      revol="29.46 Years"
      radius="58,232 KM"
      average="-138°c"

   /> 
   
   : null}

   {uranus ? <Uranus 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}

   /> 
   
   : null}

   {uranus ? <Footer 

      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="17.2 Hours"
      revol="84 Years"
      radius="25,362 KM "
      average="-195°c"

   /> 
   
   :null}

   {neptune ? <Neptune 

        levelOne = {one}
        levelTwo = {two}
        levelThree = {three}

   /> 
   
   : null}

   {neptune ? <Footer 
     
      title1="Rotation Time"
      title2="Revolution Time"
      title3="Radius"
      title4="Average Temp."
      rotate="16.08 Hours"
      revol="164.79 Years"
      radius="24,622 KM "
      average="-201°c"

   /> 
   
   : null}

    </div>
}


export default App;



