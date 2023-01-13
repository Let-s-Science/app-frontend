/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { RegisterRequest } from '../models/RegisterRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public postRegister(
        requestBody: RegisterRequest,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/register',
            body: requestBody,
            mediaType: 'application/json; charset=utf-8',
        });
    }

    /**
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public postLogin(
        requestBody: LoginRequest,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/login',
            body: requestBody,
            mediaType: 'application/json; charset=utf-8',
        });
    }

    /**
     * @returns string
     * @throws ApiError
     */
    public getRestricted(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/restricted',
        });
    }

}
