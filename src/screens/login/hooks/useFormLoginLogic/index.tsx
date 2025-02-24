import tw from 'twin.macro';
import * as yup from 'yup';
import { useFormHandler } from '@/hooks';
import { FormInputGenericProps } from '@/components/InputGroup/types';
import Link from 'next/link';
import { FormLogin } from '../../types';
import { usePostLogin } from '../../apis/usePostLogin';
import { useRouter } from 'next/navigation';

export const useFormLoginLogic = () => {
  const { push } = useRouter();
  // const [, setAuthData] = useAtom(authAtom);

  const { mutate } = usePostLogin({
    onSuccess: () => {
      push('/dashboard');
    },
  });

  const handleLogin = (value: FormLogin) => {
    mutate({ email: value.email, password: value.password });
  };

  const loginFormStructure: FormInputGenericProps[] = [
    {
      containerCss: tw`mt-[2.3125rem] w-full`,
      label: 'Email address:',
      name: 'email',
      inputType: 'TextField',
      colSpan: tw`w-full`,
      validate: yup.string().trim().required(),
      placeholder: 'esteban_schiller@gmail.com',
      labelCss: tw` text-[1.125rem] leading-[1.534375rem] tracking-[0.00375rem] mb-[0.625rem]`,
      defaultValue: '',
      sx: {
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
          ...tw`bg-gray-200  rounded-md h-[3.5rem] w-full`,
        },
      },
    },
    {
      containerCss: tw`mt-[2.3125rem] w-full`,
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
          ...tw`bg-gray-200 rounded-md h-[3.5rem] w-full  mt-[0.25rem]`,
          '& input': {
            ...tw`py-0  transition-opacity duration-300 ease-in-out opacity-70 focus:opacity-100 border rounded`,
          },
          '& input[type="password"]': {
            ...tw`text-[2.5rem] tracking-[0.3125rem]`,
          },
        },
      },
    },
    {
      inputType: 'CheckboxField',
      name: 'rememberMe',
      containerCss: tw`mt-[0.5rem] w-full ml-[-0.875rem]`,
      colSpan: tw`w-full`,
      options: [
        {
          checkboxLabelCss: tw`text-[1.125rem] flex leading-[1.534375rem] tracking-[0.00375rem] mt-2 w-[30rem]`,
          value: 'rememberMe',
          label: 'Remember Password',
          disabled: false, // Nếu cần
        },
      ],
    },
  ];

  const { formHandler: loginFormHandle } = useFormHandler<FormLogin>(loginFormStructure);
  const { watch: watchLoginForm, handleSubmit } = loginFormHandle;

  return {
    handleLogin: handleSubmit(handleLogin),

    loginFormHandle,
    loginFormStructure,
    watchLoginForm,
  };
};
