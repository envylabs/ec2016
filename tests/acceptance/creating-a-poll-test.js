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

test('submitting the poll takes you to the voting page', function(assert) {
  visit('/');
  fillIn('#question', 'Which of the following is NOT part of the Woodland Wanderer Way?');
  fillIn('.option:eq(0)', 'Honesty');
  fillIn('.option:eq(1)', 'Integrity');
  fillIn('.option:eq(2)', 'Impatience');
  click('.btn--form');

  andThen(function() {
    assert.equal(currentRouteName(), 'polls.poll.index', 'it goes to the voting page');

    assert.equal(findWithAssert('h3').text().trim(), 'Which of the following is NOT part of the Woodland Wanderer Way?');
    assert.equal(findWithAssert('.list--answer li:eq(0) span').text().trim(), 'Honesty');
    assert.equal(findWithAssert('.list--answer li:eq(1) span').text().trim(), 'Integrity');
    assert.equal(findWithAssert('.list--answer li:eq(2) span').text().trim(), 'Impatience');
  });
});
