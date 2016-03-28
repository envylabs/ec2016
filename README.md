# EmberConf 2016 &mdash; Intermediate Ember

## Level 2, Challenge 2

_Reminder:_ The quiz application has roughly three states: 1) creating a poll,
2) voting on an existing poll, and 3) viewing the results of a poll.

With the Poll form displayed, it's time to test the functionality of it.

1. Add a test to the "creating-a-poll" file to ensure that filling out the Poll
   form and clicking on the submit button transitions you to a new
   `polls.poll.index` Route that you'll create, next.

     Use the voting page's mockup data as your form submission test data. So
     for example, your filled in question should be: `Which of the following is
     NOT part of the Woodland Wanderer Way?`.

2. Use `ember generate` to create a new Route for `polls`.

3. Use `ember generate` to create a new Route for `polls/poll` (a `polls.poll`
   Route) whose `path` is a `:poll_id` dynamic segment. This will allow us to
   later load a particular Poll by ID.

4. Use `ember generate` to create a new Route for `polls/poll/results`. This
   will be used later to display Poll voting results.

5. In the Poll form, add an Action called "createPoll" to catch the form
   submission (`on="submit"`) and pass it the `model`. Create an `index` Route
   and add a `createPoll` handler to its `actions` hash to transition to the
   `polls.poll` Route. Don't forget to pass through the `model` to the
   transition call!

6. Back in the "creating-a-poll" test you created in step 1 above, update it to
   add a test which ensures that the Poll data displayed on the voting page
   matches the data which you provided.

    **Hint:** You will likely want to use an `li:eq(…)` element selector to
    test each option displayed.

7. Copy the Poll voting pages mockup content (`mockup/quiz/index.html`) into a
   new `polls/poll/index` Template.
