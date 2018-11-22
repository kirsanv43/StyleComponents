import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Container, Draggable, AddBtn, Input } from '../components';

const Records = styled.div`
  position: relative;
  overscroll-behavior: contain;
`;

const marginTop = 40;
class List extends Component {
  constructor(props) {
    super(props);
    this.record = React.createRef();
    this.container = React.createRef();
  }

  state = {
    input: '',
    touchedItem: null
  };

  handleAdd = () => {
    const [firstPart, secondPart] = this.state.input
      .replace(' ', '{replace}')
      .split('{replace}');

    this.props.addRecord({ firstPart, secondPart });
    this.setState({ input: '' });
  };

  handleDelete = e => {
    this.setState({
      records: this.props.records.filter(
        item => item !== e.currentTarget.dataset.id
      )
    });
  };

  onDragStart = ev => {
    this.setState({
      touchedItem: this.props.records.find(
        item => item.id === ev.currentTarget.dataset.id
      )
    });
  };

  onDragOver = ev => {
    const overId = ev.currentTarget.dataset.id;
    const id = this.state.touchedItem.id;
    if (overId === id) {
      return;
    }
    const overItemIndex = this.props.records.findIndex(
      item => item.id === overId
    );
    const dragItemIndex = this.props.records.findIndex(item => item.id === id);
    this.props.swapRecords({
      currentIndex: dragItemIndex,
      targetIndex: overItemIndex
    });
    ev.preventDefault();
  };

  onDrop = () => {
    this.setState({ touchedItem: null });
  };

  onTouchStart = e => {
    if (this.state.touchedItem) {
      return;
    }
    console.log(e.currentTarget.dataset.id);

    const rect = e.currentTarget.getBoundingClientRect();
    const style = window.getComputedStyle(e.currentTarget);
    const offset = e.touches[0].clientY - rect.top;
    const dragItemIndex = this.props.records.findIndex(
      item => item.id === e.currentTarget.dataset.id
    );

    this.setState({
      touch: true,
      offset,
      top: e.touches[0].clientY - offset - marginTop,
      touchedItem: this.props.records[dragItemIndex]
    });
  };

  onTouchEnd = e => {
    this.setState({
      touch: false,
      touchedItem: null
    });
  };

  onTouchMove = e => {
    const record = ReactDOM.findDOMNode(this.record.current);
    if (!record) {
      return;
    }
    const { height: recordHeight } = record.getBoundingClientRect();
    const { height } = ReactDOM.findDOMNode(
      this.container.current
    ).getBoundingClientRect();
    const dragItemIndex = this.props.records.findIndex(
      item => item.id === e.currentTarget.dataset.id
    );
    const { records } = this.props;
    const position = e.touches[0].clientY - this.state.offset - marginTop;
    const index = Math.floor(e.touches[0].clientY / recordHeight);
    if (dragItemIndex !== index && index < records.length && index >= 0) {
      console.log({
        currentIndex: dragItemIndex,
        targetIndex: index
      });
      this.props.swapRecords({
        currentIndex: dragItemIndex,
        targetIndex: index
      });
    }
    record.style.top = `${position}px`;
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    const { touchedItem, touch } = this.state;
    return (
      <Container ref={this.container}>
        <Records>
          {this.props.records.map((item, index) => (
            <Draggable
              key={item.id}
              index={index}
              hidden={this.state.touch && item.id === touchedItem.id}
              onDelete={this.handleDelete}
              onDrop={this.onDrop}
              onTouchStart={(!this.state.touch && this.onTouchStart) || null}
              onTouchEnd={this.onTouchEnd}
              onDragStart={this.onDragStart}
              onTouchMove={this.onTouchMove}
              onDragOver={this.onDragOver}
              record={item}
            />
          ))}
          {touch && (
            <Draggable
              absolute
              top={this.state.top}
              ref={this.record}
              onDelete={this.handleDelete}
              onTouchEnd={this.onTouchEnd}
              onTouchMove={this.onTouchMove}
              onDragStart={this.onDragStart}
              onDragOver={this.onDragOver}
              record={touchedItem}
            />
          )}
        </Records>

        <AddBtn onClick={this.handleAdd}>Add a statement +</AddBtn>
        <Input value={this.state.input} onInput={this.handleChange} />
      </Container>
    );
  }
}
export default List;
