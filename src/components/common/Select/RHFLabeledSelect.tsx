import { FieldValues, get, Path, RegisterOptions, useFormContext } from 'react-hook-form';

import LabeledSelect from './LabeledSelect';

interface RHFLabeledSelectProps<T extends FieldValues>
  extends Omit<React.ComponentProps<typeof LabeledSelect>, 'name'> {
  name: Path<T>;
  rules?: RegisterOptions<FieldValues, Path<T>>;
  label: string;
}

const RHFLabeledSelect = <T extends FieldValues>({
  name,
  label,
  rules,
  ...restProps
}: RHFLabeledSelectProps<T>) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = get(errors, name);

  return (
    <LabeledSelect
      label={label}
      {...restProps}
      {...register(name, rules)}
      error={error?.message as string}
    />
  );
};

export default RHFLabeledSelect;
