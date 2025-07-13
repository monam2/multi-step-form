import { css } from '@emotion/react';
import { FormProvider, useForm } from 'react-hook-form';

import useFormStep from './hooks/useFormStep';
import useScreenSize from '@/hooks/useScreenSize';

import BookPreview from './BookPreview';
import FormHeader from './form/FormHeader';
import ProgressBar from '@/components/common/Progressbar/ProgressBar';
import { Step1, Step2, Step3, Step4, Step5, Step6, FormStep } from './step';

import { colors } from '@/styles/colors';
import { BookFormData, Step } from '@/types/forms';
import { INIT_FORM_DATA } from '@/constants/form';

const steps: Step[] = [
  { Component: Step1, key: 'step1' },
  { Component: Step2, key: 'step2' },
  { Component: Step3, key: 'step3' },
  { Component: Step4, key: 'step4' },
  { Component: Step5, key: 'step5' },
  { Component: Step6, key: 'step6' },
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
  const form = useForm<BookFormData>({
    mode: 'onSubmit',
    defaultValues: INIT_FORM_DATA,
    shouldFocusError: true,
  });
  const { isDesktop } = useScreenSize({ width: 1024 });
  const { nowStep, nextStep, prevStep, isLastStep, isLastInputStep, initStep } = useFormStep(
    steps.length,
  ); // 폼 스텝 관리

  const onSubmit = (data: BookFormData) => {
    console.log(data);
  };

  return (
    <div css={BookReviewFormContainerStyles}>
      <FormHeader />
      <ProgressBar step={nowStep} totalStep={5} color={colors.primary} size="full" />

      <FormProvider {...form}>
        <form css={BookReviewFormStyles({ isDesktop })} onSubmit={form.handleSubmit(onSubmit)}>
          {/* 도서 정보 입력 폼 */}
          <FormStep
            form={form}
            steps={steps}
            nowStep={nowStep}
            nextStep={nextStep}
            prevStep={prevStep}
            isLastStep={isLastStep}
            isLastInputStep={isLastInputStep}
            initStep={initStep}
          />

          {/* 데스크탑 모드일 때만 Preview 표시 */}
          {isDesktop && <BookPreview />}
        </form>
      </FormProvider>
    </div>
  );
};

export default BookReviewForm;
