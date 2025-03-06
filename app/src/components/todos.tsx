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

  if (todosIdsQuery.isLoading) {
    return <p className='text-center'>Loading...</p>;
  }

  if (!todosIdsQuery.isLoading && todosQueries.length === 0) {
    return <p className='text-center'>No todos</p>;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {todosQueries.map(({ data }) => {
        if (data) {
          return (
            <Card key={data.id}>
              <CardHeader className=''>
                <CardTitle className='text-center'>{data.title}</CardTitle>
              </CardHeader>
              <CardContent className='flex-1 text-muted-foreground'>
                {data.description}
              </CardContent>
              <CardFooter className='justify-between'>
                <div className='text-xs font-semibold size-7 rounded-full bg-accent flex items-center justify-center'>
                  {data.id}
                </div>
                <div className='flex-center gap-2'>
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
                </div>
              </CardFooter>
            </Card>
          );
        }
      })}
    </div>
  );
}
