import Image from 'next/image';
import { useEffect } from 'react';

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

export default function MovieDetailCardMobile({
  Title,
  Poster,
  imdbRating,
  Year,
  Runtime,
  Director,
  Plot,
  Language
}: Props) {
  useEffect(() => {
    const rattingEl = document.body.querySelector<HTMLDivElement>('.ratting');
    const per = (imdbRating * 100) / 10;
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
        {/* eslint-disable-next-line */}
        <Image
          className="float-left rounded-lg w-28 h-30 mr-4"
          width={112}
          height={114}
          src={Poster}
          alt={Title}
        />
        <div className="w-full">
          <div className="font-bold text-2xl">{Title}</div>
          <div className="flex gap-4 text-[#abafb4] my-2">
            <div>
              {imdbRating === 'N/A' ? (
                <div className="text-[#00E0FF]">Comming Soon</div>
              ) : (
                <div>{imdbRating} / 10</div>
              )}
            </div>
            <div>{Year.split('-')[1] !== '' ? Year : Year.slice(0, 4)}</div>
            <div>{Runtime}</div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <div>Directed by</div>
              <div>Language</div>
            </div>
            <div>
              <div>{Director}</div>
              <div>{Language}</div>
            </div>
          </div>
          <div className="mt-4 flex justify-center w-full gap-2">
            <button
              className="w-full text-[16px] bold bg-[#00E0FF] text-black font-bold py-2 rounded"
              disabled={imdbRating === 'N/A'}
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
      <p className="px-4 overflow-hidden break-all mb-4">{Plot}</p>
    </div>
  );
}
