import PropTypes from 'prop-types';
import React, { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText("you have clicked on handleUpClick");
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.formlabel}</label>
                <textarea 
                    className="form-control" 
                    id="myBox" 
                    rows="8" 
                    value={text} 
                    onChange={handleOnChange} 
                />
            </div>
            <button 
                className="btn btn-primary mx-1 my-1" 
                onClick={handleUpClick}
            >
                Convert to Uppercase
            </button>
        </>
    )
}

TextForm.defaultProps = {
    formlabel: "Please Enter Your Text"
}

export default TextForm;
