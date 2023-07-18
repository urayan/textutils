import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    // text = "Enter" wrong way to edit text
    // setText("Enter") right wayt to edit text

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlert({type: "success", msg: "Converted to Uppercase"});
        props.alertNull();
    }

    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlert({type: "success", msg: "Converted to Lowercase"});
        props.alertNull();
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.setAlert({type: "success", msg: "Cleared"});
        props.alertNull();
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setAlert({type: "success", msg: "Copied"});
        props.alertNull();
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlert({type: "success", msg: "Handled extra Spaces"});
        props.alertNull();
    }

    const handlePythonList = ()=>{
        let newText = text.split(/[\n]+/);
        setText("['" + newText.join("', '") + "']");       
        props.setAlert({type: "success", msg: "Python List Generated"});
        props.alertNull();
    }

    const handleSpeak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleHtmlToJsx = () =>{
        let newText = "import React from 'react'\n\nexport default function companent(props) {\n\treturn (\n\t\t<>\n\t\t" + text + "\n\t\t</>\n\t)\n}";
        setText(newText);
        props.setAlert({type: "success", msg: "JSX format generated"});
        props.alertNull();
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handlePythonList}>Make List for Python</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handleSpeak}>Speak</button>
            <button className="btn btn-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'white'}} onClick={handleHtmlToJsx}>HTML to JSX</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length - 1} Words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length - 1)} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview"}</p>
        </div>
        </>
    )
}
