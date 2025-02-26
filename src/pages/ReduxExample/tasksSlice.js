import { createSlice } from '@reduxjs/toolkit';

const initialTaskList = [
  {
    id: 1,
    task: 'Task1',
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { totalTasks: 1, taskList: initialTaskList },
  reducers: {
    addTask: (state, action) => {
      state.totalTasks += 1;
      state.taskList.push(action.payload);
    },
    removeTask: (state, action) => {
      if (state.totalTasks === 0) return;

      state.totalTasks -= 1;
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
