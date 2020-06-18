import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

const longTitleTaskData = {
  ...taskData,
  title: `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`,
};

const pinnedTaskData = {
  ...taskData,
  state: 'TASK_PINNED',
};

const archivedTaskData = {
  ...taskData,
  state: 'TASK_ARCHIVED',
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task task={object('task', taskData)} {...actionsData} />;

export const LongTitle = () => <Task task={longTitleTaskData} {...actionsData} />;

export const Pinned = () => <Task task={pinnedTaskData} {...actionsData} />;

export const Archived = () => <Task task={archivedTaskData} {...actionsData} />;
