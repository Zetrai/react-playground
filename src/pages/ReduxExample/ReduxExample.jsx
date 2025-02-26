import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './tasksSlice';

const ReduxExample = () => {
  const dispatch = useDispatch();
  const { totalTasks, taskList } = useSelector((state) => state.tasks);

  const newTask = {
    id: totalTasks + 1,
    task: `Task${totalTasks + 1}`,
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        ReduxExample
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Redux Toolkit
          </h2>
          <p className='italic text-[14px]'>
            This example demonstrates the use of Redux Toolkit for state
            management. The `addTask` and `removeTask` actions are dispatched to
            update the state in the Redux store.
          </p>
          <p className='text-center text-2xl font-bold'>
            TotalTasks: {totalTasks}
          </p>
          <div className='flex flex-row gap-2'>
            <button
              className='p-2 bg-cyan-800 text-white font-bold rounded-xl'
              onClick={() => dispatch(addTask(newTask))}>
              Add Task
            </button>
            <button
              className='p-2 bg-cyan-800 text-white font-bold rounded-xl'
              onClick={() => dispatch(removeTask(taskList[totalTasks - 1]))}>
              Remove Task
            </button>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[14px] italic'>
              Below is the current list of tasks stored in the Redux store. Each
              task has an ID and a description.
            </p>
            {taskList.map((task) => {
              return <li key={task.id}>{task.task}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReduxExample;
