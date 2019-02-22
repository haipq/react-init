import * as types from '../constants/action-types';
let id = 0;
export const execAction1 = (data) => ({
    type: types.ACTION_1,
    id: id++,
    data,
  })
  