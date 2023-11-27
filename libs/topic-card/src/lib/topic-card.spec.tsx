import { render } from '@testing-library/react';

import TopicCard from './topic-card';

describe('TopicCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopicCard />);
    expect(baseElement).toBeTruthy();
  });
});
