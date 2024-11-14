// External
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Internal
import SliceName from './slice.name';

const initialCommonState = {
  isAuthorized: false,
  accessToken: '',
  isLoading: false,
  heightOfKeyboard: 0,
  language: 'en',
};

const commonSlice = createSlice({
  name: SliceName.Common,
  initialState: initialCommonState,
  reducers: {
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHeightOfKeyboard: (state, action: PayloadAction<number>) => {
      state.heightOfKeyboard = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

const commonActions = commonSlice.actions;
export default commonSlice;
