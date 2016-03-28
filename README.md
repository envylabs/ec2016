# EmberConf 2016 &mdash; Intermediate Ember

## Level 4, Challenge 1

The voting system now works. However, users get no feedback when they make
their selections.

1. In the `voting-on-a-poll` acceptance test, make sure that no Option buttons
   are selected. To do that, locate all of the option buttons on the voting
   page and ensure that none of them have an `is-selected` class.

    **Hint:** You'll probably want to use jQuery's `.is(…)` or `.hasClass(…)`
    method. The `is` method returns `true` when the node(s) match the given
    selector.

    ```javascript
    findWithAssert('…').is('.is-selected') // true
    // or
    findWithAssert('…').hasClass('is-selected') // true
    ```

2. Test the option button functionality by locating the first option button on
   the page. Click it and ensure that button now has the `is-selected` class.
   Click it again, and make sure it is no longer `is-selected`.

    These tests will fail, because you haven't yet setup the `is-selected`
    logic!

3. To determine if an Option `is-selected`, you'll need to identify when the
   Vote's `option` equals the current Option. However, you can't have complex
   logic in your Templates!

    ```handlebars
    <!-- This will not work! -->
    <div class="{{#if model.option === option "is-selected"}}">
    ```

    So, create an `eq` Helper using Ember CLI's generators. Implement it by
    testing that the first two elements of the given array equates (`arr[0] ===
    arr[1]`).

    Update the generated Helper tests to ensure that your function acts as you
    expect by passing it various parameters and verifying the results. Try
    things like `[1, 1]`, `[null, undefined]`, `[0, 0]`.

4. Update the `polls/poll/index` Template to add a conditional class to the
   option button. You'll need to use your `eq` helper as a sub expression to an
   `if`!
