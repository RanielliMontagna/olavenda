import { CircularProgress } from '@mui/material';
import { center } from 'styles/shared.styles';

const Loading = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.3)',
        ...center,
      }}
    >
      <CircularProgress size={50} />
    </div>
  );
};

export { Loading };
