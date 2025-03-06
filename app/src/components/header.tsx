import GlobalFetching from '@/components/global-fetching';

export default function Header() {
  return (
    <header className='flex justify-between items-center h-12 px-6 border-b shrink-0'>
      <h1 className='text-lg font-bold text-center'>
        Code Genix React Query Tutorial
      </h1>
      <GlobalFetching />
    </header>
  );
}
