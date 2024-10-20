import * as yup from 'yup';

import { Question } from '@/entities/question';

import { questionCreateSchema } from '../lib/validation/questionCreateSchema';

export type QuestionCreateFormValues = Omit<Question, 'id' | 'createdBy'>;
export type QuestionCreateSchema = yup.InferType<typeof questionCreateSchema>;
