import { useEffect } from 'react';

export default function MovieDetailCardMobile({ movie }: { movie: any }) {
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
    <div className="h-full text-[#d4d7dd]">
      <div className="flex p-4 w-full">
        <img
          className="float-left rounded-lg w-28 h-30 mr-4"
          src={movie.Poster}
        />
        <div className="w-full">
          <div className="font-bold text-2xl">{movie.Title}</div>
          <div className="flex gap-4 text-[#abafb4] my-2">
            <div>
              {movie.imdbRating === 'N/A' ? (
                <div className="text-[#00E0FF]">Comming Soon</div>
              ) : (
                <div>{movie.imdbRating} / 10</div>
              )}
            </div>
            <div>
              {movie.Year.split('-')[1] !== ''
                ? movie.Year
                : movie.Year.slice(0, 4)}
            </div>
            <div>{movie.Runtime}</div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div>Directed by</div>
              <div>Language</div>
            </div>
            <div>
              <div>{movie.Director}</div>
              <div>{movie.Language}</div>
            </div>
          </div>
          <div className="mt-4 flex justify-center w-full gap-2">
            <button
              className="w-full text-[16px] bold bg-[#00E0FF] text-black font-bold py-2 rounded"
              disabled={movie.imdbRating === 'N/A'}
            >
              Play Movie
            </button>
            <button
              className="w-full text-[16px] bold bg-transparent rounded text-[#00E0FF] font-semibold hover:text-white px-2 border 
      border-[#00E0FF]"
            >
              Watch Trailler
            </button>
          </div>
        </div>
      </div>
      <p className="px-4 overflow-hidden break-all">{movie.Plot}</p>
    </div>
  );
}
