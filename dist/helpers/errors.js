"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApiError = exports.ApiError = exports.NOT_SUPPORTED = exports.POSSIBLE_DEADLOCK_DETECTED = exports.VALIDATION_FAILED = exports.NOT_IMPLEMENTED_YET = exports.INVITATION_NOT_EXISTS_ERROR = exports.INVITATION_EXISTS_ERROR = exports.EMAIL_TAKEN_ERROR = exports.ENTITY_DUPLICATED = exports.OPERATION_TIMEOUT = exports.SERVER_ERROR = exports.INVALID_VALUE = exports.NOT_FOUND = exports.STATE_INVALID = exports.PASSWORD_MISMATCH = exports.NO_PERMISSION = exports.NOT_AUTHENTICATED = exports.CALL_UNREGISTERED = void 0;
exports.CALL_UNREGISTERED = 'CALL_UNREGISTERED';
exports.NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
exports.NO_PERMISSION = 'NO_PERMISSION';
exports.PASSWORD_MISMATCH = 'PASSWORD_MISMATCH';
exports.STATE_INVALID = 'STATE_INVALID';
exports.NOT_FOUND = 'NOT_FOUND';
exports.INVALID_VALUE = 'INVALID_VALUE';
exports.SERVER_ERROR = 'SERVER_ERROR';
exports.OPERATION_TIMEOUT = 'OPERATION_TIMEOUT';
exports.ENTITY_DUPLICATED = 'ENTITY_DUPLICATED';
exports.EMAIL_TAKEN_ERROR = 'EMAIL_TAKEN';
exports.INVITATION_EXISTS_ERROR = 'INVITATION_EXISTS';
exports.INVITATION_NOT_EXISTS_ERROR = 'INVITATION_NOT_EXISTS';
exports.NOT_IMPLEMENTED_YET = 'NOT_IMPLEMENTED_YET';
exports.VALIDATION_FAILED = 'VALIDATION_FAILED';
exports.POSSIBLE_DEADLOCK_DETECTED = 'POSSIBLE_DEADLOCK_DETECTED';
exports.NOT_SUPPORTED = 'NOT_SUPPORTED';
class ApiError extends Error {
    constructor(code, detail = null) {
        super();
        this.code = code;
        this.detail = detail;
    }
    get message() {
        return this.code + ' :' + ((this.detail && this.detail.message) || '');
    }
}
exports.ApiError = ApiError;
exports.buildApiError = (e, code) => {
    let ne = e;
    ne.code = code;
    ne.detail = { message: e.message || e.stack };
    return ne;
};
