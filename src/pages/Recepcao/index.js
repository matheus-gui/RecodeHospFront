import React from 'react'
import Page from '../../components/Page'
import {Modal, Button, Form} from 'react-bootstrap';

const Recepcao = () => {
    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>RECEPÇÃO</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <p><Button variant="primary" style={{width:'100%'}}>INTERNAÇÃO</Button></p>
                        <p><Button variant="primary" style={{width:'100%'}}>TRANSFERÊNCIA DE LEITO</Button></p>
                        <p><Button variant="primary" style={{width:'100%'}}>ALTA MÉDICA</Button></p>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger">Logout</Button>
                    
                </Modal.Footer>
            </Modal.Dialog>
        </Page>
    )
}

export default Recepcao;
