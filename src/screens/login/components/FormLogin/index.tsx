'use client';
import 'twin.macro';
import React from 'react';
import { useFormLoginLogic } from '../../hooks';
import CloseIcon from 'public/assets/components/FormLogin/close.svg';
import { InputGroup } from '@/components';

export const FormLogin = () => {
  const { handleLogin, loginFormHandle, loginFormStructure } = useFormLoginLogic();
  return (
    <div>
      <span onClick={handleLogin}>Login Page</span>
      <CloseIcon tw="w-10 h-10" />
      <InputGroup formStructure={loginFormStructure} formHandler={loginFormHandle} />
    </div>
  );
};
