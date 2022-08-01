import React from 'react';

const MyTextarea = ({divVisible, ...props}) => {

    const classes = ['MyFormInfoDiv'];

    if(divVisible === true){
        classes.push('MyFormInfoDiv_active');
    }

    return (
        <div className="MyFormInput">
            <textarea {...props}></textarea>
            <div className={classes.join(" ")}>
                <p>{props.divmessage} is incorrect</p>
            </div>
        </div>
    );
};

export default MyTextarea;