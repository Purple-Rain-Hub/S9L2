import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const isSelected = this.state.selected;
    return (
      <>
        {isSelected ? (
          <Card
            style={{ width: "18rem", border: "2px solid red"}}
            onClick={() =>
              this.setState({
                selected: true,
              })
            }
          >
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ height: "350px" }}
            />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.category}</Card.Text>
              <Button variant="primary">{this.props.book.price}€</Button>
            </Card.Body>
          </Card>
        ) : (
          <Card
            style={{ width: "18rem" }}
            onClick={() =>
              this.setState({
                selected: true,
              })
            }
          >
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ height: "350px" }}
            />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.category}</Card.Text>
              <Button variant="primary">{this.props.book.price}€</Button>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}

export default SingleBook;
