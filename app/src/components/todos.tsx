// import { useIsFetching } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { useUpdateTodo } from '@/services/mutations';
import { Todo } from '@/types/todo';
import { CheckIcon, ClockIcon } from 'lucide-react';
import { useTodos, useTodosIds } from '../services/queries';

export default function Todos() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);
  const updateTodoMutation = useUpdateTodo();

  function handleMarkAsDoneSubmit(data: Todo | undefined) {
    if (data) {
      updateTodoMutation.mutate({ ...data, checked: true });
    }
  }

  if (!todosQueries || todosQueries.length === 0) {
    return <p className='text-center w-full'>No todos</p>;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
      {todosQueries.map(({ data }) => (
        <Card key={data?.id}>
          <CardHeader className='flex-row justify-between'>
            <CardTitle>
              <p>id: {data?.id}</p>
              <p>Title: {data?.title}</p>
            </CardTitle>
            <Button
              size={'icon'}
              variant={'outline'}
              onClick={() => handleMarkAsDoneSubmit(data)}
              disabled={updateTodoMutation.isPending}>
              {data?.checked ? <CheckIcon /> : <ClockIcon />}
            </Button>
          </CardHeader>
          <CardContent>
            <p>Description: {data?.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
