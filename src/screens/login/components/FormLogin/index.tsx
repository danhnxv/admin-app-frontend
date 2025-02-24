'use client';
import 'twin.macro';
import React from 'react';

import { InputGroup } from '@/components';

import Link from 'next/link';
import { Button } from '@/components/Button';
import { useFormLoginLogic } from '../../hooks';
import tw from 'twin.macro';

export const FormLogin = () => {
  const { handleLogin, loginFormHandle, loginFormStructure } = useFormLoginLogic();
  return (
    <div tw="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-[57px] rounded-3xl w-[39.375rem] h-[45.96rem]">
      <div tw="text-[2rem] leading-[2.7225rem] tracking-[0.054375rem] mt-[5.625rem] text-center">Login to Account</div>
      <div tw=" text-[1.125rem] leading-[1.534375rem] tracking-[0.00275rem] mt-[1rem] text-center">
        Please enter your email and password to continue
      </div>
      <InputGroup formStructure={loginFormStructure} formHandler={loginFormHandle} />

      <Button sx={tw`mx-auto mt-[2.6425rem] ml-[3rem]`} variant="primary" size="medium" onClick={handleLogin}>
        Sign In
      </Button>

      <div tw="mt-[19px] mx-auto text-center text-[1.125rem] leading-[1.364rem] tracking-[0.07px]">
        <span tw=" text-right ml-[8px] ">Don’t have an account? </span>
        <Link rel="stylesheet" href="/signup" tw=" text-right underline  text-Cornflower_Blue">
          Create Account
        </Link>
      </div>
    </div>
  );
};
