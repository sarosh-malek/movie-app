import { useEffect, useRef } from 'react';

interface Props {
  Title: string;
  Poster: string;
  imdbRating: any;
  Year: string;
  Runtime: string;
  Director: string;
  Plot: string;
  Language: string;
}

export default function MovieDetailCard({
  Title,
  Poster,
  imdbRating,
  Year,
  Runtime,
  Director,
  Plot,
  Language
}: Props) {
  const movieRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rattingEl = document.body.querySelector<HTMLDivElement>('.ratting');
    const cardEl = document.body.querySelector<HTMLDivElement>('.wrapper');

    if (cardEl) {
      let height = 0;
      // cardEl.style.height = '0%';
      const animate = () => {
        height += 4;
        cardEl.style.height = height + '%';
        if (height < 100) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }

    const per = (imdbRating * 100) / 10;
    if (rattingEl) {
      let width = 0;
      const animate = () => {
        width += 1;
        rattingEl.style.width = width + '%';
        if (width <= per) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }

    movieRef.current?.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
      inline: 'center'
    });
  });

  return (
    <div
      className="flex justify-center items-center min-h-[50vh] w-screen rounded-lg"
      ref={movieRef}
    >
      <div className="wrapper w-full bg-[#394B61] rounded-lg">
        <div className="movie-details-card flex  text-[#d4d7dd] rounded-lg">
          <img
            className="rounded-l-lg min-w-[349px] max-w-[349px] max-h-[50vh]"
            src={Poster}
          />
          <div className="p-4">
            <h1 className="text-[2.25rem] font-bold">{Title}</h1>
            <div className="my-2 flex items-center gap-4 w-full">
              {imdbRating === 'N/A' ? (
                <div className="text-[#00E0FF]">Comming Soon</div>
              ) : (
                <>
                  <div className="w-[10em] h-1.5 bg-white rounded-full">
                    <div className="ratting bg-[#00E0FF] h-1.5 rounded-full"></div>
                  </div>
                  <div>{imdbRating} / 10</div>
                </>
              )}
            </div>

            <div className="text-[1vw] grid grid-cols-2">
              <div className="[&>*]:mb-1">
                <div>Year</div>
                <div>Running Time</div>
                <div>Directed by</div>
                <div>Language</div>
              </div>
              <div className="[&>*]:mb-1">
                <div>{Year.split('-')[1] !== '' ? Year : Year.slice(0, 4)}</div>
                <div>{Runtime}</div>
                <div>{Director}</div>
                <div>{Language}</div>
              </div>
            </div>
            <p className="text-[1vw] my-4">{Plot}</p>
            <button className="text-[1vw] mr-4 bold bg-[#00E0FF] text-black font-bold py-2 px-10 rounded">
              Play Movie
            </button>
            <button
              className="text-[1vw] bold bg-transparent rounded text-[#00E0FF] font-semibold hover:text-white py-2 px-6 border 
      border-[#00E0FF]"
            >
              Watch Trailler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
