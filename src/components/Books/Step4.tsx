import { StepProps } from '@/types/forms';

const Step4 = ({ nextStep, prevStep }: StepProps) => {
  return (
    <div>
      <h1>Step4</h1>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step4;
