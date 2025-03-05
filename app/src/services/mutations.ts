import { createTodo, updateTodo } from '@/services/api';
import { Todo } from '@/types/todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log('mutate');
    },
    onError: () => {
      console.log('error');
    },
    onSuccess: async () => {
      console.log('success');
      await queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onSettled: () => {
      console.log('settled');
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ['todos'] });
        await queryClient.invalidateQueries({
          queryKey: ['todo', { id: variables.id }],
        });
      }
    },
  });
}
