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
    return null;
  },
  clear() {
    localStorage.clear();
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
  },
  reducers: {
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
    loginFailed(state) {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { setFormValues, loginProgress, loginSuccess, loginFailed } =
  loginSlice.actions;

export default loginSlice.reducer;
