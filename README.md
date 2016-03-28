# EmberConf 2016 &mdash; Intermediate Ember

## Level 4, Challenge 2

As a bonus, if you do not want to use your custom `eq` helper, you can `ember
install ember-truth-helpers` and use theirs! This _may_ not be a good idea if
the WiFi network is bad!

The only remaining functionality to implement is your last, failing test. Let's
tackle that vote percentage on the results page.

1. Use Ember CLI to generate a new Component called `option-tally`. This
   Component is going to manage the percentage calculation and display of the
   option result (`3 votes (33%)`).

2. In the generated Component tests, add a new test to ensure that it properly
   displays `0 votes (0%)`. To do that ensure that when the Component is given
   `vote` and `option` objects which both have `0` `voteCount`s, it returns the
   expected text.

    **Reminder:** Calling `this.$()` will return the rendered page context. And
    don't forget to trim the text!

3. Update the Component to add a computed `percentage` property which divides
   the `option.voteCount` by the `poll.voteCount`. Remember to avoid dividing
   by zero!

4. Update the Component's Template to display the `option.voteCount` and use
   `format-number` to display a pretty percentage (`"0%"`). You'll need to
   install the `ember-cli-format-number` Addon to gain that Helper (unless you
   want to build it yourself!).

    **Note:** You will likely need to restart your test and development server
    to pickup the new Addon.

5. Add tests for non-zero `voteCount`s to ensure the Component is
   rendering correctly and for fractional percentages to ensure the
   pretty-printed percentages are working (1 / 3 = 0.333333).

6. Update the `polls/poll/results` Template to use your `option-tally`
   component, remembering to pass it the option and poll.
