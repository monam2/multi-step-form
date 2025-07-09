import { css } from '@emotion/react';

import useFormStep from './hooks/useFormStep';
import useScreenSize from '@/hooks/useScreenSize';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import FormStep from './FormStep';
import BookPreview from './BookPreview';

import { Step } from '@/types/forms';

const steps: Step[] = [
  { Component: Step1, key: 'step1' },
  { Component: Step2, key: 'step2' },
  { Component: Step3, key: 'step3' },
  { Component: Step4, key: 'step4' },
  { Component: Step5, key: 'step5' },
];

const BookReviewFormStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const BookReviewForm = () => {
  const { isDesktop } = useScreenSize({ width: 1024 });
  const { nowStep, nextStep, prevStep, isLastStep } = useFormStep(steps.length); // 폼 스텝 관리

  return (
    <div css={BookReviewFormStyles}>
      {/* 도서 정보 입력 폼 */}
      <FormStep
        steps={steps}
        nowStep={nowStep}
        nextStep={nextStep}
        prevStep={prevStep}
        isLastStep={isLastStep}
      />

      {/* 데스크탑 모드일 때만 Preview 표시 */}
      {isDesktop && <BookPreview />}
    </div>
  );
};

export default BookReviewForm;
