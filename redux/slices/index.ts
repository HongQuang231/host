import {combineReducers} from '@reduxjs/toolkit';
import commonSlice from './common.slice';
import accountSlice from './account.slice';

const appReducer = combineReducers({
  common: commonSlice.reducer,
  account: accountSlice.reducer,
});

const reducer = (state: any, action: any) => {
  if (action.type === 'LOG_OUT') {
    delete state?.template;
    return appReducer(state, action);
  }
  return appReducer(state, action);
};

export default reducer;

export const commonActions = commonSlice.actions;
export const accountActions = accountSlice.actions;
