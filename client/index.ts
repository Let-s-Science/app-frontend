/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { APIClient } from './APIClient';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { APIQuiz } from './models/APIQuiz';
export type { APIQuizQuestion } from './models/APIQuizQuestion';
export type { LoginRequest } from './models/LoginRequest';
export type { MultipleChoiceQuestion } from './models/MultipleChoiceQuestion';
export type { NumericQuestion } from './models/NumericQuestion';
export type { QuestionType } from './models/QuestionType';
export type { QuestionType_MultipleChoiceQuestion } from './models/QuestionType_MultipleChoiceQuestion';
export type { QuestionType_NumericQuestion } from './models/QuestionType_NumericQuestion';
export type { QuestionType_TrueOrFalseQuestion } from './models/QuestionType_TrueOrFalseQuestion';
export type { RegisterRequest } from './models/RegisterRequest';
export type { TrueOrFalseQuestion } from './models/TrueOrFalseQuestion';

export { QuizService } from './services/QuizService';
export { UserService } from './services/UserService';
