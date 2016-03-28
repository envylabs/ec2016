# EmberConf 2016 &mdash; Intermediate Ember

## Level 2, Challenge 3

_Reminder:_ The quiz application has roughly three states: 1) creating a poll,
2) voting on an existing poll, and 3) viewing the results of a poll.

With Polls created, it's time to "test" the voting. For now, we'll implement
the interactions, but we won't actually modify any data yet. Instead, we'll
continue rendering and relying on the content of the mockup HTML.

1. Generate a "voting-on-a-poll" acceptance test. Add a test for casting a
   vote. To do that, visit a poll (`/polls/1`), click on the first option's
   button to "select" it. Then, submit the vote by clicking the submit button.

    You should test to ensure you are transitioned to the `polls.poll.results`
    Route. And ensure that the option you voted on shows 1 vote applied.

2. Whoops! Ember is complaining about not finding a Poll model!

    Ember is trying to be smart for us (which normally would be great!) by
    recognizing the "poll_id" as an "_id" parameter. Ember will try to
    automatically find that "poll" model for us and return the one with the
    matching ID. But, we don't yet have a model. :(

    For now, open the `polls/poll` Route and stub out the `model` hook to
    bypass that automatic behavior.

    ```javascript
    import Ember from 'ember';

    export default Ember.Route.extend({
      model() { }
    });
    ```

3. Add an Action to the Vote! button called "castVote" and pass the `model` as
   the only Action argument. Then create a `polls.poll.index` Route to create
   an Action handler which transitions to the `polls.poll.result` Route with
   the given model.
