import { render } from '@testing-library/react';

import Cards from './cards';

describe('Cards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cards post={{
      __typename: undefined,
      title: undefined,
      id: '',
      date: undefined,
      modifiedGmt: undefined,
      excerpt: undefined,
      slug: undefined,
      content: undefined,
      authors: undefined,
      featuredImage: undefined,
      categories: undefined
    }} imgSize={''} imgW={0} imgH={0} />);
    expect(baseElement).toBeTruthy();
  });
});
