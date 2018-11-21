import React, { Component } from 'react';
import styled from 'styled-components';
import { Cell, CellStyle } from '../cell';
import { CloseIcon } from '../close';

const AddBtnStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AddBtn = props => (
  <Cell
    hoverable
    borderStyle="dashed 2px rgba(187,193,199,0.25)"
    backgroundColor="rgba(247,247,247,0.4)"
  >
    <AddBtnStyle {...props} />
  </Cell>
);
