import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FieldGroup } from '../../types/rule';
import { QueryBuilder } from '../../builder/index';

const initialState = '';

const queryState = createSlice({
  name: 'query',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<FieldGroup>) => {
      state = new QueryBuilder(action.payload).getQueryString;
      return state;
    },
  },
});

export const { change } = queryState.actions;
export default queryState.reducer;
