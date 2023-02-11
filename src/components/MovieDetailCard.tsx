import { useEffect } from 'react';

export default function MovieDetailCard({ movie }: { movie: any }) {
  useEffect(() => {
    const rattingEl = document.body.querySelector<HTMLDivElement>('.ratting');
    const per = (movie.imdbRating * 100) / 10;
    if (rattingEl) {
      let width = 0;
      const animate = () => {
        width += 2.5;
        rattingEl.style.width = width + '%';
        if (width <= per) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  });

  return (
    <div className="flex h-[100%] bg-[#394B61] text-[#d4d7dd]">
      <img src={movie.Poster} />
      <div className="p-10">
        <h1 className="text-4xl font-bold">{movie.Title}</h1>
        <div className="my-4 flex items-center gap-4 w-full">
          {movie.imdbRating === 'N/A' ? (
            <div className="text-[#00E0FF]">Comming Soon</div>
          ) : (
            <>
              <div className="w-[10em] h-1.5 bg-white rounded-full">
                <div className="ratting bg-[#00E0FF] h-1.5 rounded-full"></div>
              </div>
              <div>{movie.imdbRating} / 10</div>
            </>
          )}
        </div>

        <div className="grid grid-cols-2">
          <div className="[&>*]:mb-2">
            <div>Year</div>
            <div>Running Time</div>
            <div>Directed by</div>
            <div>Language</div>
          </div>
          <div className="[&>*]:mb-2">
            <div>
              {movie.Year.split('-')[1] !== ''
                ? movie.Year
                : movie.Year.slice(0, 4)}
            </div>
            <div>{movie.Runtime}</div>
            <div>{movie.Director}</div>
            <div>{movie.Language}</div>
          </div>
        </div>
        <p className="my-4">{movie.Plot}</p>
        <button className="text-[16px] mr-4 bold bg-[#00E0FF] text-black font-bold py-2 px-10 rounded">
          Play Movie
        </button>
        <button
          className="text-[16px] bold bg-transparent rounded text-[#00E0FF] font-semibold hover:text-white py-2 px-6 border 
      border-[#00E0FF]"
        >
          Watch Trailler
        </button>
      </div>
    </div>
  );
}
