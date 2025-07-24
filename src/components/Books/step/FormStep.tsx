import { css } from '@emotion/react';
import { FieldError, useFormContext, UseFormReturn } from 'react-hook-form';

import { BaseButton } from '@/components/common';

import { colors } from '@/styles/colors';
import { BookFormData, Step } from '@/types/forms';
import {
  INIT_STEP1_FORM_DATA,
  INIT_STEP2_FORM_DATA,
  INIT_STEP3_FORM_DATA,
  INIT_STEP4_FORM_DATA,
  INIT_STEP5_FORM_DATA,
} from '@/constants/form';

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
  isLastInputStep,
  initStep,
}: {
  steps: Step[];
  nowStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isLastStep: boolean;
  isLastInputStep: boolean;
  initStep: () => void;
}) => {
  const { setFocus, formState, trigger, handleSubmit, reset } = useFormContext();
  const { Component, key } = steps[nowStep];

  const handlePrevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    prevStep();
  };

  const handleNextStep = async (e: React.MouseEvent) => {
    // 마지막 step이면 폼 제출 (button type=submit)
    if (isLastInputStep) {
      // 서버로 form 데이터를 보내는 요청 실행
      handleSubmit((data) => {
        console.log(data);
      });

      reset(); // 폼 초기화
      nextStep();
      return;
    }

    // 다른 step은 이벤트 전파 막기
    e.preventDefault();
    e.stopPropagation();

    const nowStepFields = getCurrentStepFields(nowStep);
    const isValid = await trigger(nowStepFields as string[]);
    const errors = formState.errors;
    const dirtyFields = Object.keys(formState.dirtyFields);

    // 이하 로직 분리 필요
    if (nowStep === 3 && !isValid && errors?.quotes) {
      const quotesErrors = errors.quotes as Record<string, FieldError>;
      const firstField = Object.keys(quotesErrors)[0];

      const errorKey = Object.keys(quotesErrors[firstField])[0];
      setFocus(`quotes.${firstField}.${errorKey}` as string); // 인용구 에러 배열의 첫번째 요소 추출해서 키로 설정
      return;
    } else if (!isValid && dirtyFields.length === 0) {
      // 전체 요소가 빈 경우 [다음]을 누르면 RHF formState가 비동기로 동작해
      // formState의 error가 빈 객체로 나와 첫 렌더링 시 focus가 안되는 문제
      // -> dirtyFields로 수정 여부를 확인하고, 전체가 빈 필드이면 포커스
      const firstField = nowStepFields[0];

      setFocus(firstField as string);
      return;
    } else if (!isValid && errors) {
      const firstField = Object.keys(errors).find((field) => errors[field as keyof BookFormData]);

      setFocus(firstField as string);
      return;
    }

    nextStep();
  };

  const handleHome = () => {
    initStep();
  };

  /** 현재 Step의 필드 키를 반환하는 함수 */
  const getCurrentStepFields = (step: number) => {
    const stepFields: string[] = [];
    switch (step) {
      case 0:
        stepFields.push(...Object.keys(INIT_STEP1_FORM_DATA));
        break;
      case 1:
        stepFields.push(...Object.keys(INIT_STEP2_FORM_DATA));
        break;
      case 2:
        stepFields.push(...Object.keys(INIT_STEP3_FORM_DATA));
        break;
      case 3:
        stepFields.push(...Object.keys(INIT_STEP4_FORM_DATA));
        break;
      case 4:
        stepFields.push(...Object.keys(INIT_STEP5_FORM_DATA));
        break;
      default:
        return [];
    }
    return stepFields;
  };

  if (isLastStep) {
    return (
      <div css={FormStepStyles}>
        <Component key={key} />
        <BaseButton type="button" size="large" onClick={handleHome}>
          홈으로
        </BaseButton>
      </div>
    );
  }

  return (
    <div css={FormStepStyles}>
      <Component key={key} />
      <div css={FormButtonStyles}>
        <BaseButton type="button" onClick={handlePrevStep} disabled={nowStep === 0} size="large">
          이전
        </BaseButton>
        <BaseButton
          type={isLastInputStep ? 'submit' : 'button'} // 마지막 step이면 submit
          onClick={handleNextStep}
          size="large"
        >
          {isLastInputStep ? '제출' : '다음'}
        </BaseButton>
      </div>
    </div>
  );
};

export default FormStep;
