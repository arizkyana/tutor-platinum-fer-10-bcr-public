import { configureStore, combineReducers } from '@reduxjs/toolkit';

// app reducers
import loginReducer from './login/slice';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default configureStore({
  reducer: rootReducer,
});
