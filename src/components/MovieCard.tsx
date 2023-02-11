import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import MovieDetailCard from './MovieDetailCard';

interface Props {
  movieName: string;
  posterImg: string;
  handleClick: Function;
  setMovieIndex: Function;
  index: number;
  setNewIndex: Function;
  showDetails?: boolean;
  movieData?: any;
}

export default function MovieCard({
  movieName,
  posterImg,
  handleClick,
  setMovieIndex,
  index,
  setNewIndex,
  showDetails = false,
  movieData
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [prevItems, setPrevItems] = useState(index);

  const handleCardClick = () => {
    setMovieIndex(index);
    handleClick(index);
    if (ref.current !== null) {
      let parent = ref.current.parentNode;
      const currentIndex = Array.prototype.indexOf.call(
        parent!.children,
        ref.current
      );

      console.log(index, prevItems);
      if (index <= prevItems) {
        setNewIndex(currentIndex);
      } else {
        setNewIndex(currentIndex - 1);
      }
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
