// Common-backend depends on node which make cycle dependencies.
// So use variables injected by node to fix that.
// TODO: Refactor out this
let _services: any;

export const getServices = () => _services;

export const injectServices = (services) => {
  _services = services;
};
