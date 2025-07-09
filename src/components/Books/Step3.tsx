import { StepProps } from '@/types/forms';

const Step3 = ({ nextStep, prevStep }: StepProps) => {
  return (
    <div>
      <h1>Step3</h1>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step3;
