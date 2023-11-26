import { render } from '@testing-library/react';

import BigCard from './big-card';

describe('BigCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BigCard />);
    expect(baseElement).toBeTruthy();
  });
});
