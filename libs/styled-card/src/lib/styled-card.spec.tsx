import { render } from '@testing-library/react';

import StyledCard from './styled-card';

describe('StyledCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledCard />);
    expect(baseElement).toBeTruthy();
  });
});
