import React from 'react';


const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.goNext()}> Next </button>
        </div>
    )
}


export default Button