/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionType_MultipleChoiceQuestion } from './QuestionType_MultipleChoiceQuestion';
import type { QuestionType_NumericQuestion } from './QuestionType_NumericQuestion';
import type { QuestionType_TrueOrFalseQuestion } from './QuestionType_TrueOrFalseQuestion';

export type QuestionType = (QuestionType_MultipleChoiceQuestion | QuestionType_NumericQuestion | QuestionType_TrueOrFalseQuestion);

