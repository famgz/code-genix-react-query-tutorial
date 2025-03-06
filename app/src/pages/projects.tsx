import Projects from '@/components/projects';

export default function ProjectsPage() {
  return (
    <div className='flex flex-col space-y-4 flex-1'>
      <h2 className='text-2xl font-bold'>Projects</h2>
      <Projects />
    </div>
  );
}
