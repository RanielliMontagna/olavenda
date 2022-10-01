import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';

import { Tooltip, Typography } from '@mui/material';

interface DrawerItemProps extends PropsWithChildren {
  Icon: IconType;
  navigateTo: string;
}

const DrawerItem = ({ Icon, children, navigateTo }: DrawerItemProps) => {
  const _navigate = useNavigate();

  return (
    <Tooltip
      title={
        <Typography variant="body2" color="white">
          {children}
        </Typography>
      }
      placement="right"
      arrow
    >
      <div className="item" onClick={() => _navigate(navigateTo)}>
        <Icon size={24} />
      </div>
    </Tooltip>
  );
};

export { DrawerItem };
