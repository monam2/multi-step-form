import { css } from '@emotion/react';
import { X } from 'lucide-react';

const DeleteIconStyles = css({
  width: '16px',
  height: '16px',
});

interface DeleteIconProps {
  size?: number;
}

const DeleteIcon = ({ size = 16 }: DeleteIconProps) => {
  return (
    <div css={DeleteIconStyles}>
      <X size={size} />
    </div>
  );
};

export default DeleteIcon;
