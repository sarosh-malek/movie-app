import { MovieDetailsContext } from '@/context/showDetailsContext';
import { useWindowDimensions } from '@/hooks/useWindowDimentions';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, ChangeEvent, useEffect, useContext } from 'react';

const SearchBox = ({ handleSearchInput }: { handleSearchInput: Function }) => {
  const [text, setText] = useState('');
  const { windowWidth } = useWindowDimensions();
  const movieContext = useContext(MovieDetailsContext);
  useEffect(() => {
    handleClose();
  }, [windowWidth]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchInput(e.target.value);
    setText(e.target.value);
  };

  const handleSearchAnimation = () => {
    const inputEl =
      document.body.querySelector<HTMLInputElement>('.search-input');
    const crossEl = document.body.querySelector<HTMLElement>('.search-clear');
    const boxEl = document.body.querySelector<HTMLDivElement>('.search-box');

    let boxWidth = 0;
    if (boxEl !== null) {
      boxWidth = boxEl.offsetWidth;
    }

    if (inputEl !== null) {
      inputEl.style.padding = '15px 15px 15px 53px';
      let width = 0;
      const animateSearchBox = function () {
        width += 30;
        inputEl.style.width = width + 'px';
        if (width <= boxWidth) {
          requestAnimationFrame(animateSearchBox);
        }
      };
      animateSearchBox();
      movieContext?.setShowDetails(false);
    }

    setTimeout(() => {
      if (crossEl !== null) {
        crossEl.style.visibility = 'visible';
      }
      if (inputEl !== null) {
        inputEl.placeholder = 'Title, Movies, Keyword';
      }
    }, 400);
  };

  const handleClose = () => {
    handleSearchInput('');
    setText('');
    movieContext?.setShowDetails(false);
    const inputEl =
      document.body.querySelector<HTMLInputElement>('.search-input');
    const crossEl = document.body.querySelector<HTMLElement>('.search-clear');
    if (inputEl !== null) {
      inputEl.style.width = '0px';
      inputEl.style.padding = '0px';
      inputEl.placeholder = '';
    }
    if (crossEl !== null) {
      crossEl.style.visibility = 'hidden';
    }
  };

  return (
    <div className="search-box w-[536px]">
      <input
        className="relative search-input w-0 block text-sm text-[#FFFFFF] rounded-lg bg-[#1A2536] text-[21px] outline-0 border-0"
        value={text}
        onChange={handleChange}
      />
      <div
        className={`absolute inset-y-0 left-10 flex items-center pl-3 mt-1}`}
        onClick={handleSearchAnimation}
      >
        <SearchOutlinedIcon
          className=" hover:cursor-pointer"
          // fontSize="large"
        />
      </div>

      <span
        className="search-clear invisible bg-[#1A2536] text-white absolute top-[48px] left-[530px] bottom-[48px] py-1 hover:cursor-pointer"
        onClick={handleClose}
      >
        <CloseOutlinedIcon />
      </span>
    </div>
  );
};

export default SearchBox;
