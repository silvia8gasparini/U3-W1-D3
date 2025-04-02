import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { title, img } = this.props.book;
    const { selected } = this.state;

    return (
      <Card
        onClick={this.toggleSelected}
        style={{
          border: selected ? "3px solid red" : "1px solid lightgray",
          cursor: "pointer",
        }}
        className="mb-3"
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
