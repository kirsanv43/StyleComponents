import { handleActions } from 'redux-actions';
import { addRecord, removeRecord, swapRecords } from '../actions';
import { generateGuid } from './utils';

const records = handleActions(
  {
    [addRecord.toString()]: (state, action) => {
      return {...state, records: [...state.records, {id: generateGuid(), ...action.payload}] };
    },
    [swapRecords.toString()]: (state, action) => {
      // 
      // const newBook = action.payload;
      // const bookIndex = records.findIndex(book => book.id === newBook.id);
      // records[bookIndex] = newBook;
      // return sortSyncAndReturn(state, records);
      const records = [...state.records];
      const {currentIndex, targetIndex} = action.payload;
      const swap = records[currentIndex];
      records[currentIndex] = records[targetIndex];
      records[targetIndex] = swap;
      return {...state, records}
    },
    [removeRecord.toString()]: (state, action) => {
      const records = [...state.records];
      const id = action.payload;
      const recordIndex = state.records.findIndex(record => record.id === id);
      records.splice(recordIndex, 1);
      return {...state, records}
    },
  },
  { records: [] }
);

export default records;
