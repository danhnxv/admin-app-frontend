import { APIErrorResponse } from '@/types';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import * as yup from 'yup';
import { useFormHandler } from '@/hooks';
import { FormInputGenericProps } from '@/components/InputGroup/types';
import Link from 'next/link';
import { usePostSignup } from '../../apis';
import { FormSignup } from '../../types';

export const useFormSignupLogic = () => {
  const { mutate } = usePostSignup({
    onSuccess: () => {
      toast.success('Add success');
    },
    onError: (error: APIErrorResponse) => {
      toast.error(error.response?.data.message);
    },
  });

  const handleSignup = () => {
    const formValues = watchSignupForm();
    console.log('🚀 ~ handleSignup ~ formValues:', formValues);
    mutate({ email: formValues.email, password: formValues.password, username: formValues.username });
  };

  const signupFormStructure: FormInputGenericProps[] = [
    {
      containerCss: tw`mt-[2.3125rem] w-full`,
      label: 'Email address:',
      name: 'email',
      inputType: 'TextField',
      colSpan: tw`w-full`,
      validate: yup.string().trim().required(),
      placeholder: 'email',
      labelCss: tw` text-[1.125rem] leading-[1.534375rem] tracking-[0.00375rem] mb-[0.625rem]`,
      defaultValue: '',
      sx: {
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
          ...tw`bg-gray-200  rounded-md h-[3.5rem] w-full `,
          '& input': {
            ...tw` py-0 pt-0 transition-opacity duration-300 ease-in-out opacity-70 focus:opacity-100 border rounded`,
          },
        },
      },
    },
    {
      containerCss: tw`mt-[2.2025rem] w-full`,
      label: 'Username:',
      name: 'username',
      inputType: 'TextField',
      colSpan: tw`w-full`,
      validate: yup.string().trim().required(),
      placeholder: 'Username',
      labelCss: tw` text-[1.125rem] leading-[1.534375rem] tracking-[0.00375rem] mb-[0.625rem]`,
      defaultValue: '',
      sx: {
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
          ...tw`bg-gray-200  rounded-md h-[3.5rem] w-full`,
          '& input': {
            ...tw` py-0 pt-0 transition-opacity duration-300 ease-in-out opacity-70 focus:opacity-100 border rounded`,
          },
        },
      },
    },
    {
      containerCss: tw`mt-[1.9125rem] w-full`,
      label: (
        <div tw="flex justify-between w-full mt-[2.3025rem]">
          <div tw="text-[1.125rem] leading-[1.534rem] tracking-[-0.00375rem]">Password</div>
          <Link href="#" tw="text-[1.125rem] leading-[1.534375rem] tracking-[-0.00375rem]">
            Forget Password?
          </Link>
        </div>
      ),
      name: 'password',
      inputType: 'PasswordField',
      colSpan: tw`w-full`,
      validate: yup.string().trim().required(),
      placeholder: '••••••',
      labelCss: tw` text-[1.125rem] leading-[1.534375rem] tracking-[0.00375rem] mb-[0.5625rem]`,
      defaultValue: '',
      sx: {
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
          ...tw`bg-gray-200 rounded-md h-[3.5rem] w-full !text-[2.5rem] mt-[0.25rem]`,
          '& input': {
            ...tw` tracking-[0.3125rem] py-0 pt-0 transition-opacity duration-300 ease-in-out opacity-70 focus:opacity-100 border rounded`,
          },

          '& .MuiInputBase-input': {
            ...tw` tracking-[0.3125rem] `,
          },
        },
      },
    },
    {
      inputType: 'CheckboxField',
      name: 'conditions',
      containerCss: tw`mt-[0.5rem] w-full ml-[-0.875rem]`,
      colSpan: tw`w-full`,
      options: [
        {
          checkboxLabelCss: tw`text-[1.125rem] ml-[0.25rem] flex leading-[1.534375rem] tracking-[0.00375rem] mt-[0.5rem] w-[30rem]`,
          value: '',
          label: 'I accept terms and conditions',
          disabled: false, // Nếu cần
        },
      ],
    },
  ];

  const { formHandler: signupFormHandle } = useFormHandler<FormSignup>(signupFormStructure);
  const { watch: watchSignupForm, handleSubmit } = signupFormHandle;

  return {
    handleSignup: handleSubmit(handleSignup),
    signupFormHandle,
    signupFormStructure,
    watchSignupForm,
  };
};
