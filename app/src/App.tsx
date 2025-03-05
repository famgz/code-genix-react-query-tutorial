import NewTodo from '@/components/new-todo';
import Todos from './components/todos';
import { useIsFetching } from '@tanstack/react-query';
export default function App() {
  const isFetching = useIsFetching(); // global fetching state
  return (
    <div className='container p-6 space-y-4'>
      <div className='flex justify-between'>
        <NewTodo />
        <p>
          Global isFetching:{' '}
          <span className='inline-block px-2 py-0.5 rounded-sm bg-gray-200 min-w-10 text-center'>
            {isFetching}
          </span>
        </p>
      </div>
      <Todos />
    </div>
  );
}
