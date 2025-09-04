import PropTypes from 'prop-types';
import React, { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');
    const [foundEmails, setFoundEmails] = useState("Not Found");

    // Uppercase function
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    // Clear Text Area function
    const handleClClick = () => {
        console.log("Clear button clicked" + text);
        let newText = " ";
        setText(newText);
    }
    // Lowercase function
    const handleLOClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    // On Change Function
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    // Find Email Address Function

    const handleFindEmClick = () =>{
        console.log("Find Email Button Click " + text);
        let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g;
        let emails = text.match(emailPattern);
        console.log(emails);
        setFoundEmails(emails ? emails.join(", ") : "No email found");
    }

     // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

     const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


    return (
        <>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.formlabel}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} />
            </div>
        
            <button className="btn btn-primary mx-1 my-1"onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleLOClick}> Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleClClick}>Clear Text Area</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleFindEmClick}>Find Email Address</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Reomve Extra Space</button>


            

            <div className='text-summary my-3'>
                <h2>Your text summary</h2>
                <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").length } Minutes Read</p>
                <p className='email'>{foundEmails}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

// TextForm.defaultProps = {
//     formlabel: "Please Enter Your Text"
// }

export default TextForm;
