import { render } from '@testing-library/react';
import HomePage from '../pages';

describe('testing root', () => {
  test('success render', () => {
    render(<HomePage />);
    expect(true).toBeTruthy();
  });
  test('get button by testid button', () => {
    const { getByTestId } = render(<HomePage />);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });
  test('get button by testid button with findByTestId', async () => {
    const { findByTestId } = render(<HomePage />);
    const button = await findByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
