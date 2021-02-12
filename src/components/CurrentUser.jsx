import React from "react";
import Badge from "react-bootstrap/Badge";
import Email from "./Email";
import FullAddress from "./FullAddress";
import Table from "react-bootstrap/Table";


const CurrentUserInfo = ({currentUser, ...props}) => {
    return <Table striped bordered hover size="sm">
            <tbody>
            <tr><td><Badge variant="secondary">First Name</Badge></td><td>{currentUser.FirstName}</td></tr>
            <tr><td><Badge variant="secondary">Last Name</Badge></td><td>{currentUser.LastName}</td></tr>
            <tr><td><Badge variant="secondary">Gender</Badge></td><td>{currentUser.Gender}</td></tr>
            <tr><td><Badge variant="secondary">UserName</Badge></td><td>{currentUser.UserName}</td></tr>
            <tr><td><Badge variant="secondary">Emails</Badge></td><td>{currentUser.Emails.map(e => <Email email={e} />)}</td></tr>
            <tr><td><Badge variant="secondary">Address Info</Badge></td><td>{currentUser.AddressInfo[0]? <FullAddress  address={currentUser.AddressInfo}/> : ''}</td></tr>
            <tr><td><Badge variant="secondary">Concurrency</Badge></td><td>{currentUser.Concurrency}</td></tr>
            </tbody>
        </Table>

}

export default CurrentUserInfo;
