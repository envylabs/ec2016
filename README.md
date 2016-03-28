# EmberConf 2016 &mdash; Intermediate Ember

## Level 5, Challenge 1

Now that the tests are all passing, it's time to break it all again. Let's get
some Ember Data in here!

1. Use Ember CLI to generate Ember Data Models for the application Models. A
   summary of the properties are listed below. Make sure not to lose your
   existing Model functionality when you overwrite them!

    * `Option` &ndash; label (String), poll (belongsTo)
    * `Poll` &ndash; options (hasMany), prompt (String), votes (hasMany)
    * `Vote` &ndash; option (belongsTo), poll (belongsTo)

2. Open the generated Model files and mark all of the relationships (both
   `hasMany` and `belongsTo` as being `async: false`). I've already configured
   Mirage for you.

3. Remove the custom `store` Service (and it's still-empty test at
   `tests/unit/services/store-test.js`).

4. `npm install` and `bower install`. Then restart your test and development
   servers. This brings back Ember Data's Store and ensures that Mirage is
   loaded and ready.

5. Look at _all_ of the failing tests. You'll fix them in the next Challenge.
