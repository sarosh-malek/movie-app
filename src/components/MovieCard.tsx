import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import { MovieDetailsContext } from '@/context/showDetailsContext';

interface Props {
  movie: any;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  index: number;
  setData: Dispatch<SetStateAction<any>>;
  setModalIndex: Dispatch<SetStateAction<number>>;
  setShowMobileDetails: Dispatch<SetStateAction<boolean>>;
}

export default function MovieCard({
  movie,
  setSelectedIndex,
  index,
  setData,
  setModalIndex,
  setShowMobileDetails
}: Props) {
  const { windowWidth } = useWindowDimensions();
  const movieContext = useContext(MovieDetailsContext);
  const handleClick = () => {
    //

    if (windowWidth > 1491) {
      setSelectedIndex(index - (index % 5));
    } else if (
      (windowWidth <= 1491 && windowWidth >= 1268) ||
      (windowWidth <= 1043 && windowWidth >= 961)
    ) {
      setSelectedIndex(index - (index % 4));
    } else if (
      (windowWidth < 1268 && windowWidth >= 1044) ||
      (windowWidth < 961 && windowWidth > 736)
    ) {
      setSelectedIndex(index - (index % 3));
    } else if (windowWidth <= 736) {
      setSelectedIndex(index);
      setModalIndex(index);
      setShowMobileDetails(true);
      return;
    }

    movieContext?.setShowDetails(true);
    setData(movie);
  };

  return (
    <>
      <div
        className="movie-card flex content-center justify-center w-48 h-auto rounded-lg bg-[#394B61] hover:cursor-pointer"
        id={movie.Title}
        onClick={handleClick}
      >
        <div className="mt-2">
          {/* eslint-disable-next-line */}
          <img
            className="w-44 h-52 rounded-lg"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className="mt-2 text-base font-semibold w-40 overflow-hidden text-ellipsis">
            {movie.Title}
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
      {/* {showModal && (
        <Modal
          setShowModal={setShowModal}
          children={
            <MovieDetailCard
              key={`qw687qwhgahws`}
              Title={movie.Title}
              Poster={movie.Poster}
              imdbRating={movie.imdbRating}
              Year={movie.Year}
              Runtime={movie.Runtime}
              Director={movie.Director}
              Plot={movie.Plot}
              Language={movie.Language}
            />
          }
        />
      )} */}
    </>
  );
}
