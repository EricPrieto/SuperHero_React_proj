import React from 'react';

const NameList = (props) => {
    return(
        <div>
             <ul>
                {props.arrayOfNames.map( (arrayOfNames) =>
                (
                    <li>{arrayOfNames}</li>
                )
                )}
             </ul>
        </div>
       
    );
}

export default NameList;