import React, { Component } from 'react';
import styled from 'styled-components';
import { Cell, CellStyle } from '../cell';
import { CloseIcon } from '../close';
import { RecordStyle, Content, ContentLabel, DeleteButton } from './styled';

export const Record = ({ record, onDelete, onDragStart, onDragOver }) => (
  <Cell
    borderStyle="solid 2px rgba(4,38,85,0.25)"
    backgroundColor="rgba(4,38,85,0.05)"
  >
    <RecordStyle>
      <Content>
        <ContentLabel>{record.firstPart}</ContentLabel>
        <span> · </span>
        <span>{record.secondPart}</span>
      </Content>
      <DeleteButton data-id={record.id} onClick={onDelete}>
        <CloseIcon width="8" height="8" />
      </DeleteButton>
    </RecordStyle>
  </Cell>
);
