import { FieldValues, get, Path, RegisterOptions, useFormContext } from 'react-hook-form';

import LabeledInput from './LabeledInput';

interface RHFLabeledInputProps<T extends FieldValues>
  extends Omit<React.ComponentProps<typeof LabeledInput>, 'name'> {
  name: Path<T>;
  rules?: RegisterOptions<FieldValues, Path<T>>;
  label: string;
}

const RHFLabeledInput = <T extends FieldValues>({
  name,
  label,
  rules,
  ...restProps
}: RHFLabeledInputProps<T>) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = get(errors, name);

  return (
    <LabeledInput
      label={label}
      {...restProps}
      {...register(name, rules)}
      error={error?.message as string}
    />
  );
};

export default RHFLabeledInput;
