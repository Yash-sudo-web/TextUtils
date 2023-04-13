import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText=text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = () =>{
    let newText=text.toLowerCase()
    setText(newText)
  }
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleClear = () =>{
    let newText=''
    setText(newText)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" placeholder="Enter your text here..."
      onChange={handleOnChange} id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'white':'white', color:props.mode==='dark'?'black':'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{(0.008* text.split(' ').length).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
