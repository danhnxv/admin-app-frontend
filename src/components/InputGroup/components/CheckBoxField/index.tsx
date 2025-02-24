import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormControlLabel, Checkbox, Box } from '@mui/material';
import tw from 'twin.macro';
import { FormInputCheckbox } from '@/components/InputGroup/types';

export const CheckboxField: FC<FormInputCheckbox> = (props) => {
  const { name, defaultValue = [], containerCss, options, label, labelCss } = props;
  const { control, setValue } = useFormContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string | number,
    currentValue: string[] | number[],
  ) => {
    const newValue = event.target.checked
      ? [...currentValue, value]
      : currentValue.filter((item: string | number) => item !== value);

    setValue(name, newValue);
  };

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <Box css={labelCss}>{label}</Box>
            <Box css={[tw`flex flex-wrap flex-col gap-1`, containerCss]}>
              {options.map((option, index) => (
                <div key={index}>
                  <FormControlLabel
                    sx={{
                      '&.MuiFormControlLabel-root': tw`m-1 items-start`,
                    }}
                    control={
                      <Checkbox
                        checked={field.value.includes(option.value)}
                        onChange={(event) => handleChange(event, option.value, field.value)}
                        css={[tw`mt-1`, option.checkboxCss]}
                      />
                    }
                    label={<Box css={[option.checkboxLabelCss]}>{option.label}</Box>}
                  />
                  {option.addition}
                </div>
              ))}
            </Box>
          </>
        )}
      />
    </FormControl>
  );
};
