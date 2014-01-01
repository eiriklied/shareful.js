# Shareful.js

When all you want is to share a text (copy to clipboard), and dont want to care about flash dependencies or where in your layout to put a text box to hold the content.

All you care about is that you need to give the user a super simple popup with some text

```javascript
// just basic sharing
Shareful.share('http://my.url/for-sharing');

// with a heading
Shareful.share({ 
  heading: 'Here you go!',
  text: 'The text to share'
});

```


## Styling

Shareful will create markup for two elements in the page. A `<div class="sf-overlay"/>` and a `<div class="sf-box"/>` (the last one with child elements). You can style these as you wish. An example css is included here.

## Dependencies

Shareful assumes jQuery is present and uses it, however it is not a jQuery plugin.
