import React, {useState, useRef} from 'react';
import Page from '../../components/Page';
import {ListGroup, Card, Form, Button} from 'react-bootstrap';
import ModalTransferencia from '../ModalTransferencia'
import './Transf.css';

const Transferencia = () => {
    const [dropdown, setDropdown] = useState(""); 
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log("show");
    //se clicar no botão, modal aparece
    setDropdown("show");
    setTimeout(() => {
        document.body.addEventListener("click", closeDropdown);
    });
    
  }

  const closeDropdown = event => {
    event.stopPropagation(); //impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) { //se clicar fora do modal, ele DESaparece
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };
    
    return (
        

        <Page >
            
            <Card style={{width:'50%', marginLeft:"25%"}}>
                <Card.Header>PACIENTES INTERNADOS:</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{width:'50%'}}>
                                <Form.Label>Unidade:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                                <Form.Label>Setor:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                            </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Body>
                    <ModalTransferencia className={dropdown} modalRef={modalRef}/>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action onClick={toggleDropdown}>
                            This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={toggleDropdown}>
                            This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={toggleDropdown}>
                            This one is a button
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Card.Body>
                <Card.Footer><Button variant="danger" style={{float:"right"}}>Voltar</Button></Card.Footer>
            </Card>
            
        </Page>
    );
}

export default Transferencia;