import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

test('renders the homepage', () => {
  const { getByText } = render(<Home />);
  expect(getByText('REACT QUIZ')).toBeTruthy();
  expect(getByText('Start')).toBeTruthy();
});
