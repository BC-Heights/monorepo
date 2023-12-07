import { render } from '@testing-library/react';

import Crossword from './crossword';

describe('Crossword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Crossword />);
    expect(baseElement).toBeTruthy();
  });
});
