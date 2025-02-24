import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { FC, ReactNode } from 'react';
import tw from 'twin.macro';

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline-primary' | 'outline-secondary';
const buttonSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'tiny':
      return tw`h-7 text-sm font-medium`;
    case 'small':
      return tw`h-9 text-[0.9375rem] font-medium`;
    case 'medium':
      return tw`h-[3.5rem] !text-[1.25rem] leading-[1.705] tracking-[-0.07px] text-center !text-white`;
    case 'large':
      return tw`h-12 text-base font-medium`;
  }
};

const buttonVariantStyles = (variant: ButtonVariant) => {
  //   switch (variant) {
  //     case 'primary':
  //       return tw`bg-bg-senary text-text-quattuordenary hover:bg-bg-vigenary disabled:bg-bg-quindenary disabled:text-text-septenvigenary`;
  //     case 'secondary':
  //       return tw`bg-bg-primary text-text-quattuordenary hover:bg-bg-unvigenary disabled:bg-bg-duovigenary`;
  //     case 'tertiary':
  //       return tw`underline text-text-duodenary hover:underline`;
  //     case 'outline-primary':
  //       return tw`bg-bg-tertiary border border-solid border-border-secondary text-text-duodenary hover:bg-bg-primary hover:text-text-quattuordenary disabled:text-text-octovigenary disabled:border-border-nonary`;
  //     case 'outline-secondary':
  //       return tw`bg-bg-tertiary border border-solid border-border-denary text-text-septendenary hover:bg-bg-quattuorvigenary disabled:text-text-septenvigenary disabled:border-border-tredenary`;
  //   }
  switch (variant) {
    case 'primary':
      return tw`!bg-Dodger_Blue  disabled:bg-[#FFB800] disabled:text-gray-300 w-[26.125rem]  opacity-[90%] rounded-lg`;
  }
};

interface Props extends Omit<LoadingButtonProps, 'size' | 'variant'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button: FC<Props> = ({ children, variant = 'primary', size = 'medium', loading = false, ...props }) => {
  return (
    <LoadingButton
      tw="transition-all duration-300 ease-in-out whitespace-nowrap"
      css={[buttonSizeStyles(size), buttonVariantStyles(variant)]}
      loading={loading}
      {...props}
    >
      {children}
    </LoadingButton>
  );
};
