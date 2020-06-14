import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
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

export const Default = () => <Task task={taskData} {...actionsData} />;

export const Pinned = () => <Task task={pinnedTaskData} {...actionsData} />;

export const Archived = () => <Task task={archivedTaskData} {...actionsData} />;
