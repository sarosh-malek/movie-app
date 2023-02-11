import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function NavarbarItems() {
  return (
    <div className="flex items-center">
      <span>
        <LightModeOutlinedIcon />
      </span>
      <span className="ml-4">
        <MoreVertOutlinedIcon />
      </span>
    </div>
  );
}
