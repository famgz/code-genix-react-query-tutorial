import axios from 'axios';
import { Todo } from '../types/todo';

const BASE_URL = 'http://localhost:8080';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export async function getTodosIds() {
  const { data } = await axiosInstance.get<Todo[]>('todos');
  return data.map((todo) => todo.id);
}

export async function getTodo(id: number) {
  const { data } = await axiosInstance.get<Todo>(`todos/${id}`);
  return data;
}
