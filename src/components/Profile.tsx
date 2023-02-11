import Avatar from '@mui/material/Avatar';

export default function Profile() {
  return (
    <div className="flex justify-center items-center h-[191px] border-b-2">
      <div>
        <div className="flex w-full justify-center mb-2">
          <Avatar
            alt="Remy Sharp"
            src="https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </div>
        <div className="text-[20px] text-quill-font font-semibold text-center">
          Saroh Malek
        </div>
      </div>
    </div>
  );
}
