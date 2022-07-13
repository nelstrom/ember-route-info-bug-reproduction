import { module, test } from 'qunit';
import { setupTest } from 'scratchpad/tests/helpers';

module('Unit | Route | accounts/account', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:accounts/account');
    assert.ok(route);
  });
});
