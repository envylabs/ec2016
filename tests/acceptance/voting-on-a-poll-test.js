import { test } from 'qunit';
import moduleForAcceptance from 'quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | voting on a poll');

test('casting a vote transitions to the results page', function(assert) {
  visit('/polls/1');
  click('.list--answer button:eq(0)');
  click('.btn--vote');

  andThen(function() {
    assert.equal(currentRouteName(), 'polls.poll.results', 'it transitions to the results page');

    assert.equal(findWithAssert('.list--answer li:eq(0)').text().trim(), 'Honesty');
    assert.equal(findWithAssert('.progress-info:eq(0)').text().trim(), '1 votes (100%)');

    assert.equal(findWithAssert('.list--answer li:eq(1)').text().trim(), 'Integrity');
    assert.equal(findWithAssert('.progress-info:eq(1)').text().trim(), '0 votes (0%)');

    assert.equal(findWithAssert('.list--answer li:eq(2)').text().trim(), 'Impatience');
    assert.equal(findWithAssert('.progress-info:eq(2)').text().trim(), '0 votes (0%)');
  });
});
