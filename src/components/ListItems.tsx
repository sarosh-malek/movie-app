import SearchIcon from '@mui/icons-material/Search';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ItemCard from './ItemCard';

export default function ListItems() {
  return (
    <>
      <div className="ml-[52px] my-5">
        <ItemCard
          Icon={SearchIcon}
          name="Discover"
          color="#00E0FF"
          sideBorder="border-r-2 border-[#00E0FF]"
        />
        <ItemCard Icon={PlaylistPlayIcon} name="Playlist" />
        <ItemCard Icon={LiveTvIcon} name="Movie" />
        <ItemCard Icon={TvIcon} name="TV Shows" />
        <ItemCard Icon={ListIcon} name="My List" />
      </div>
      <hr />
      <div className="ml-[52px] my-5">
        <ItemCard Icon={WatchLaterOutlinedIcon} name="Watch Later" />
        <ItemCard Icon={FavoriteBorderOutlinedIcon} name="Recomended" />
      </div>
      <hr />
      <div className="ml-[52px] my-5">
        <ItemCard Icon={SettingsOutlinedIcon} name="Settings" />
        <ItemCard Icon={LogoutOutlinedIcon} name="Logout" />
      </div>
    </>
  );
}
