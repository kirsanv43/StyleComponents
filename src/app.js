import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Container, Draggable, AddBtn, Input } from './components';
import { createGlobalStyle } from 'styled-components';
import SFProRegular from './fonts/SFProDisplayRegular.otf';
import SFProSemibold from './fonts/SFProDisplaySemibold.otf';
import Toucheble from './toucheble';

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
    font-family: SFProRegular;
    src: url('${SFProRegular}') format('opentype');
    }
    @font-face {
        font-family: SFProSemibold;
        src: url('${SFProSemibold}') format('opentype');
    }
  }
`;
const marginTop = 40;
class App extends Component {
  constructor(props) {
    super(props);
    this.record = React.createRef();
    this.container = React.createRef();
  }

  state = {
    items: [],
    input: ''
  };

  handleAdd = () => {
    const items = [...this.state.items];
    items.push(this.state.input);
    this.setState({ items, input: '' });
  };

  handleDelete = e => {
    this.setState({
      items: this.state.items.filter(
        item => item !== e.currentTarget.dataset.id
      )
    });
  };

  onDragStart = ev => {
    this.setState({ dragId: ev.currentTarget.dataset.id });
  };

  onDragOver = ev => {
    const overId = ev.currentTarget.dataset.id;
    const id = this.state.dragId;
    if (overId === id) {
      return;
    }
    const overItemIndex = this.state.items.findIndex(item => item === overId);
    const dragItemIndex = this.state.items.findIndex(item => item === id);

    this.swapItems(dragItemIndex, overItemIndex);
    ev.preventDefault();
  };

  onDrop = () => {
    console.log('onDragEnd');
    this.setState({ dragId: null });
  };

  swapItems = (firstIndex, nextIndex) => {
    const items = [...this.state.items];
    const tmp = items[firstIndex];
    items[firstIndex] = items[nextIndex];
    items[nextIndex] = tmp;
    this.setState({
      items,
      index: nextIndex
    });
  };

  onTouchStart = e => {
    if (this.state.touch) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const style = window.getComputedStyle(e.currentTarget);
    const offset = e.touches[0].clientY - rect.top;
    const dragItemIndex = this.state.items.findIndex(
      item => item === e.currentTarget.dataset.id
    );
    this.setState({
      touch: true,
      index: dragItemIndex,
      offset,
      top: e.touches[0].clientY - offset - marginTop,
      touchedItem: this.state.items[dragItemIndex],
      dragId: e.currentTarget.dataset.id
    });
  };

  onTouchEnd = e => {
    console.log('onTouchEnd');
    this.setState({
      touch: false,
      touchedItem: null,
      dragId: null
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
    const { index: dragItemIndex, items } = this.state;
    const position = e.touches[0].clientY - this.state.offset - marginTop;
    const index = Math.floor(e.touches[0].clientY / recordHeight);
    console.log(e.touches[0].clientY / recordHeight);
    if (dragItemIndex !== index && index < items.length && index >= 0) {
      this.swapItems(dragItemIndex, index);
    }
    record.style.top = `${position}px`;
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container ref={this.container}>
          <div style={{ position: 'relative', overscrollBehavior: 'contain' }}>
            {this.state.items.map((item, index) => (
              <Draggable
                key={item}
                index={index}
                label={item}
                hidden={this.state.touch && item === this.state.dragId}
                onDelete={this.handleDelete}
                onDrop={this.onDrop}
                onTouchStart={(!this.state.touch && this.onTouchStart) || null}
                onTouchEnd={this.onTouchEnd}
                onDragStart={this.onDragStart}
                onTouchMove={this.onTouchMove}
                onDragOver={this.onDragOver}
                text={item}
              />
            ))}
            {this.state.touch && (
              <Draggable
                absolute
                top={this.state.top}
                ref={this.record}
                label={this.state.touchedItem}
                onDelete={this.handleDelete}
                onTouchEnd={this.onTouchEnd}
                onTouchMove={this.onTouchMove}
                onDragStart={this.onDragStart}
                onDragOver={this.onDragOver}
                text={this.state.touchedItem}
              />
            )}
          </div>

          <AddBtn onClick={this.handleAdd}>Add a statement +</AddBtn>
          <Input value={this.state.input} onInput={this.handleChange} />
        </Container>
      </React.Fragment>
    );
  }
}
export default hot(module)(App);
