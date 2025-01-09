import { Component } from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    let filteredBooks = this.props.choosenBooks.filter((e) =>
      e.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cerca Libri</Form.Label>
            <Form.Control
              type="text"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>

        <Row className=" justify-content-evenly">
          {filteredBooks.map((e) => {
            return <SingleBook book={e} key={e.asin} />;
          })}
        </Row>
      </>
    );
  }
}

export default BookList;
