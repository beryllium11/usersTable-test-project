import React from "react";

const Email = (props) => {
    return (
        <p>{props.email ? props.email : ''}</p>
    )
}
export default Email;
