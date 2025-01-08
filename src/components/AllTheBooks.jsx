import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json"
import { Row } from "react-bootstrap";

class AllTheBooks extends Component {
    render() {
        return (
            <Row className=" justify-content-evenly">
            {
                fantasy.map((e) => {
                    return (
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={e.img} style={{height: '350px'}}/>
                            <Card.Body>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>
                                    {e.category}
                                </Card.Text>
                                <Button variant="primary">{e.price}€</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            </Row>
        );
    }
}

export default AllTheBooks;
