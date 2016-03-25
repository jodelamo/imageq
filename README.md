# ImagEQ

Simple image comparison.

## Prerequisites

[`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
availability. If your environment doesn't support it, you need a polyfill, like
this one: [`es6-promise`](https://github.com/stefanpenner/es6-promise)

## Install

```zsh
npm install --save imageq
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
