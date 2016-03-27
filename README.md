# EmberConf 2016 &mdash; Intermediate Ember

## Level 1, Challenge 2

Generate and write your first acceptance test.

1. Generate an acceptance test named "render-layout".

2. Replace the generated `test` with a new test to locate and validate the
   contents of the page header (`h1` or `.logo`). The header should eventually
   contain the text "Wilderness Safety Quiz". Don't forget to use
   `findWithAssert` to make sure that the `h1` is on the page.

3. With a test in place, start your Ember CLI testing server (`ember test
   --server`). If you have PhantomJS and Chrome installed, they should
   automatically start testing your application. Otherwise, you can run any
   browser you like and point it to http://localhost:7357/ to run your tests.
   Verify that your tests run and your header test (that you created in step 1)
   is failing.

4. Use the mockups to identify the layout. Look across the three pages of the
   application to figure out what changes and what doesn't. Then, modify the
   `application` Template to add the layout to it. Don't forget to include the
   `{{outlet}}`!

    Or, if you don't want to identify the layout yourself, you can use the
    extracted layout below:

    ```handlebars
    <div class="cell">
      <h1>
        <a href="/" class="logo">
          <b class="srt">Wilderness Safety Quiz</b>
        </a>
      </h1>

      <div class="card">
        <!-- Don't forget the outlet here! -->
      </div>
    </div>
    ```

5. Go ahead and re-implement the logo link using Embers `link-to` helper.
