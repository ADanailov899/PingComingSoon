import React from 'react';
import { useState } from 'react';
import { validate } from 'email-validator';

function Subscribe(){
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState();
    const [showWarning, setShowWarning] = useState(false);

    function handleChange(event) {
        const { value } = event.target;
        setEmail(value);
        validate(email) ? setValid(true, setShowWarning(false)) : setValid(false);
    }

    function handleSubmission() {
        valid
        ? alert(
            "Your email: " + email + " was registered!",
            setEmail("", document.getElementsByTagName("Input")[0].blur())            
            )
            :setShowWarning(true);
    }

    return <div>
        <div className='subscription'>
            <h4>Subscribe and get notified</h4>
        </div>
        <div className='email-form'>
            <input  type='email'
                    placeholder='Your email adress...'
                    value={email}
                    onChange={handleChange}
                    onKeyDown={(event) => event.key === "Enter" && handleSubmission()}
                    className={showWarning ? "warn-input" : ""}
            />
            <button onClick={handleSubmission}>
                Notify Me
            </button>
            {showWarning && <small>Please provide a valid email</small>}
        </div>
        
    </div>
}

export default Subscribe;