# imageq

Simple image comparison by temporarily loading images on `canvas` elements and
doing a size and byte to byte comparison.

## Prerequisites

[`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
availability. If your browser doesn't support it, you need a polyfill, like
this one: [`es6-promise`](https://github.com/stefanpenner/es6-promise)

## Install

```zsh
npm install --save imageq
```

## Usage

```javascript
import imageq from 'imageq';

const images = [
  '/path/to/images/1.png',
  '/path/to/images/2.png',
  '/path/to/images/3.png'
];

imageq(images).then(identical => {
  if (identical) {
    // ...
  }
});
```

## License

MIT
