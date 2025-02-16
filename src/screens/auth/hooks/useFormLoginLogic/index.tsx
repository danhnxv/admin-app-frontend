import { useAtom } from 'jotai';
import { authAtom } from '../../stores';
import { useGetFacts, usePostFact } from '../../apis';
import { APIErrorResponse } from '@/types';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import * as yup from 'yup';
import { useFormHandler } from '@/hooks';
import { FormInputGenericProps } from '@/components/InputGroup/types';

export const useFormLoginLogic = () => {
  const [, setAuthData] = useAtom(authAtom);
  const { data, isLoading } = useGetFacts();

  const { mutate } = usePostFact({
    onSuccess: () => {
      toast.success('Add success');
    },
    onError: (error: APIErrorResponse) => {
      toast.error(error.response?.data.message);
    },
  });

  const handleLogin = () => {
    setAuthData({
      token: '123',
      user: { firstName: 'Danh', lastName: 'Ngo', id: 1 },
    });
    mutate({ fact: 'test' });
  };

  const loginFormStructure: FormInputGenericProps[] = [
    {
      label: 'Username',
      name: 'userName',
      inputType: 'TextField',
      colSpan: tw`col-span-12`,
      validate: yup.string().trim().required(),
      placeholder: 'Username',
      labelCss: tw`!text-[.9375rem]`,
      defaultValue: '',
    },
  ];

  const { formHandler: loginFormHandle } = useFormHandler(loginFormStructure);
  const { watch: watchLoginForm, handleSubmit } = loginFormHandle;

  return {
    handleLogin,
    data,
    isLoading,
    loginFormHandle,
    loginFormStructure,
    watchLoginForm,
    handleSubmit,
  };
};
