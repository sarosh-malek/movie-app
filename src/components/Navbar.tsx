import NavarbarItems from './NavbarItems';
import SearchBox from './SearchBox';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({
  handleSearchInput
}: {
  handleSearchInput: Function;
}) {
  return (
    <div className="navbar flex justify-center items-center h-[8em] p-10 sticky top-0">
      <div className="flex h-full justify-between w-full">
        <MenuIcon className="menu hidden absolute top-0 left-0 w-10 h-10" />
        <SearchBox handleSearchInput={handleSearchInput} />
        <NavarbarItems />
      </div>
    </div>
  );
}
