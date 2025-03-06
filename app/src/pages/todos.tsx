import NewTodo from '@/components/new-todo';
import Todos from '@/components/todos';

export default function TodosPage() {
  return (
    <div className='flex flex-col space-y-4 flex-1'>
      <h2 className='text-2xl font-bold'>Todos</h2>
      <div className='flex flex-1 gap-4'>
        <NewTodo />
        <div className='flex flex-col flex-1'>
          <Todos />
        </div>
      </div>
    </div>
  );
}
