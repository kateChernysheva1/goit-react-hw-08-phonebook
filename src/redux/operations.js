const { createAsyncThunk } = require('@reduxjs/toolkit');

const {
  fetchContacts,
  addContact,
  deleteContact,
  registration,
  login,
  userCurrent,
  logout,
} = require('services/api');

export const getContacts = createAsyncThunk('contacts/fetchAll', fetchContacts);

export const postContact = createAsyncThunk('contacts/addContact', addContact);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  deleteContact
);

export const userSingUp = createAsyncThunk('users/signup', registration);
export const userLogin = createAsyncThunk('users/login', login);
export const currentUser = createAsyncThunk('users/current', userCurrent);
export const logoutUser = createAsyncThunk('users/logout', logout);
