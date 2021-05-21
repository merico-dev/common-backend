export const CALL_UNREGISTERED = 'CALL_UNREGISTERED';
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
export const NO_PERMISSION = 'NO_PERMISSION';
export const PASSWORD_MISMATCH = 'PASSWORD_MISMATCH';
export const STATE_INVALID = 'STATE_INVALID';
export const NOT_FOUND = 'NOT_FOUND';
export const INVALID_VALUE = 'INVALID_VALUE';
export const SERVER_ERROR = 'SERVER_ERROR';
export const OPERATION_TIMEOUT = 'OPERATION_TIMEOUT';
export const ENTITY_DUPLICATED = 'ENTITY_DUPLICATED';
export const EMAIL_TAKEN_ERROR = 'EMAIL_TAKEN';
export const INVITATION_EXISTS_ERROR = 'INVITATION_EXISTS';
export const INVITATION_NOT_EXISTS_ERROR = 'INVITATION_NOT_EXISTS';
export const NOT_IMPLEMENTED_YET = 'NOT_IMPLEMENTED_YET';
export const VALIDATION_FAILED = 'VALIDATION_FAILED';
export const POSSIBLE_DEADLOCK_DETECTED = 'POSSIBLE_DEADLOCK_DETECTED';
export const NOT_SUPPORTED = 'NOT_SUPPORTED';

export class ApiError<T extends object & { message?: string }> extends Error {
  public code: string;
  public detail: T | null;

  constructor(code: string, detail: T | null = null) {
    super();
    this.code = code;
    this.detail = detail;
  }

  get message() {
    return this.code + ' :' + ((this.detail && this.detail.message) || '');
  }
}

interface ErrorDetail {
  message?: string
}

export const buildApiError = (e: Error, code: string): ApiError<ErrorDetail> => {
  let ne = e as ApiError<ErrorDetail>;
  ne.code = code;
  ne.detail = { message: e.message || e.stack };
  return ne;
};
