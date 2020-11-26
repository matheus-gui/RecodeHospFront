import React from 'react'
import {Form, Button, Modal, Card, ListGroupItem, ListGroup} from 'react-bootstrap';


const ModalTransferencia = props => {
    
    const { className, modalRef } = props;
    
    return (
            <Modal.Dialog ref={modalRef} className={`${className} modal`}>
                <Modal.Header closeButton>
                    <Modal.Title>TRANSFERÊNCIA</Modal.Title>
                </Modal.Header>
                <Form>
                    
                
                  <Modal.Body>
                        <Card>
                            <ListGroup>
                                Código:
                                <ListGroupItem variant="primary">9898</ListGroupItem>
                                Unidade do Leito:
                                <ListGroupItem variant="primary">98</ListGroupItem>
                                Setor:
                                <ListGroupItem variant="primary">Enfermaria</ListGroupItem>
                                Nome do Paciente:
                                <ListGroupItem variant="primary">Matheus Guimarães</ListGroupItem>
                            </ListGroup>
                        </Card>

                        <Card style={{marginTop:"20px"}}>  
                            <Form.Group controlId="formBasicEmail" style={{width:'50%'}}>
                                <Form.Label>Unidade:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                                <Form.Label>Setor:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                                <Form.Label>Leito:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                            </Form.Group>
                        </Card>

                    </Modal.Body>

                    <Modal.Footer>
                     <Button style={{backgroundColor:"#86b2f3", border:"none"}} type="submit">
                        Transferir
                    </Button>
                    
                    </Modal.Footer>
                   
                </Form>
            </Modal.Dialog>
        
    )
}

export default ModalTransferencia;