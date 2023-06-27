import { configureStore, combineReducers } from '@reduxjs/toolkit';

import loginReducer from './login/slice';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default configureStore({
  reducer: rootReducer,
});
