import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};
/*
const addContact = createAction('addContact');
const changeFilter = createAction('changeFilter');
const filterContact = createAction('filterContact');

const counterSlice = createReducer(initialState, {
  [addContact]: (state, action) => {
    return {
      ...state,
      contacts: [action.payload, ...state.contacts],
    };
  },
  [changeFilter]: (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  },
  [filterContact]: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.filter(el => el.id !== action.payload),
    };
  },
});*/

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

//export { addContact, changeFilter, filterContact };

export default counterSlice.reducer;
//export default counterSlice;
