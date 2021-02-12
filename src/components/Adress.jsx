import React from "react";

const Address = (props) => {
    return (
        <p>{props.address[0] ? props.address[0].Address : ''}</p>
    )
}
export default Address;
