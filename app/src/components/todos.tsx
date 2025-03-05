// import { useIsFetching } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { useDeleteTodo, useUpdateTodo } from '@/services/mutations';
import { Todo } from '@/types/todo';
import { CheckIcon, ClockIcon, TrashIcon } from 'lucide-react';
import { useTodos, useTodosIds } from '../services/queries';

export default function Todos() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  function handleMarkAsDone(data: Todo | undefined) {
    if (data) {
      updateTodoMutation.mutate({ ...data, checked: true });
    }
  }

  function handleDelete(id: number | undefined) {
    if (id) {
      deleteTodoMutation.mutate(id);
    }
  }

  if (!todosQueries || todosQueries.length === 0) {
    return <p className='text-center w-full'>No todos</p>;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {todosQueries.map(({ data }) => {
        if (data) {
          return (
            <Card key={data.id}>
              <CardHeader className='flex-row justify-between'>
                <CardTitle>
                  <p>id: {data.id}</p>
                  <p>Title: {data.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Description: {data.description}</p>
              </CardContent>
              <CardFooter className='justify-end gap-2'>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => handleMarkAsDone(data)}
                  disabled={updateTodoMutation.isPending || data.checked}>
                  {data.checked ? <CheckIcon /> : <ClockIcon />}
                </Button>
                <Button
                  size={'icon'}
                  variant={'outline'}
                  onClick={() => handleDelete(data.id)}
                  disabled={updateTodoMutation.isPending}>
                  <TrashIcon />
                </Button>
              </CardFooter>
            </Card>
          );
        }
      })}
    </div>
  );
}
