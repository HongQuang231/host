// External
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Internal
import SliceName from './slice.name';

const initialAccountState = {
  dataAccount: {} as any,
};

const accountSlice = createSlice({
  name: SliceName.Account,
  initialState: initialAccountState,
  reducers: {
    setDataAccountSuccess: (state, action: PayloadAction<any>) => {
      state.dataAccount = action.payload;
    },
    setDataAccountFail: state => {
      state.dataAccount = {};
    },
    fetchAccount: state => {},
    clearAccount: state => {
      state.dataAccount = {};
    },
  },
});

const accountActions = accountSlice.actions;
export default accountSlice;
