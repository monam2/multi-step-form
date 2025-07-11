import { css } from '@emotion/react';

import { BaseButton } from '@/components/common';

import { Step } from '@/types/forms';
import { colors } from '@/styles/colors';

const FormStepStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  border: `1px solid ${colors.secondary}`,
  borderRadius: '10px',
  padding: '30px 20px',
});

const FormButtonStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '10px',
  marginTop: '20px',
});

const FormStep = ({
  steps,
  nowStep,
  nextStep,
  prevStep,
  isLastStep,
}: {
  steps: Step[];
  nowStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isLastStep: boolean;
}) => {
  const { Component, key } = steps[nowStep];

  return (
    <div css={FormStepStyles}>
      <Component key={key} />
      <div css={FormButtonStyles}>
        <BaseButton onClick={prevStep} disabled={nowStep === 0} size="large">
          이전
        </BaseButton>
        <BaseButton onClick={nextStep} disabled={isLastStep} size="large">
          다음
        </BaseButton>
      </div>
    </div>
  );
};

export default FormStep;
