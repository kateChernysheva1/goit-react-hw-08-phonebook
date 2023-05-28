import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const counterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [action.payload, ...state.contacts];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    filterContact: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(el => el.id !== action.payload),
      ];
    },
  },
});

export const { addContact, changeFilter, filterContact } = counterSlice.actions;

export default counterSlice.reducer;
