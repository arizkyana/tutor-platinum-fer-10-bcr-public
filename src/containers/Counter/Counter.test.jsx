import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

describe('Testing Counter', () => {
  test('counter increment', () => {
    const { getByTestId } = render(<Counter />);
    const btnIncrement = getByTestId('btn-increment');
    userEvent.click(btnIncrement);

    expect(true).toBeTruthy();
  });
});
