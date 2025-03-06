import axios from 'axios';
import { Todo } from '../types/todo';
import { Project } from '@/types/project';

const BASE_URL = 'http://localhost:8080';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export async function getTodosIds() {
  const { data } = await axiosInstance.get<Todo[]>('todos');
  return data.map((todo) => todo.id).sort((a, b) => b - a);
}

export async function getTodo(id: number) {
  const { data } = await axiosInstance.get<Todo>(`todos/${id}`);
  return data;
}

export async function createTodo(data: Todo) {
  await axiosInstance.post('todos', data);
}

export async function updateTodo(data: Todo) {
  await axiosInstance.put(`todos/${data.id}`, data);
}

export async function deleteTodo(id: number) {
  await axiosInstance.delete(`todos/${id}`);
}

export async function getProjects(pageParam: number) {
  await axiosInstance.get<Project[]>(`projects?page`);
}
