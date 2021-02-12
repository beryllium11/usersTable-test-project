import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from './Adress';
import Email from "./Email";
import Button from 'react-bootstrap/Button'

const UserItem = (props) => {
    let selectUserHandler = () => {
        props.selectUser(props.user.UserName, true);
    }
    let openModalHandler = () => {
        props.modalHandler(true);
    }
    return <tr>
            <td>{props.user.FirstName}</td>
            <td>{props.user.LastName}</td>
            <td>{props.user.Gender}</td>
            <td>{props.user.UserName}</td>
            <td>{props.user.Emails.map(e => <Email email={e} />)}</td>
            <td><Address address={props.user.AddressInfo} /></td>
            <td><Button variant="info" onClick={selectUserHandler}>Info</Button></td>
    </tr>
}
export default UserItem;
