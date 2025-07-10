import { css } from '@emotion/react';

interface ProgressBarProps {
  step: number;
  color?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  totalStep: number;
}

type ProgressBarStylesProps = Pick<ProgressBarProps, 'size'>;

const ProgressBarStyles = ({ size }: ProgressBarStylesProps) => {
  return css({
    display: 'flex',
    justifyContent: 'flex-start',
    width:
      size === 'small'
        ? '200px'
        : size === 'medium'
          ? '300px'
          : size === 'large'
            ? '400px'
            : '100%',
    height: '10px',
    borderRadius: '10px',
  });
};

type ProgressBarInnerStylesProps = Pick<ProgressBarProps, 'color' | 'step' | 'totalStep'>;

const ProgressBarInnerStyles = ({ color, step, totalStep }: ProgressBarInnerStylesProps) => {
  const fillWidth = ((step + 1) / totalStep) * 100;

  return css({
    width: `${fillWidth}%`,
    height: '100%',
    backgroundColor: color,
    borderRadius: '10px',
    transition: `width 0.2s ease-in-out`,
  });
};

const ProgressBar = ({ step, totalStep = 5, color, size = 'full' }: ProgressBarProps) => {
  return (
    <div css={ProgressBarStyles({ size })}>
      <div css={ProgressBarInnerStyles({ color, step, totalStep })}></div>
    </div>
  );
};

export default ProgressBar;
