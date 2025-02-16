'use client';

import { FormInputGenericProps } from '@/components/InputGroup/types';
import * as yup from 'yup';

export const useSchema = (formStructure: FormInputGenericProps[], excludes?: Array<[string, string]>) => {
  const schema = formStructure.reduce((acc, field) => {
    return {
      ...acc,
      [field.name]: field.validate,
    };
  }, {});

  return yup.object().shape(schema, excludes);
};
