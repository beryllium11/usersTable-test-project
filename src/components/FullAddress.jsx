import React from "react";

const FullAddress = (props) => {

        let address = props.address[0]
    return (
            <>
                <p>Address: {address.Address ? address.Address : ''}</p>
                <p>CountryRegion: {address.City.CountryRegion ? address.City.CountryRegion : ''}</p>
                <p>City: {address.City.Name ? address.City.Name : ''}</p>
                <p>Region: {address.City.Region ? address.City.Region : ''}</p>
            </>
        )
}
export default FullAddress;
