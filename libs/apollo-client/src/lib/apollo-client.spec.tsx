import { render } from '@testing-library/react';

import { ApolloClient } from './apollo-client';
import React = require('react');

describe('apolloClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApolloClient />);
    expect(baseElement).toBeTruthy();
  });
});


