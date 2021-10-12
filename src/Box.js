import React, { Component } from 'react';
import './Box.css';
import { choice } from './Helpers';

class Box extends Component {
  constructor(props) {
    super(props);
    // pick a color randomly
    this.state = { color: choice(this.props.colors) };
    // bind the handleClick method context for THIS
    this.handleClick = this.handleClick.bind(this);

  }
  pickColor() {
    let newColor;
    do {
      // pick new color randomly
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color) // repeat if same color as before
    this.setState({ color: newColor });
  }
  handleClick() {
    this.pickColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}>
      </div>
    )
  }
}

export default Box;