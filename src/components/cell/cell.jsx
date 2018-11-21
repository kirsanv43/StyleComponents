import React, { Component } from 'react';
import styled from 'styled-components';

export const CellStyle = styled.div`
  margin-top: 17px;
  width: 314px;
  height: 42px;
  border: ${props => props.borderStyle};
  background-color: ${props => props.backgroundColor};
  font-family: SFProRegular;
  &:hover {
    cursor: ${props => (props.hoverable ? 'pointer' : 'default')};
  }
`;

export const Cell = props => <CellStyle {...props} />;
