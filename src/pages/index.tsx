export default function Home() {
  return (
    <>
      <video
        src="/video_placeholder.mp4"
        className='aspect-video w-full h-[90vh] object-cover'
        autoPlay
        loop
        muted
        playsInline
      />

      <div style={{ width: '100vw', height: '100vh' }} />
    </>
  );
}
