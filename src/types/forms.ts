export type Step = {
  Component: React.ComponentType<StepProps>;
  key: string;
};

export interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
  isLastStep: boolean;
}
