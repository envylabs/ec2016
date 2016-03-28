# EmberConf 2016 &mdash; Intermediate Ember

## Level 3, Challenge 3

Update the Routes and Templates to use your Store and Models.

**Note:** Use the fixture data in the Store to identify the appropriate
model attributes to use (for example: `poll.prompt`, `option.label`).

1. Update the model hook of the `polls` Route. It should return the Store's
   `findAllPolls()` result. Then update the `polls` Template to use the new
   model.

2. Update the model hook of the `polls.poll` Route. This should find a Poll by
   ID using the Store's `findPoll` method and return the result. Then update
   the `polls/poll/index` and `polls/poll/results` Templates to use the
   returned Poll record model.

    Since we don't yet have functionality for counting votes in the models,
    just replace the counts with `XX` to remind yourself to fix it later. This
    will leave you with _some_ failing tests at the end of this level.

3. Update the `index` Route to:

    * Use `createPoll` as the `model` hook
    * Call `savePoll` from within the `createPoll` Action handler

4. Update the `index` Template to use the `model`.

5. Update the `polls.poll.index` Route to:

    * Use `createPoll` as the `model` hook
    * Call `savePoll` from within the `castVote` Action handler

6. Update the `polls/poll/index` Template to use the `model`. Remember that the
   model here is a Vote, so to list Options, you'll need to access
   `model.poll.options`.
