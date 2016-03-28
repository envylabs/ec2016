# EmberConf 2016 &mdash; Intermediate Ember

## Level 3, Challenge 4

With Models now connected to the application, it's time to give them
functionality.

Additionally, because the existing acceptance tests already cover all of these
properties, we do not need to add Model tests.

1. Update the Poll Model to have a `voteCount` property. This should be an
   alias for `votes.length`.

2. Update the Option Model to have a `voteCount` property. This should return
   the _number of votes_ from its poll where the option voted for is itself.

    **Note:** You will probably want to use `.filterBy('option', this)` to
    filter the poll's votes collection.

3. Add a `toggleOption(option)` method to Vote. This should set the Vote's
   `option` property to the `option` given.

4. Update the `polls/poll/index` Template to send a `toggleOption` Action,
   passing the vote (model) and option, when an Option's button is clicked.

5. Update the `polls.poll.index` Route to handle the `toggleOption(vote, option)`
   Action by calling your `vote.toggleOption(option)` method.

6. Update the `polls/poll/results` Template to display your `option.voteCount`.
