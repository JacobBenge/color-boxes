import React, { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css';

class BoxesContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: ["teal", "blue", "darkblue", "aquamarine", "lightblue", "aqua", "cornflowerblue", "cyan", "darkcyan"]
  };
  render() {
    // generate Boxes as restricted by numBoxes defaultProp
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return (
      <div className="BoxesContainer">
        {boxes}
      </div>
    );
  }
}

export default BoxesContainer;