import { test } from 'qunit';
import moduleForAcceptance from 'quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | render layout');

test('renders the header', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(findWithAssert('h1').text().trim(), 'Wilderness Safety Quiz');
  });
});
