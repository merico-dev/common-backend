export declare const CALL_UNREGISTERED = "CALL_UNREGISTERED";
export declare const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export declare const NO_PERMISSION = "NO_PERMISSION";
export declare const PASSWORD_MISMATCH = "PASSWORD_MISMATCH";
export declare const STATE_INVALID = "STATE_INVALID";
export declare const NOT_FOUND = "NOT_FOUND";
export declare const INVALID_VALUE = "INVALID_VALUE";
export declare const SERVER_ERROR = "SERVER_ERROR";
export declare const OPERATION_TIMEOUT = "OPERATION_TIMEOUT";
export declare const ENTITY_DUPLICATED = "ENTITY_DUPLICATED";
export declare const EMAIL_TAKEN_ERROR = "EMAIL_TAKEN";
export declare const INVITATION_EXISTS_ERROR = "INVITATION_EXISTS";
export declare const INVITATION_NOT_EXISTS_ERROR = "INVITATION_NOT_EXISTS";
export declare const NOT_IMPLEMENTED_YET = "NOT_IMPLEMENTED_YET";
export declare const VALIDATION_FAILED = "VALIDATION_FAILED";
export declare const POSSIBLE_DEADLOCK_DETECTED = "POSSIBLE_DEADLOCK_DETECTED";
export declare const NOT_SUPPORTED = "NOT_SUPPORTED";
export declare class ApiError<T extends object & {
    message?: string;
}> extends Error {
    code: string;
    detail: T | null;
    constructor(code: string, detail?: T | null);
    get message(): string;
}
interface ErrorDetail {
    message?: string;
}
export declare const buildApiError: (e: Error, code: string) => ApiError<ErrorDetail>;
export {};
