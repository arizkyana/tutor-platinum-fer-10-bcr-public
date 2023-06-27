import { createSlice } from '@reduxjs/toolkit';

// utils: auth
const auth = {
  setUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  },
  getUser() {
    if (typeof window !== 'undefined') {
      const storageUser = localStorage.getItem('user');
      return JSON.parse(storageUser);
    }
    return null;
  },
  clearUser() {
    localStorage.clear();
    window.location.reload();
  },
};

const initialState = {
  loading: false,
  user: auth.getUser(),
  formValues: {
    email: null,
    password: null,
  },
  errorMessage: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setFormValues(state, action) {
      state.formValues = action.payload;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      auth.setUser(action.payload);
    },
    loginFailed(state) {
      state.loading = false;
      state.user = null;
    },
    loginProgress(state) {
      state.loading = true;
    },
    logout(state) {
      state.user = null;
      auth.clearUser();
    },
  },
});

export const {
  loginSuccess,
  loginFailed,
  loginProgress,
  setFormValues,
  setErrorMessage,
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;
