import React from 'react';

const userInput = props => {
    const style = {
        border: '2px solid purple'
    };
    return (
        <div className="UserInput">
            <p>search shows</p>
            <input
                style={style}
                type="text"
                onChange={props.changed}
                value={props.userName}
                placeholder={props.userName}
            />
        </div>
    );
};

export default userInput;
