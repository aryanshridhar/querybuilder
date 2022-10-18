import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from './slices/rule';
import queryReducer from './slices/query';

const store = configureStore({
  reducer: {
    query: queryReducer,
    rule: fieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
