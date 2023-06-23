import { render } from '@testing-library/react';

function Sample() {
  return <div>Ini isi dari komponen Sample</div>;
}

describe('Belajar Unit Testing', () => {
  test('render komponen Sample', () => {
    const { getByText } = render(<Sample />);
    const textSample = getByText(/Ini isi dari komponen Sample/);
    expect(textSample).toBeInTheDocument();
  });
});
