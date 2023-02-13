import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction } from 'react';
import MovieDetailCardMobile from './MovieDetailCardMobile';

interface Props {
  Title: string;
  Poster: string;
  imdbRating: any;
  Year: string;
  Runtime: string;
  Director: string;
  Plot: string;
  Language: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  Title,
  Poster,
  imdbRating,
  Year,
  Runtime,
  Director,
  Plot,
  Language,
  setShowModal
}: Props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-2">
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#394B61] outline-none focus:outline-none">
            <div className="text-end mr-4 mt-4">
              <CloseIcon
                className="hover:text-gray-400 hover:cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <MovieDetailCardMobile
              Title={Title}
              Poster={Poster}
              imdbRating={imdbRating}
              Year={Year}
              Runtime={Runtime}
              Director={Director}
              Plot={Plot}
              Language={Language}
            />
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
