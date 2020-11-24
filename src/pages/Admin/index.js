import React from 'react'
import Page from '../../components/Page'
import {Modal, Button} from 'react-bootstrap';

const Admin = () => {
    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Login Mestre</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p><Button variant="primary" style={{width:'100%'}}>Cadastrar Usuário</Button></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger">Logout</Button>
                    
                </Modal.Footer>
            </Modal.Dialog>
        </Page>
    )
}

export default Admin;
