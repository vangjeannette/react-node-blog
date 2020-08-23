import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AddArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      imageUrl: '',
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleImageUrlChange = (e) => {
    this.setState({ imageUrl: e.target.value });
  };

  handleSubmit = async (event) => {
    const token = localStorage.getItem('token');
    console.log({ ...this.state, token })
    event.preventDefault();
    try {
      const response = await axios.post('/article', { ...this.state, token });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Form.Group controlId="AddArticleTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your title"
            onChange={this.handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="AddArticleText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your text here"
            onChange={this.handleTextChange}
          />
        </Form.Group>
        <Form.Group controlId="AddArticleImageUrl">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your image url here"
            onChange={this.handleImageUrlChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default AddArticleComponent;
