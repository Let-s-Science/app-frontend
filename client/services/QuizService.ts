/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIQuiz } from '../models/APIQuiz';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QuizService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public postQuiz(
        requestBody: APIQuiz,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/quiz',
            body: requestBody,
            mediaType: 'application/json; charset=utf-8',
        });
    }

    /**
     * @returns APIQuiz
     * @throws ApiError
     */
    public getQuiz(): CancelablePromise<APIQuiz> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/quiz/{id}',
        });
    }

}
