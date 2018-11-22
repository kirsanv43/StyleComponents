import { createAction } from 'redux-actions';

export const addRecord = createAction('TODO_ADD_RECORD')
export const swapRecords = createAction('TODO_SWAP_RECORDS')
export const removeRecord = createAction('TODO_REMOVE_RECORD')
