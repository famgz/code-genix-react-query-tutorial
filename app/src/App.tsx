import GlobalFetching from '@/components/global-fetching';
import NewTodo from '@/components/new-todo';
import Todos from './components/todos';

export default function App() {
  return (
    <div className='container p-6 space-y-4'>
      <div className='flex justify-end'>
        <GlobalFetching />
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>Todos</h2>
          <NewTodo />
          <Todos />
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>Projects</h2>
        </div>
      </div>
    </div>
  );
}
