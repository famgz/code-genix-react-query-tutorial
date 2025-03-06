import { useIsFetching } from '@tanstack/react-query';

export default function GlobalFetching() {
  const isFetching = useIsFetching(); // global fetching state
  return (
    <div className='text-sm font-semibold'>
      Global isFetching:{' '}
      <span className='inline-block  px-2 py-0.5 rounded-sm bg-gray-200 min-w-10 text-center'>
        {isFetching}
      </span>
    </div>
  );
}
