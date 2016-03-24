# ImagEQ

Simple image comparison.

## Install

```zsh
npm install imageq --save
```

## Usage

```javascript
const imageq = require('imageq');

const image1 = 'image1.png';
const image2 = 'image2.png';

imageq(image1, image2).then(function (identical) {
  if (identical) {
    // ...
  }
});
```

## License

MIT
