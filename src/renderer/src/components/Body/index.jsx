import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';


const BodyComponent=()=>{
    return(
        <Container fluid className="">
            
            <Row>
                <Col lg={4} className="rounded"  >
                        <Row className="mt-1 mb-1">
                            <Col > 
                               <Button variant="outline-primary" size="sm">Blouse</Button>
                            </Col>
                            <Col> 
                               <Button variant="outline-primary" size="sm">Sleeves</Button>
                            </Col>
                            <Col> 
                               <Button variant="outline-primary" size="sm">Necks</Button>
                            </Col>
                            <Col> 
                               <Button variant="outline-primary" size="sm">Collars</Button>
                            </Col>
                            <Col> 
                               <Button variant="outline-primary" size="sm">BackDrops</Button>
                            </Col>
                        </Row>
                            <Row className="bg-dark rounded p-2"> 
                            <Col className="mt-2">
                               <Button variant="outline-light mx-1" size="sm">All</Button>
                               <Button variant="outline-light mx-1" size="sm">3 Dart</Button>
                               <Button variant="outline-light mx-1" size="sm">4 Dart</Button>
                               <Button variant="outline-light mx-1" size="sm">Princess</Button>
                               <Button variant="outline-light mx-1" size="sm">Katori</Button>
                               <Button variant="outline-light mx-1" size="sm">Sabyasachi</Button>
                            </Col> 
                                <Row className="mt-2"> 
                                    <Col lg={8} sm={12} md={6}>
                                        <Form.Control
                                                type="password"
                                                id="inputPassword5"
                                                aria-describedby="passwordHelpBlock"
                                            />
                                        </Col >
                                        <Col lg={4} sm={12} md={6} className="text-white mt-1">
                                        Total Items
                                        </Col>
                                    </Row>
                                    
                                    <Col className="d-flex justify-content-center flex-wrap mt-2">
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                        <button className="rounded" style={{height:"100px",width:"100px"}}></button>
                                    </Col>
                                    
                                    
                            </Row>

                
                </Col>
                
                <Col lg={8} className="bg-white rounded" style={{height:"100%"}}>
                   <h3>Content</h3>
                </Col>
            </Row>

        </Container>
    )
}
export default BodyComponent