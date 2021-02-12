import React, {useState} from "react";
import UserItem from "./Item";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CurrentUserInfo from "./CurrentUser";

const Users = ({users, selectUser, currentUser, modalHandler, isModalOpened, ...props}) => {

    const handleClose = () => modalHandler(false);
    const handleShow = () => modalHandler(true);
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>UserName</th>
                    <th>Emails</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                { users.map(u => <UserItem handleShow={handleShow} user={u} modalHandler={modalHandler} selectUser={selectUser}/> )}
                </tbody>
            </Table>

            <Modal show={isModalOpened} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User {currentUser.UserName}</Modal.Title>
                </Modal.Header>
                <Modal.Body><CurrentUserInfo currentUser={currentUser}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default Users;
