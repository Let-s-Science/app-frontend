/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionType } from './QuestionType';

export type APIQuizQuestion = {
    readonly id: string;
    quiz_id: string;
    question: string;
    data: QuestionType;
};

