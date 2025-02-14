import { createSlice } from '@reduxjs/toolkit';

const initialTaskList = [
  {
    id: 1,
    task: 'Task1',
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { value: { totalTasks: 1, taskList: initialTaskList } },
  reducers: {
    addTask: (state, action) => {
      state.value.totalTasks += 1;
      state.value.taskList.push(action.payload);
    },
    removeTask: (state, action) => {
      if (state.value.totalTasks === 0) return;

      state.value.totalTasks -= 1;
      state.value.taskList = state.value.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
