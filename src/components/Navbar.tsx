import NavarbarItems from './NavbarItems';
import SearchBox from './SearchBox';

export default function Navbars({
  handleSearchInput
}: {
  handleSearchInput: Function;
}) {
  return (
    <div className="flex justify-center items-center h-[8em] p-10 sticky top-0">
      <div className="flex justify-between w-full">
        <SearchBox handleSearchInput={handleSearchInput} />
        <NavarbarItems />
      </div>
    </div>
  );
}
