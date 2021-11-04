import React from 'react';

const DisplayName = (props) => {
    return(
        <h1>{props.name.firstName} {props.name.lastName}</h1>
    );
}

export default DisplayName;