/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { APIQuizQuestion } from './APIQuizQuestion';

export type APIQuiz = {
    readonly id: string;
    title: string;
    readonly created_at: string;
    readonly created_by: string;
    questions: Array<APIQuizQuestion>;
};

