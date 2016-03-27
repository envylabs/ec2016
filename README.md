# EmberConf 2016 &mdash; Intermediate Ember

## Level 2, Challenge 1

The quiz application has roughly three states: 1) creating a poll, 2)
voting on an existing poll, and 3) viewing the results of a poll.

You're going to test the application endpoints and "implement" them using just
the static mockup files.

1. Generate an acceptance test file named "creating-a-poll". In it, replace the
   generated test with one to ensure that the poll form is displayed on the
   landing page of the application (`/`). Be sure to check for the question
   prompt and correct number of options (3). Use the mockup file's
   (`mockup/index.html`) content as your guide.

2. Copy the body content (meaning: non-layout content that you previously
   extracted into the `application` Template) from the mockup's poll form
   (in `mockup/index.html`) into your application's `index` Template, which
   you'll need to create.
