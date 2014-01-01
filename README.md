# Sharefully.js

When all you want is to share a text (copy to clipboard), and dont want to care about layout. 

All you care about is that you need to give the user a popup with some text

```javascript
// just basic sharing
Sharefully.share('http://my.url/for-sharing');

// with a label text
Sharefully.share({ 
  label: 'Here you go!',
  text: 'The text to share'
});

```


## Styling

Sharefully will create markup for two elements in the page. A `<div class="sf-overlay"/>` and a `<div class="sf-box"/>` (the last one with child elements). You can style these as you wish. An example css is included here.

## Dependencies

jQuery is used
