import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Container, Draggable, AddBtn, Input } from './components';
import { createGlobalStyle } from 'styled-components';
import SFProRegular from './fonts/SFProDisplayRegular.otf';
import SFProSemibold from './fonts/SFProDisplaySemibold.otf';
import { Provider } from 'react-redux';
import store from './store';
import List from './page';

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
const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <List />
    </React.Fragment>
  </Provider>
);

export default hot(module)(App);
