import Feed from './Feed';
import Navbar from './Navbar';
import { movieData } from '../../data';
import { useState } from 'react';
import { debounce } from '../utils/debounce';

export default function Dashboard() {
  const [filteredMovies, setfilteredMovies] = useState<object[]>(
    () => movieData
  );
  const filterMovies = (text: string) => {
    const searchedMovies = movieData.filter(
      (movie) =>
        movie.Title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) != -1
    );
    setfilteredMovies(searchedMovies);
  };
  const fetcData = debounce(filterMovies, 1000);

  return (
    <div className="w-full h-screen bg-[#273244]">
      <Navbar handleSearchInput={fetcData} />
      <Feed movieData={filteredMovies} />
    </div>
  );
}
