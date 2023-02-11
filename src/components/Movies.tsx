import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MovieCard from './MovieCard';
import { useWindowDimensions } from '../hooks/useWindowDimentions';
import { useState } from 'react';
import MovieDetailCardMobile from './MovieDetailCardMobile';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

export default function Movies({ movieData }: { movieData: any }) {
  const [open, setOpen] = useState(false);
  const { windowWidth } = useWindowDimensions();
  const [movieIndex, setMovieIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(99999);
  const [filteredData, setFilteredData] = useState(() => movieData);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClick = (i: number) => {
    const dd = [...movieData.slice(0, i), movieData[i], ...movieData.slice(i)];
    setFilteredData(dd);
    setOpen(true);
  };

  return (
    <>
      <div className="movies flex flex-wrap gap-8 justify-between">
        {filteredData.length ? (
          filteredData.map((movie: any, index: number) => {
            return (
              <>
                {index === newIndex ? (
                  <MovieCard
                    key={`${movie.Title}extended`}
                    movieName={movie.Title}
                    posterImg={movie.Poster}
                    handleClick={handleClick}
                    setMovieIndex={setMovieIndex}
                    index={index}
                    setNewIndex={setNewIndex}
                    showDetails={true}
                    movieData={movieData}
                  />
                ) : (
                  <MovieCard
                    key={movie.Title}
                    movieName={movie.Title}
                    posterImg={movie.Poster}
                    handleClick={handleClick}
                    setMovieIndex={setMovieIndex}
                    index={index}
                    setNewIndex={setNewIndex}
                  />
                )}
              </>
            );
          })
        ) : (
          <div>No movies found</div>
        )}
      </div>

      {windowWidth <= 495 && (
        <Root>
          <CssBaseline />
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: 'visible',
                backgroundColor: '#394B61',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px'
              }
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true
            }}
          >
            <StyledBox
              sx={{
                height: '100%',
                overflow: 'auto',
                backgroundColor: '#394B61',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px'
              }}
            >
              {movieData.length ? (
                <MovieDetailCardMobile movie={movieData[movieIndex]} />
              ) : null}
            </StyledBox>
          </SwipeableDrawer>
        </Root>
      )}
    </>
  );
}
