export default function HomePage() {
  return (
    <div className='w-lg aspect-video mx-auto mt-20'>
      <iframe
        className='w-full h-full'
        src={`https://www.youtube.com/embed/3e-higRXoaM`}
        title='YouTube Video Player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></iframe>
    </div>
  );
}
