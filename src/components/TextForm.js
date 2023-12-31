import React,{useState} from "react";

const TextForm = (props) => {
   
  const changehandler=(event)=>{
    usetext(event.target.value)
  }

const clickhandler=()=>{
  let upercase = text.toUpperCase()
  usetext(upercase)
  props.showAlert("Text has been changed to UpperCase","Success");
}

const clicklowhandler=()=>{
  let lowercase = text.toLowerCase()
  usetext(lowercase)
  props.showAlert("Text has been changed to LowerCase","Success");
}

const clickclear=()=>{
  let text = ''
  usetext(text)
  props.showAlert("Text has been cleared out","Success");
}

const style = {
 color:props.mode==='light'?'grey':'white',
 backgroundColor: props.mode ==='light'?'white':'grey',
}

    const [text , usetext]= useState('')
    
  return (
    <>
    <div>
        <h1 style={style}>{props.heading}</h1>
      <div className="mb-3"><textarea className="form-control" value={text}  onChange={changehandler} id="exampleFormControlTextarea1" rows="8" style={style}></textarea>
      </div>
      <button style={style} className="btn btn-primary mx-2" onClick={clickhandler}>Convert to UpperCase</button>
      <button style={style} className="btn btn-primary mx-2" onClick={clicklowhandler}>Convert to lowercase</button>
      <button style={style} className="btn btn-primary mx-2" onClick={clickclear}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2 style={style}>Your text summary</h2>
      <p style={style}>Text contains {text.split(" ").length} words and {text.length} characters.</p>
      <p style={style}>{0.008 * text.split(" ").length} Minutes read</p>
      <h2 style={style}>Preview</h2>
      <p style={style}>{text}</p>
    </div>
    </>
  );
};

export default TextForm;
