import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProjects } from '@/services/queries';
import { useState } from 'react';

export default function Projects() {
  const [page, setPage] = useState(1);
  const projects = useProjects(page);

  return (
    <div className='space-y-4'>
      <div>
        {projects.isLoading && <p>Loading...</p>}
        {projects.isError && <p>Error</p>}
        {projects.data && (
          <div className='grid sm:grid-cols-3 gap-2'>
            {projects.data.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-4'>
                    <div className='text-xs font-semibold size-7 rounded-full bg-accent flex items-center justify-center'>
                      {project.id}
                    </div>
                    {project.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
      <div className='space-y-3'>
        <p>Current page: {page}</p>
        <div className='space-x-2'>
          <Button
            variant={'outline'}
            disabled={page <= 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>
            previous
          </Button>
          <Button
            variant={'outline'}
            onClick={() => {
              if (!projects.isPlaceholderData) {
                setPage((prev) => prev + 1);
              }
            }}
            disabled={projects.isPlaceholderData}>
            next
          </Button>
        </div>
      </div>
    </div>
  );
}
