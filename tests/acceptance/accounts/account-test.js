import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'scratchpad/tests/helpers';

module('Acceptance | accounts/account', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /accounts/account', async function (assert) {
    await visit('/accounts/account');

    assert.strictEqual(currentURL(), '/accounts/account');
  });
});
