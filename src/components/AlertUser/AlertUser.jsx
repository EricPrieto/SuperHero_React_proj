import React from "react";


const AlertUser = (props) => {
    return(         
          <button onClick={props.message}>Click Me</button>
    )
}

// function AlertUser(props){
//   alert(props.alert)
// }
// <button onClick={props.alert}>Click Me</button>

export default AlertUser;