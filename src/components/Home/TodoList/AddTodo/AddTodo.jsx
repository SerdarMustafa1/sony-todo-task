import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };

    this.changeTaskText = this.changeTaskText.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  changeTaskText(e) {
    e.preventDefault(); // optional, not necessary in this case, but for consistency

    this.setState({ task: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') this.submitTask(e);
  }

  submitTask(e) {
    e.preventDefault(); // optional, not necessary in this case, but for consistency

    this.setState({ task: '' });
    this.props.addTodo(this.state.task);
  }

  render() {
    return (
      <div className="form-group row">
        <Form.Row>
          <Col xs={12} md={12}>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                onChange={this.changeTaskText}
                onKeyPress={this.handleKeyPress}
                value={this.state.task}
                placeholder="Add your todo..."
              />
            </Form.Group>
          </Col>
        </Form.Row>
        {this.state.task ? (
          <small className="form-text">Press enter to submit todo</small>
        ) : null}
      </div>
    );
  }
}

export default AddTodo;
