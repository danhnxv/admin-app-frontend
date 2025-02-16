'use client';

import React, { FC } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form/dist/types';
import { FormProvider } from 'react-hook-form';

import tw, { TwStyle } from 'twin.macro';
import { FormInputGenericProps, FormInputTextField } from './types';
import { FormTextField } from './components';

interface Props {
  formHandler: UseFormReturn<FieldValues, any> | UseFormReturn<any, any>;
  formStructure: FormInputGenericProps[];
  defaultValues?: FieldValues;
  gridCols?: TwStyle;
  spacing?: TwStyle;
  invisible?: boolean;
  disableInputFields?: boolean;
}

export type InputRenderProps = FormInputGenericProps & {
  defaultValues?: FieldValues;
};

const InputRender: FC<InputRenderProps> = (props) => {
  const { inputType, defaultValues, ...otherProps } = props;

  switch (inputType) {
    case 'TextField':
      return <FormTextField defaultValue={defaultValues?.[props.name]} {...(otherProps as FormInputTextField)} />;

    default:
      return <div>Invalid inputType</div>;
  }
};

export const InputGroup: React.FC<Props> = ({
  formHandler,
  formStructure,
  defaultValues,
  invisible,
  disableInputFields,
  gridCols = tw`grid-cols-12`,
  spacing = tw`gap-x-2 gap-y-1.5`,
}) => {
  return (
    <div css={[tw`grid`, gridCols, spacing, invisible && tw`invisible`]}>
      <FormProvider {...formHandler}>
        {formStructure.map((field, index) => (
          <div key={index} css={[field.colSpan]}>
            <InputRender {...field} defaultValues={defaultValues} disabled={disableInputFields ?? field.disabled} />
          </div>
        ))}
      </FormProvider>
    </div>
  );
};
