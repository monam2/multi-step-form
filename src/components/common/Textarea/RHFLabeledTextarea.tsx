import { FieldValues, Path, RegisterOptions, useFormContext } from 'react-hook-form';

import LabeledTextarea from './LabeledTextarea';

interface RHFLabeledTextareaProps<T extends FieldValues>
  extends Omit<React.ComponentProps<typeof LabeledTextarea>, 'name'> {
  name: Path<T>;
  rules?: RegisterOptions<FieldValues, Path<T>>;
  label: string;
}

const RHFLabeledTextarea = <T extends FieldValues>({
  name,
  label,
  rules,
  ...restProps
}: RHFLabeledTextareaProps<T>) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <LabeledTextarea
      label={label}
      {...restProps}
      {...register(name, rules)}
      error={errors[name]?.message as string}
    />
  );
};

export default RHFLabeledTextarea;
