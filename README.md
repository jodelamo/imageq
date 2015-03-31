# ImagEQ

Simple image comparison.

## Install

```zsh
npm install imageq --save
```

## Usage

```javascript
var imageq = require('imageq');

var image1 = 'image1.png';
var image2 = 'image2.png';

imageq(image1, image2).then(function (identical) {
  if (identical) {
    // ...
  }
});
```
