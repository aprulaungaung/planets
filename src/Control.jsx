import React from 'react';



function Control(props){

    let bgColor = {backgroundColor: "#6F1AB6"}

    let customStyle = {color: "#BDCDD6",marginRight: "15px"};

    let line = {textDecoration: "underline",
                textDecorationColor: "#6F1AB6",
                textDecorationThickness: "3px",
                position: "relative",
                textUnderlineOffset: "17px",
                
                
                };

    


    return <div className="step-container">

    <div className="chamber1">

    <div className="step" onClick={props.setOne} style={ (props.stepOne) ? bgColor : null}><span style={customStyle}>01</span>Overview</div>
    <div className="step" onClick={props.setTwo} style={ (props.stepTwo) ? bgColor : null}><span style={customStyle}>02</span>Internal Structure</div>
    <div className="step" onClick={props.setThree} style={(props.stepThree) ? bgColor : null}><span style={customStyle}>03</span>Surface Geology</div>
   
    </div>

    <div className="chamber2">

    <div className="step" onClick={props.setOne} style={props.stepOne ? line : null}>Overview</div>
    <div className="step" onClick={props.setTwo} style={props.stepTwo ? line : null}> Structure</div>
    <div className="step" onClick={props.setThree} style={props.stepThree ? line : null}>Surface </div>
   
    </div>

    
</div>

}



export default Control;