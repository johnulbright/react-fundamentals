import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo=()=>{
    const [color,setColor]=useState("white");
    const [backgroundColor,setBackgroundColor]=useState("purple");
    const [borderRadius,setBorderRadius]=useState("5px");
    const [borderStyle,setBorderStyle]=useState("dashed");
    const [display,setDisplay]=useState("inline-block");
    const [width,setWidth]=useState("350px");
    const [textAlign,setTextAlign]=useState("center");
    let styles={
        color:color,
        borderColor:"blue",
        backgroundColor:backgroundColor,
        borderRadius:borderRadius,
        borderStyle:borderStyle,
        display:display,
        width:width,
        textAlign:textAlign
    };
    const toggleColor=()=>{
        color==="white"?setColor("black"):setColor("white");
        console.log("toggleColor ran")
    }
    const toggleBackgroundColor=()=>{
        backgroundColor==="purple"?setBackgroundColor("green"):setBackgroundColor("purple");
        console.log("toggleBackgroundColor ran")

    }
    const toggleBorderRadius=()=>{
        borderRadius==="5px"?setBorderRadius("15px"):setBorderRadius("5px");
        console.log("toggleBorderRadius ran")

    }
    const toggleBorderStyle=()=>{
        borderStyle==="dashed"?setBorderStyle("solid"):setBorderStyle("dashed");
        console.log("toggleBorderStyle ran")
    }

    return(
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                    <FunctionalComponent string="This changes text color" function={toggleColor} selectedStyle={color}/>
                    <FunctionalComponent string="This changes background color" function={toggleBackgroundColor}selectedStyle={backgroundColor}/>
                    <FunctionalComponent string="This changes border radius" function={toggleBorderRadius} selectedStyle={borderRadius} />
                    <FunctionalComponent string="And this changes border style" function={toggleBorderStyle} selectedStyle={borderStyle}/>
                </div>
            </div>
        </div>

    );
}
export default PropsDemo;


const FunctionalComponent=(props)=>{  //curious...do we have to call it "props" here? Nope!
    return(
        <div>
        <p>{props.string}</p>
        <button onClick={props.function}>Toggle style</button>
        <TinyComponent selectedStyle={props.selectedStyle}/>
        </div>
    )
}

const TinyComponent=(props)=>{
    return(
        <div>
            <p>The current style is {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps={
    string:"this is wild",
    function:()=>console.log("can i see this in my dev tools?"),
    selectedStyle:"what style?"
}

FunctionalComponent.propTypes={
    string:PropTypes.string.isRequired,
    function:PropTypes.func.isRequired,
    selectedStyle:PropTypes.string.isRequired,
}