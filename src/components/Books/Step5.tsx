import { StepProps } from '@/types/forms';

const Step5 = ({ nextStep, prevStep }: StepProps) => {
  return (
    <div>
      <h1>Step5</h1>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step5;
