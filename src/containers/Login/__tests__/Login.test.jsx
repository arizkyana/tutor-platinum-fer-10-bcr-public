import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// load redux
import { Provider } from 'react-redux';
import store from '@/redux/store';

import Login from '../';

/**
 * 4.1 - learn to use selector getByTestId
 * generate test cases for login
 */

/**
 * 4.2 - learn to use mock feature
 * mock library axios
 */

import callApi from '@/utils/network';

jest.mock('../../../utils/network');

const callApiMock = callApi;

describe('Unit Test: Login', () => {
  test('succesful render login container', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const getTitle = getByTestId('title');
    expect(getTitle).toBeInTheDocument();
  });
  test('type a value into the input email: customer@bcr.io', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const inputEmail = getByTestId('input-email');
    await userEvent.type(inputEmail, 'customer@bcr.io');
    expect(inputEmail).toHaveValue('customer@bcr.io');
  });
  test('type a value into the input password: 123456', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const inputPassword = getByTestId('input-password');
    await userEvent.type(inputPassword, '123456');
    expect(inputPassword).toHaveValue('123456');
  });
  test('submit email and password: success', async () => {
    callApiMock.mockReturnValue({
      data: {
        email: 'customer@bcr.io',
        role: 'Customer',
        access_token: 'contoh-token',
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const formLogin = getByTestId('form-login');
    const buttonLogin = getByTestId('button-login');

    const inputPassword = getByTestId('input-password');
    await userEvent.type(inputPassword, '123456');

    const inputEmail = getByTestId('input-email');
    await userEvent.type(inputEmail, 'customer@bcr.io');

    await userEvent.click(buttonLogin);

    expect(formLogin).toBeInTheDocument();
    expect(formLogin).toHaveFormValues({
      email: 'customer@bcr.io',
      password: '123456',
    });
  });
  test('submit email and password: failed email format', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const formLogin = getByTestId('form-login');
    const buttonLogin = getByTestId('button-login');

    const inputPassword = getByTestId('input-password');
    await userEvent.type(inputPassword, '123456');

    const inputEmail = getByTestId('input-email');
    await userEvent.type(inputEmail, 'customer');

    await userEvent.click(buttonLogin);

    expect(formLogin).toBeInTheDocument();

    const messageErrors = getAllByTestId('message-error');
    expect(messageErrors[0]).toHaveTextContent('please type email correctly');
  });
  test('submit email and password: failed password min 6 chars', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const formLogin = getByTestId('form-login');
    const buttonLogin = getByTestId('button-login');

    const inputPassword = getByTestId('input-password');
    await userEvent.type(inputPassword, '123');

    const inputEmail = getByTestId('input-email');
    await userEvent.type(inputEmail, 'customer@bcr.io');

    await userEvent.click(buttonLogin);

    expect(formLogin).toBeInTheDocument();

    const messageErrors = getAllByTestId('message-error');
    expect(messageErrors[0]).toHaveTextContent('password min 6 characters');
  });
  test('submit email and password: success but email not found', async () => {
    callApiMock.mockRejectedValue({
      response: {
        status: 404,
        data: {
          name: 'Not Found',
          message: 'Email not found.',
        },
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const formLogin = getByTestId('form-login');
    const buttonLogin = getByTestId('button-login');

    const inputPassword = getByTestId('input-password');
    await userEvent.type(inputPassword, '123456');

    const inputEmail = getByTestId('input-email');
    await userEvent.type(inputEmail, 'customer@bcr.io');

    await userEvent.click(buttonLogin);

    expect(formLogin).toBeInTheDocument();
    expect(formLogin).toHaveFormValues({
      email: 'customer@bcr.io',
      password: '123456',
    });

    const alertError = getByTestId('alert-error');
    expect(alertError).toBeInTheDocument();
    expect(alertError).toHaveTextContent('Email not found.');
  });
});
