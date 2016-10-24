import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('keeko-admin-table', 'Integration | Component | keeko admin table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{keeko-admin-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#keeko-admin-table}}
      template block text
    {{/keeko-admin-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
