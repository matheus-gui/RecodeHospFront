import React, {useState, useRef, useEffect} from 'react';
import Page from '../../components/Page';
import {ListGroup, Card, Form, Button} from 'react-bootstrap';
import ModalTransferencia from '../ModalTransferencia'
import './Transf.css';
import api from '../../services/api';

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
  
  useEffect(() => {
    getUnidades();
  }, []);
  
  const [unidade, setUnidade] = useState([]);

  const getUnidades = () => {
    api.get('/unidade').then((response) => {
      const { data } = response;
      setUnidade(data);
    }).catch((error) => {
      console.log(error);
    });
  };


  useEffect(() => {
    getSetor();
  }, []);

  const [setor, setSetor] = useState([]);

  const getSetor = () => {
    api.get('/setor').then((response) => {
      const { data } = response;
      setSetor(data);
      console.log(data)
    }).catch((error) => {
      console.log(error);
    });
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
                                    {unidade.map((unidade, index) => (<option>
                                    {unidade.nome}   
                                    </option>))}
                                    
                                </Form.Control>
                                
                                <Form.Label>Setor:</Form.Label>
                                <Form.Control as="select">
                                    {setor.map((unidade, index) => (<option>
                                    {setor.nome}   
                                    </option>))}
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