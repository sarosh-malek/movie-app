import ListItems from './ListItems';
import Profile from './Profile';

export default function Sidebar() {
  return (
    <aside className="sidebar min-w-[306px] bg-[#1F2A3C] h-screen">
      <Profile />
      <ListItems />
    </aside>
  );
}
