'use client';
import 'twin.macro';
import React from 'react';
import { useFormLoginLogic } from '../../hooks';
import CloseIcon from 'public/assets/components/FormLogin/close.svg';

export const FormLogin = () => {
  const { handleLogin } = useFormLoginLogic();
  return (
    <div onClick={handleLogin}>
      Login Page
      <CloseIcon tw="w-10 h-10" />
    </div>
  );
};
