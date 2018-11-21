import React, { Component } from 'react';
import styled from 'styled-components';
import { Cell, CellStyle } from '../cell';
import { CloseIcon } from '../close';

const InputStyle = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0 17px;
    font-size: 15px;
`

export const Input = props => (
  <Cell
    borderStyle="solid 2px rgba(4,38,85,0.25)"
    backgroundColor="rgba(4,38,85,0.05)"
  >
    <InputStyle {...props} />
  </Cell>
);
