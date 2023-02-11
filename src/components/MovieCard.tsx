import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import MovieDetailCard from './MovieDetailCard';

interface Props {
  movieName: string;
  posterImg: string;
  handleClick: Function;
  index: number;
  // setNewIndex: Function;
  showDetails?: boolean;
  movieData?: any;
  prevIndex: MutableRefObject<number | null>;
}

export default function MovieCard({
  movieName,
  posterImg,
  handleClick,
  index,
  // setNewIndex,
  showDetails = false,
  movieData,
  prevIndex
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const handleCardClick = () => {
    if (ref.current !== null) {
      let parent = ref.current.parentNode;
      const currentIndex = Array.prototype.indexOf.call(
        parent!.children,
        ref.current
      );
      console.log(prevIndex.current, currentIndex);
      if (currentIndex <= prevIndex.current!) handleClick(currentIndex);
      else handleClick(currentIndex - 1);
    }
  };

  return (
    <>
      {showDetails ? (
        <MovieDetailCard movie={movieData[index]} />
      ) : (
        <div
          ref={ref}
          className="movie-card flex content-center justify-center w-48 h-auto rounded-lg bg-[#394B61] hover:cursor-pointer"
          id={movieName}
          onClick={handleCardClick}
        >
          <div className="mt-2">
            <img
              className="w-44 h-52 rounded-lg"
              src={posterImg}
              alt={movieName}
            />
            <div className="mt-2 text-base font-semibold w-40 overflow-hidden text-ellipsis">
              {movieName}
            </div>
            <div className="flex mb-4">
              <div>
                <PlayCircleOutlinedIcon />
              </div>
              <div className="ml-4">
                <ControlPointOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
