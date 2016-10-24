import Ember from 'ember';
import PreferencesInitializerInitializer from 'dummy/initializers/preferences-initializer';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | preferences initializer', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  PreferencesInitializerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
