import React, { Component } from 'react';
import styled from 'styled-components';
import { CellStyle } from '../cell';
import { CloseIcon } from '../close';

const InputCellStyle = styled(CellStyle)`
  border: solid 2px rgba(4, 38, 85, 0.25);
  background: rgba(4, 38, 85, 0.05);
`;

const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 0 17px;
  font-size: 15px;
`;

export const Input = props => (
  <InputCellStyle>
    <InputStyle {...props} />
  </InputCellStyle>
);
