import ListItems from './ListItems';
import Profile from './Profile';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const handleClick = () => {};
  return (
    <aside
      className={`sidebar  ${
        isOpen == true ? 'active' : ''
      } min-w-[306px] bg-[#1F2A3C] h-screen z-1`}
    >
      <div
        className="sidebar-menu hidden absolute top-0 left-0 w-10 h-10 hover:cursor-pointer"
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </div>
      <Profile />
      <ListItems />
    </aside>
  );
}
