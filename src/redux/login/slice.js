import { createSlice } from '@reduxjs/toolkit';

const auth = {
  setUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  },
  getUser() {
    if (typeof window !== 'undefined') {
      const storageUser = localStorage.getItem('user');
      return JSON.parse(storageUser);
    }
    return {};
  },
  clear() {
    localStorage.clear();
    window.location.reload();
  },
};

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    user: auth.getUser(),
    formValues: {
      email: null,
      password: null,
    },
    error: {
      all: null,
      email: null,
      password: null,
    },
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setFormValues(state, action) {
      state.formValues = action.payload;
    },
    loginProgress(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      auth.setUser(action.payload);
    },
    loginFailed(state, action) {
      state.loading = false;
      state.user = null;
      state.error.all = action.payload;
    },
    logout(state) {
      state.user = null;
      auth.clear();
    },
  },
});

export const {
  setFormValues,
  loginProgress,
  loginSuccess,
  loginFailed,
  logout,
  setError,
} = loginSlice.actions;

export default loginSlice.reducer;
