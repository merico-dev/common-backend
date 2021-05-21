"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectServices = exports.getServices = void 0;
// Common-backend depends on node which make cycle dependencies.
// So use variables injected by node to fix that.
// TODO: Refactor out this
let _services;
exports.getServices = () => _services;
exports.injectServices = (services) => {
    _services = services;
};
