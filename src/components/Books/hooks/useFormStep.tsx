import { useState } from 'react';

/**
 * 폼 스텝 관리 훅
 * @returns 현재 스텝, 다음 스텝, 이전 스텝
 */
const useFormStep = (stepLength: number) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step >= stepLength - 1) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step <= 0) return;
    setStep(step - 1);
  };

  const isLastStep = step === stepLength - 1;

  return { nowStep: step, nextStep, prevStep, isLastStep };
};

export default useFormStep;
