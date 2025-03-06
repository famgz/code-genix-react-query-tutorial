import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import AppRoutes from '@/routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='h-screen flex flex-col'>
          <Header />
          <div className='flex flex-1'>
            <Sidebar />
            <div className='container flex flex-col flex-1'>
              <ScrollArea className='flex-auto h-20 pr-3'>
                <AppRoutes />
              </ScrollArea>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
