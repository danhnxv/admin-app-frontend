import { CheckboxProps, SxProps, TextFieldProps, Theme } from '@mui/material';
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

export type FormInputCheckbox = GenericFormInput & {
  options: Pick<CheckboxProps, 'disabled' | 'size' | 'color' | 'sx'> &
    {
      value: string | number;
      label?: React.ReactNode | string;
      addition?: React.ReactNode;
      checkboxCss?: TwStyle;
      checkboxLabelCss?: TwStyle;
      customStyle?: TwStyle | (false | TwStyle)[];
      customCheckboxStyle?: SxProps<Theme>;
      useDefaultIcons?: boolean;
      disabled?: boolean;
    }[];
  formControlStyle?: TwStyle;
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

export type FormInputPasswordField = GenericFormInput & TextFieldProps;

export type FormInputGenericProps =
  | (FormInputTextField & { inputType: 'TextField' })
  | (FormInputPasswordField & { inputType: 'PasswordField' })
  | (FormInputCheckbox & { inputType: 'CheckboxField' });
