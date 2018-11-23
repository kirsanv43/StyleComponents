import styled from 'styled-components';
import { CellStyle } from '../cell';

export const RecordStyle = styled(CellStyle)`
  display: flex;
  justify-content: space-between;
  width: 294px;
  padding: 0 10px;
  align-items: center;
  border: solid 2px rgba(4,38,85,0.25);
  background: rgba(4,38,85,0.05);
`;

export const DeleteButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  padding: 0;
  background: #607898;
  outline: none;
  svg {
    fill: #bcc6d4;
  }

  &:hover {
    cursor: pointer;
    background: #edcdbd;
    svg {
      fill: white;
    }
  }
`;
export const Content = styled.div`
  line-height: 42px;
  width: 272px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentLabel = styled.span`
  font-family: SFProSemibold;
`;
