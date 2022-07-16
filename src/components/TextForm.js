import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState("");   //here text is a state
  //text="new text";   //wrong way to change the state
  //setText("new Text");  //Correct way to change the state
  const handleUpClick = ()=>{                 //uppercase
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }
  const handleLowClick=()=>{                  //lowercase
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  }
  const handleCapitalClick=()=>{                 //Capitalize
    let newText="";
    newText=text.trimEnd();
    var arr=newText.split(" ");
    newText="";
    for(var i=0;i<arr.length;i++){
      newText+=arr[i][0].toUpperCase()+arr[i].substring(1).toLowerCase()+" ";
    }
    setText(newText);
    props.showAlert("Capitalized text","success");
  }
  const handleClearText=()=>{            //clear text area
    setText("");
    props.showAlert("Cleared text","success");
  }
  const handleCopyText=()=>{              //copy text
    var t=document.getElementById("mybox");
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("Text copied to clipboard",'success');
  }
  const handleExtraSpaces=()=>{          //remove extra spaces
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces","success");
  }
  const handleOnChange = (event)=>{
    console.log("Onchange");
    setText(event.target.value);
  }
  let myBoxStyle={backgroundColor : props.mode==='dark'?'#202020':'white',
            color : props.mode==='dark'?'white':'black'}
  let myBtnStyle={backgroundColor : props.mode==='dark'?'black':'white',
          color : props.mode==='dark'?'white':'black'}

  
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8"  value={text} onChange={handleOnChange} style={myBoxStyle}></textarea>
      </div>
      
    </div>
    <div className="container my-2">
      <button className='btn btn-primary mx-1' onClick={handleUpClick} style={myBtnStyle}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-1' onClick={handleLowClick} style={myBtnStyle}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-1' onClick={handleCapitalClick} style={myBtnStyle}>Capitalize</button>
    </div>
    <div className="container">
      <button className='btn btn-primary mx-1' onClick={handleClearText} style={myBtnStyle}>Clear Text</button>
      <button className='btn btn-primary mx-1' onClick={handleCopyText} style={myBtnStyle}>Copy Text</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpaces} style={myBtnStyle}>Remove extra spaces</button>
    </div>
      
      
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{(text.length>0)?text:'Enter the text to see its preview'}</p>
    </div>
    </>
  )
}

