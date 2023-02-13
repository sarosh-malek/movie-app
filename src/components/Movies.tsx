import MovieCard from './MovieCard';
import { useWindowDimensions } from '../hooks/useWindowDimentions';
import { useContext, useState } from 'react';
import MovieDetailCard from './MovieDetailCard';
import Modal from './Modal';
import { MovieDetailsContext } from '../context/showDetailsContext';

export default function Movies({ movieData }: { movieData: any }) {
  const { windowWidth } = useWindowDimensions();
  const [showMobileDetails, setShowMobileDetails] = useState(false);
  const movieContext = useContext(MovieDetailsContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <>
      <div className="movies flex flex-wrap gap-8 justify-between">
        {movieData.length ? (
          movieData.map((movie: any, index: number) => {
            return (
              <>
                {movieContext?.showDetails && index === selectedIndex && (
                  <MovieDetailCard
                    key={index + 101}
                    Title={movie.Title}
                    Poster={data.Poster}
                    imdbRating={data.imdbRating}
                    Year={data.Year}
                    Runtime={data.Runtime}
                    Director={data.Director}
                    Plot={data.Plot}
                    Language={data.Language}
                  />
                )}
                <MovieCard
                  key={index}
                  movie={movie}
                  setSelectedIndex={setSelectedIndex}
                  index={index}
                  setData={setData}
                  setModalIndex={setModalIndex}
                  setShowMobileDetails={setShowMobileDetails}
                />
              </>
            );
          })
        ) : (
          <div>No movies found</div>
        )}
      </div>

      {windowWidth <= 736 && showMobileDetails && (
        <Modal
          setShowModal={setShowMobileDetails}
          Title={movieData[modalIndex].Title}
          Poster={movieData[modalIndex].Poster}
          imdbRating={movieData[modalIndex].imdbRating}
          Year={movieData[modalIndex].Year}
          Runtime={movieData[modalIndex].Runtime}
          Director={movieData[modalIndex].Director}
          Plot={movieData[modalIndex].Plot}
          Language={movieData[modalIndex].Language}
        />
      )}
    </>
  );
}
