import { test } from 'qunit';
import moduleForAcceptance from 'quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | creating a poll');

test('the poll form is displayed on the landing page', function(assert) {
  visit('/');

  andThen(function() {
    const question = findWithAssert('#question');
    const options = findWithAssert('.option');

    assert.equal(question.length, 1, 'it displays one question prompt');
    assert.equal(options.length, 3, 'it displays three option labels');
  });
});
