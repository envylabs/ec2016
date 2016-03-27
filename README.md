# EmberConf 2016 &mdash; Intermediate Ember

## Level 1, Challenge 1

Customize `app/index.html` by adding the design assets and make sure your Live
Reload works.

1. Set the `title` of the app to `Wilderness Safety Quiz`.

2. Add the Google Fonts stylesheet link tag from the mockups to load the Cutive
   and Montserrat fonts (if the conference WiFi is spotty, this can be
   omitted!). This should be added above the application's `link` tags.

    ```html
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Cutive|Montserrat:400,700">
    ```

3. Copy in the static image assets. First, create a `public/assets/images`
   directory. Then copy `mockups/assets/images/*` into it.

4. Copy in the static stylesheets from the mockup. Copy the
   `mockups/assets/stylesheets/*` into the Ember CLI-provided `app/styles`
   directory. This will overwrite the generated `app/styles/app.css` file.
