import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  name: string;
  color?: string;
  sideBorder?: string;
}

export default function ItemCard({ Icon, name, color, sideBorder }: Props) {
  return (
    <div
      className={`flex gap-3 mb-4 text-[${color}] ${sideBorder} hover:cursor-pointer`}
    >
      <div className="flex items-center justify-center">
        <Icon sx={{ width: 20, height: 20 }} />
      </div>

      <div className="text-[15px] font-semibold">{name}</div>
    </div>
  );
}
