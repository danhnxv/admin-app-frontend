import React from 'react';
import { FC } from 'react';
import { FormInputTextField } from '../../types';
import { Controller, useFormContext } from 'react-hook-form';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import 'twin.macro';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const PasswordField: FC<FormInputTextField> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { name, defaultValue, label, InputProps, ...rest } = props;
  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  const onChange = (event: any) => {
    const { value } = event.target;
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
  };

  // Toggle show or hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Disable show or hide password by key press when focus on hide icon password field
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <div tw="flex flex-col gap-2">
          {label && <label>{label}</label>}
          <TextField
            {...field}
            {...rest}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => {
              field.onChange(e);
              onChange(e);
            }}
            error={!!error}
            helperText={error?.message as string}
            InputProps={{
              ...InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      )}
    />
  );
};
