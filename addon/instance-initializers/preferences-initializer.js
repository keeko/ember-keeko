export function initialize(app) {
  app.lookup('service:preferences');
}

export default {
  name: 'preferences-initializer',
  initialize
};
