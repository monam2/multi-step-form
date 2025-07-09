import { StepProps } from '@/types/forms';

const Step2 = ({ nextStep, prevStep }: StepProps) => {
  return (
    <div>
      <h1>Step2</h1>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
