'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FieldValues, Mode, useForm } from 'react-hook-form';
import { useSchema } from '../useSchema';
import { FormInputGenericProps } from '@/components/InputGroup/types';

interface OptionsType {
  mode: Mode;
}

export const useFormHandler = <Type extends FieldValues>(
  initialFormStructure: FormInputGenericProps[],
  excludes?: Array<[string, string]>,
  options?: OptionsType,
) => {
  const [formStructure, setFormStructure] = useState<FormInputGenericProps[]>(initialFormStructure);
  const schema = useSchema(formStructure, excludes);
  const formHandler = useForm<Type>({ mode: options?.mode || 'all', resolver: yupResolver(schema) as any });

  return { formHandler, formStructure, setFormStructure };
};
