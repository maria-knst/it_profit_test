import React from 'react';

const MyInput = ({divVisible, ...props}) => {

    const classes = ['MyFormInfoDiv'];

    if(divVisible === true){
        classes.push('MyFormInfoDiv_active');
    }

    return (
        <div className="MyFormInput">
            <input {...props}/>
            <div className={classes.join(" ")}>
                <p>{props.divmessage} is incorrect</p>
            </div>
        </div>
    );
};

export default MyInput;