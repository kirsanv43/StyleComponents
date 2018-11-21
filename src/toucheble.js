import React, { PureComponent } from 'react';
import { Draggable } from './components';

const marginTop = 40;
class Toucheble extends PureComponent {
  render() {
      console.log('Toucheble rerender')
    if (this.props.touch) {
      return (
        <Draggable
          absolute
          top={this.props.top}
          ref={this.props.record}
          label={this.props.touchedItem}
          onDelete={this.handleDelete}
          onTouchEnd={this.onTouchEnd}
          onTouchMove={this.onTouchMove}
          onDragStart={this.onDragStart}
          onDragOver={this.onDragOver}
          text={this.props.touchedItem}
        />
      );
    }
    return null;
  }
}
export default Toucheble;
