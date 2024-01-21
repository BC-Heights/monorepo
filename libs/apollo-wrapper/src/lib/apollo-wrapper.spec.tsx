import { render } from '@testing-library/react';

import ApolloWrapper from './apollo-wrapper';

describe('ApolloWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApolloWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
