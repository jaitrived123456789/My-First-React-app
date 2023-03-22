import React, { useState } from "react";
export default function TextForm(props) {
    
//Upper case button function
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","sucess");
    }
//Lower case button function
    const handlelowClick = () =>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","sucess");
    }
//Clear button function
    const handleClearClick = () =>{
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
        
    }


    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value);
    }

    const [text, setText] = useState('');    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange } style={{backgroundColor: props.mode==='dark'? "#3a3939bf":'white', color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> Your Text summary </h1>
        {/* New update to the code */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length}  Words  {text.length} Characters </p>  

        <p>{0.008* text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox to preview it'}</p>
    </div>
    </>
  )
}
