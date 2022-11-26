import { FiCheck } from 'react-icons/fi';
import { ColorButtonContainer } from './colorButton.styles';
import type { IColorButtonProps } from './colorButton.types';

const ColorButton = ({ cor, selected, onClick }: IColorButtonProps) => {
  return (
    <ColorButtonContainer cor={cor} onClick={onClick} selected={selected}>
      <div className="check" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FiCheck color="white" />
      </div>
    </ColorButtonContainer>
  );
};

export default ColorButton;
