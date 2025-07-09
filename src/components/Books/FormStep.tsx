import { Step } from '@/types/forms';

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

  return <Component key={key} nextStep={nextStep} prevStep={prevStep} isLastStep={isLastStep} />;
};

export default FormStep;
