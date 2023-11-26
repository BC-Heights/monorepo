import { render } from '@testing-library/react';

import MediumCard from './medium-card';

describe('MediumCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediumCard />);
    expect(baseElement).toBeTruthy();
  });
});
