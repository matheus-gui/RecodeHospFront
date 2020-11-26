import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap';
import Page from '../../components/Page';
import {Link} from 'react-router-dom';

const ModalTransferencia = () => {
    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Form>
                    
                
                  <Modal.Body>  
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Digite o seu e-mail corporativo." />
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite a sua senha." />
                    </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                     <Button style={{backgroundColor:"#86b2f3", border:"none"}} type="submit">
                        Login
                    </Button>
                    <Form.Group>
                        <Link to="/signup">Cadastre-se</Link>
                    </Form.Group>
                    </Modal.Footer>
                   
                </Form>
            </Modal.Dialog>
        </Page>
    )
}

export default ModalTransferencia;