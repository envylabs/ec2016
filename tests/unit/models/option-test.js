import { moduleForModel, test } from 'ember-qunit';

moduleForModel('option', 'Unit | Model | option', {
  // Specify the other units that are required for this test.
  needs: ['model:poll']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
