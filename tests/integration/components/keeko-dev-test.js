import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('keeko-dev', 'Integration | Component | keeko dev', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{keeko-dev}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#keeko-dev}}
      template block text
    {{/keeko-dev}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
