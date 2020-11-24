import React from 'react'
import Page from '../../components/Page'
import {Modal, Button} from 'react-bootstrap';

const Reception = () => {
    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>ADMINISTRATIVO</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p><Button variant="primary" style={{width:'100%'}}>Cadastrar Paciente</Button></p>
                    <p><Button variant="primary" style={{width:'100%'}}>Transferir Leito</Button></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger">Logout</Button>
                    
                </Modal.Footer>
            </Modal.Dialog>
        </Page>
    )
}

export default Reception;
