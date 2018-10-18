import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | metodologia', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:metodologia');
    assert.ok(route);
  });
});
