/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    openProfileSavedModal: (state) => {
      state.isOpen = true;
    },
    closeProfileSavedModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openProfileSavedModal, closeProfileSavedModal } = profileSlice.actions;

export default profileSlice.reducer;
