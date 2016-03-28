# EmberConf 2016 &mdash; Intermediate Ember

## Level 5, Challenge 2

You've got Ember Data Models in place and the Ember Data Store available. The
only part left is connecting it to your app through your Routes. Update your
Routes to use the Ember Data Store and finish this off!

1. Update the `index` Route.

    1. Update the `model` hook to create and return a new Poll record which
       contains three new, empty Option records using Ember Data's create
       methods.

    2. Update the `createPoll` Action handler to save the given `poll`. Wait to
       transition to the next Route until after the poll (and its options!!)
       save successfully.

2. Update the `polls` Route to find all of the Poll records using Ember Data's
   finder method.

3. Remove your `polls.poll` Route. The default behavior of Ember and Ember Data
   to recognize the `poll_id` param and automatically find the correct Poll is
   _exactly_ what we want to happen here.

4. Update the `polls.poll.index` Route.

    1. Update the `model` hook to return a new Vote record. Don't forget that
       you'll need to give the vote the appropriate poll, use `modelFor` or
       `find`.

    2. Update the `castVote` Action handler to save the given `vote`. Only
       transition to the results Route after the save has completed.

5. If you've still got your `polls.poll.results` Route, delete it. It should be
   empty, anyway. Kill it with fire. :fire:

6. You can also remove any `store: Ember.inject.service()` calls in your
   Routes. Ember Data has already injected the store for you. :fire:
