import React from 'react';
import { render } from '@testing-library/react';

import { WithPinnedTasks } from './TaskList.stories';

describe('TaskList', () => {
  it('renders pinned tasks at the start of the list', () => {
    const screen = render(<WithPinnedTasks />);
    const tasks = screen.getAllByRole('textbox');
    expect(tasks[0].value).toMatch(/pinned/i);
  });
});
