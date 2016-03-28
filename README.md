# EmberConf 2016 &mdash; Intermediate Ember

## Level 3, Challenge 2

**Note:** Because we've added a `store` Service, be sure to restart your test
and development servers. This ensures that our custom Service overrides the
Ember Data-provided `store` service, for now.

We've added data to your Store. Now, you need to implement the Store's methods.

1. We know that we're going to need to the following:

    * List all Polls (`findAllPolls`)
    * Find a Poll by ID (`findPoll(id)`)

    Implement the above methods in the Store.

2. Add a `createPoll` method to the Store to create a new, unsaved Poll record.
   The returned Poll record should contain three Option records.

3. Add a `createVote(poll)` method to the Store. This should return a new Vote
   record whose `poll` property is equal to the given `poll` argument.

4. Implement a `savePoll(poll)` method. This should `pushObject` the given
   `poll` into the private `polls` collection and set an arbitrary, but unique
   ID on it.

5. Finally, implement a `saveVote(vote)` method. This method should get the
   `poll` from the given `vote`. Then, use `pushObject` to insert the given
   `vote` into the Poll's `votes` collection.
