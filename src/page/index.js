import { connect } from 'react-redux';

import {
 addRecord,removeRecord,swapRecords
  } from '../actions';
import List from './list';



export default connect(
    state => ({
        records: state.records.records,
    }),
    {
        addRecord,removeRecord,swapRecords
    }
  )(List);