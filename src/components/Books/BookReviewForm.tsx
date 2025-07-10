import { css } from '@emotion/react';

import useFormStep from './hooks/useFormStep';
import useScreenSize from '@/hooks/useScreenSize';

import BookPreview from './BookPreview';
import FormHeader from './form/FormHeader';
import { Step1, Step2, Step3, Step4, Step5, FormStep } from './step';
import ProgressBar from '@/components/common/Progressbar/ProgressBar';

import { Step } from '@/types/forms';
import { colors } from '@/styles/colors';

const steps: Step[] = [
  { Component: Step1, key: 'step1' },
  { Component: Step2, key: 'step2' },
  { Component: Step3, key: 'step3' },
  { Component: Step4, key: 'step4' },
  { Component: Step5, key: 'step5' },
];

const BookReviewFormContainerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1200px',
  minWidth: '340px',
  height: '100vh',
  margin: '0 auto',
  padding: '20px',
});

const BookReviewFormStyles = ({ isDesktop }: { isDesktop: boolean }) => {
  return css({
    display: 'grid',
    gridTemplateColumns: isDesktop ? '2fr 1fr' : '1fr',
    gap: '20px',
    width: '100%',
    minHeight: '50vh',
    marginTop: '20px',
  });
};

const BookReviewForm = () => {
  const { isDesktop } = useScreenSize({ width: 1024 });
  const { nowStep, nextStep, prevStep, isLastStep } = useFormStep(steps.length); // 폼 스텝 관리

  return (
    <div css={BookReviewFormContainerStyles}>
      <FormHeader />
      <ProgressBar step={nowStep} totalStep={5} color={colors.primary} size="full" />

      <div css={BookReviewFormStyles({ isDesktop })}>
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
    </div>
  );
};

export default BookReviewForm;
