import React from 'react'
import Page from '../../components/Page'
import {Modal, Button, Form} from 'react-bootstrap';

const Recepcao = () => {
    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>INTERNAÇÃO</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <p>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite o seu nome" />
                            </Form.Group>
                        </p>
                        <p>
                            <Form.Group controlId="formBasicEmail" style={{width:'50%'}}>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="number" placeholder="Digite o seu CPF" />
                            </Form.Group>
                        </p>
                        <p>
                            <Form.Group controlId="formBasicEmail" style={{width:'50%'}}>
                                <Form.Label>Data de Internação</Form.Label>
                                <Form.Control type="date" placeholder="Digite o seu CPF" />
                            </Form.Group>
                        </p>
                        <p>
                            <Form.Group controlId="formBasicEmail" style={{width:'50%'}}>
                                <Form.Label>Leito</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </p>
                        {['radio'].map((type) => (
                        <p key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Masculino" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Feminino" type={type} id={`inline-${type}-2`} />
                        </p>
                        ))}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" type="submit">Cadastrar</Button>
                        <Button variant="danger" type="reset">Apagar</Button>
                        
                    </Modal.Footer>
                    </Form>
            </Modal.Dialog>
        </Page>
    )
}

export default Recepcao;
