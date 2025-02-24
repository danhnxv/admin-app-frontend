'use client';
import { TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import tw from 'twin.macro';
import { FormInputTextField } from '../../types';

export const FormTextField: FC<FormInputTextField> = (props) => {
  const { name, defaultValue, label, labelCss, containerCss, ...rest } = props;
  /** Define the 'focused' state to handle the focusing of the input field.
   *  This state can be externally controlled based on the 'focusedState' prop if it is provided. */

  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field: { ...controlProps } }) => (
        <div css={[tw`flex flex-col gap-1`, containerCss]}>
          <div tw="flex justify-between items-end">
            {label && <label css={[tw`block w-full`, labelCss]}>{label}</label>}
          </div>
          <TextField
            {...rest}
            {...controlProps}
            onChange={onChange}
            error={!!error}
            helperText={error?.message as string}
            tw="[& input]:(text-sm leading-4 font-normal px-4 pt-6 )"
          />
        </div>
      )}
    />
  );
};
