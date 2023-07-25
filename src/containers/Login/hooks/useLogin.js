import { useDispatch, useSelector } from 'react-redux';
import {
  setFormValues,
  loginFailed,
  loginProgress,
  loginSuccess,
  setError,
} from '../../../redux/login/slice';
import { formatEmail, minPassword } from '../utils/validation';

import callApi from '@/utils/network';

function useLogin() {
  const login = useSelector((state) => state.login); // state -> formValues
  const dispatch = useDispatch(); // action -> setFormValues
  const handleSubmit = async (e) => {
    e.preventDefault();

    // do validation
    if (!formatEmail(login.formValues.email)) {
      return dispatch(
        setError({
          email: 'please type email correctly',
        })
      );
    }

    if (!minPassword(login.formValues.password, 6)) {
      return dispatch(
        setError({
          password: 'password min 6 characters',
        })
      );
    }

    // clear error
    dispatch(setError({}));

    try {
      dispatch(loginProgress());

      const response = await callApi({
        url: 'https://api-car-rental.binaracademy.org/customer/auth/login',
        method: 'post',
        data: {
          email: login.formValues.email,
          password: login.formValues.password,
        },
      });

      dispatch(loginSuccess(response.data));

      if (process.env.NODE_ENV !== 'test') {
        window.location.reload();
      }
    } catch (error) {
      dispatch(loginFailed(error?.response.data?.message));
    }
  };
  const handleChangeEmail = (value) => {
    dispatch(
      setFormValues({
        email: value,
        password: login.formValues.password,
      })
    );
  };
  const handleChangePassword = (value) => {
    dispatch(
      setFormValues({
        email: login.formValues.email,
        password: value,
      })
    );
  };
  return {
    login,
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
  };
}

export default useLogin;
