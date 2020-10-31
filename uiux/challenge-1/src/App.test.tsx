import { render } from '@testing-library/react';
import React from 'react';
import { App } from './App';
import { AppProvider } from './AppProvider';

test('App renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <App />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
