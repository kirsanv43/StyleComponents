import React, { Component } from 'react';
import { CloseIcon } from '../close';
import { RecordStyle, Content, ContentLabel, DeleteButton } from './styled';

export const Record = ({ record, onDelete, onDragStart, onDragOver }) => (
  <RecordStyle>
    <Content>
      <ContentLabel>{record.firstPart}</ContentLabel>
      {record.secondPart && <span> · </span>}
      <span>{record.secondPart}</span>
    </Content>
    <DeleteButton data-id={record.id} onClick={onDelete}>
      <CloseIcon width="8" height="8" />
    </DeleteButton>
  </RecordStyle>
);
