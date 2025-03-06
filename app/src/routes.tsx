import HomePage from '@/App';
import NotFoundPage from '@/pages/not-found';
import ProductsPage from '@/pages/products';
import ProjectsPage from '@/pages/projects';
import TodosPage from '@/pages/todos';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/todos' element={<TodosPage />} />
    <Route path='/projects' element={<ProjectsPage />} />
    <Route path='/products' element={<ProductsPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
