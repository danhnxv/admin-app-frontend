'use client';
import 'twin.macro';
import React from 'react';

import { InputGroup } from '@/components';

import Link from 'next/link';
import { Button } from '@/components/Button';
import tw from 'twin.macro';
import { useFormSignupLogic } from '../../hooks/useFormSignupLogic';

export const FormSignUp = () => {
  const { handleSignup, signupFormHandle, signupFormStructure, watchSignupForm } = useFormSignupLogic();
  console.log('🚀 ~ FormSignUp ~ watchSignupForm:', typeof watchSignupForm().conditions);

  return (
    <form tw="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-[57px] rounded-3xl w-[39.375rem] h-[51.5625rem]">
      <div tw="text-[2rem] leading-[2.728125rem] tracking-[-0.046875rem] mt-[3.75rem] text-center ml-[22px] font-bold">
        Create an Account
      </div>
      <div tw=" text-[1.125rem] leading-[1.534375rem] tracking-[0.00275rem] mt-[1rem] text-center">
        Create a account to continue
      </div>
      <InputGroup formStructure={signupFormStructure} formHandler={signupFormHandle} />

      <Button
        sx={tw`mx-auto mt-[2.6225rem] flex !justify-center `}
        variant="primary"
        size="medium"
        onClick={handleSignup}
        disabled={!watchSignupForm().conditions}
      >
        Sign Up
      </Button>

      <div tw="mt-[1.1875rem] mx-auto text-center text-[1.125rem] leading-[1.534375rem] tracking-[-0.00375rem]">
        <span tw=" text-right ml-[0.875rem] ">Already have an account? </span>
        <Link href="/login" tw="text-right underline  text-Cornflower_Blue">
          Login
        </Link>
      </div>
    </form>
  );
};
