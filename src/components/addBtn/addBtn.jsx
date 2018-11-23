import React, { Component } from 'react';
import styled from 'styled-components';
import { CellStyle } from '../cell';
import { CloseIcon } from '../close';

const AddBtnStyle = styled(CellStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 2px rgba(187, 193, 199, 0.25);
  background: rgba(247, 247, 247, 0.4);
`;

export const AddBtn = props => <AddBtnStyle hoverable {...props} />;
