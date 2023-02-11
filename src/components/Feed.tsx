import Movies from './Movies';
export default function Feed({ movieData }: { movieData: any }) {
  return (
    <div className="movie-feed px-10 pb-5 max-h-[38em] overflow-auto">
      <Movies movieData={movieData} />
    </div>
  );
}
