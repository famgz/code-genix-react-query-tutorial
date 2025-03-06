// import { useIsFetching } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCreateTodo } from '@/services/mutations';
import { Todo } from '@/types/todo';
import { useForm } from 'react-hook-form';

export default function NewTodo() {
  const createTodoMutation = useCreateTodo();

  const form = useForm<Todo>();

  function handleCreateTodoSubmit(data: Todo) {
    createTodoMutation.mutate(data);
    form.reset();
  }

  return (
    <Card className='w-full max-w-72 h-fit'>
      <CardHeader>
        <CardTitle>New todo</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(handleCreateTodoSubmit)}
          className='space-y-3'>
          <div className='space-y-1'>
            <Label>Title</Label>
            <Input
              type='text'
              placeholder='Title'
              {...form.register('title', { required: 'Required' })}
            />
          </div>
          <div className='space-y-1'>
            <Label>Description</Label>
            <Textarea
              {...form.register('description', { required: 'Required' })}
              placeholder='Description'
            />
          </div>
          <Button
            type='submit'
            className='w-full'
            disabled={createTodoMutation.isPending || !form.formState.isValid}>
            {createTodoMutation.isPending ? 'Creating...' : 'Create Todo'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
