import React, { Component } from 'react';
import styled from 'styled-components';
import { Cell, CellStyle } from '../cell';
import { CloseIcon } from '../close';
import { RecordStyle, Content, ContentLabel, DeleteButton } from './styled';

export const Record = ({ label, text, onDelete, onDragStart, onDragOver }) => (
  <Cell
    borderStyle="solid 2px rgba(4,38,85,0.25)"
    backgroundColor="rgba(4,38,85,0.05)"
  >
    <RecordStyle>
      <Content>
        <ContentLabel>{label}</ContentLabel>
        <span> · </span>
        <span>{text}</span>
      </Content>
      <DeleteButton data-id={label} onClick={onDelete}>
        <CloseIcon width="8" height="8" />
      </DeleteButton>
    </RecordStyle>
  </Cell>
);
