import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentUser, logoutUser, userLogin, userSingUp } from './operations';

const initialState = {
  token: null,
  isAuth: false,
  isFirstLoading: false,
  email: null,
  isLoading: false,
};

const loginSuccess = (state, action) => {
  state.isLoading = false;
  state.isAuth = true;
  state.token = action.payload.token;
  state.email = action.payload.user.email;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(userSingUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(userSingUp.rejected, state => {
        state.isLoading = false;
      })
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogin.rejected, state => {
        state.isLoading = false;
      })
      .addCase(currentUser.pending, state => {
        state.isFirstLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.email = action.payload.email;
        state.isFirstLoading = false;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isFirstLoading = false;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isAuth = false;
        state.email = null;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(userSingUp.fulfilled, userLogin.fulfilled),
        loginSuccess
      );
  },
});

export default authSlice.reducer;
