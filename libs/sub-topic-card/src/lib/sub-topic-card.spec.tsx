import { render } from '@testing-library/react';

import SubTopicCard from './sub-topic-card';

describe('SubTopicCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubTopicCard />);
    expect(baseElement).toBeTruthy();
  });
});
