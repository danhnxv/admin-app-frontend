import { TextFieldProps } from '@mui/material';
import { TwStyle } from 'twin.macro';

type GenericFormInput = {
  name: string;
  label?: React.ReactNode | string;
  placeholder?: string;
  validate?: object;
  defaultValue?: any;
  disabled?: boolean;
  colSpan: TwStyle; // Css of column span of the input container
  loading?: boolean;
  containerCss?: TwStyle;
  labelCss?: TwStyle;
  rows?: number;
  tagLabel?: string;
};

export type FormInputTextField = GenericFormInput &
  TextFieldProps & {
    startIcon?: React.ReactElement;
    startAdornment?: {
      typingIcon?: React.ReactElement;
      checkedIcon?: React.ReactElement;
    };
    endIcon?: React.ReactElement;
    editable?: boolean;
    maxLength?: number;
    clearable?: boolean;
  };

export type FormInputGenericProps = FormInputTextField & { inputType: 'TextField' };
