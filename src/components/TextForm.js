import React, { useState } from "react"; //rfc

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    if(text.length !== 0){
    props.onShowAlert("Converted to Uppercase!", "success")
    }
    else{
      props.onShowAlert("Please Write Something!", "warning")
    }
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    if(text.length !== 0){
    props.onShowAlert("Converted to Lowercase!", "success")
    }
    else{
      props.onShowAlert("Please Write Something!", "warning")
    }
  };


  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      if (text.length !== 0) {
        props.onShowAlert("Copied to Clipboard!", "success");
      } else {
        props.onShowAlert("Please Write Something!", "warning");
      }
    });
  };

  const handlePasteText = () => {
    if (Navigator.clipboard) {
      Navigator.clipboard
        .readText()
        .then((clipboardText) => {
          setText(clipboardText);
        })
        .catch((err) => {
          console.error("Failed to read clipboard contents: ", err);
        });
    } else {
      console.warn("Clipboard API not available");
    }
    if(text.length !== 0){
    props.onShowAlert("Pasted to Clipboard!", "success")
    }
    else{
      props.onShowAlert("Something Wrong!", "warning")
    }
  };

  const handleAllClear = () => {
    setText("");
    if(text.length !== 0){
    props.onShowAlert("Text Cleared!", "success")
    }
    else{
      props.onShowAlert("Please Write Something!", "warning")
    }
  };

  const countWords = (str) => {

    let words;
    if ( text===" " || text.length === 0) {
      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "Change" // Wrong way to change the state
  // setText("Change"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white': 'blue'}}>
        {/*{1. javascript{2. javascriptObject}} */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            // style={{backgroundColor: props.mode === 'dark'?'black': 'white'}}
            style={{backgroundColor: props.mode === 'dark'?'black': 'white', color: props.mode === 'dark'?'white': 'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlePasteText}>
          Paste Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleAllClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white': 'blue'}}>
        <h2>Your Text Summary</h2>
        <p>
          {countWords(text)} Words And {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
