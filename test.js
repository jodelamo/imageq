const test = require('ava');
const imageq = require('./');

test('throw an error if its argument is not an array', t => {
  t.throws(imageq);
});

test('reject with an error if an image fails to load', async t => {
  const images = [
    './media/1.png',
    './media/does-not-exist.png'
  ];

  await imageq(images)
    .catch(err => {
      t.not(err, undefined);
    });
});

test('return true for identical images', async t => {
  const images = [
    './media/2.png',
    './media/3.png'
  ];

  await imageq(images)
    .then(identical => t.is(identical, true))
    .catch(err => t.fail(err));
});

test('return false for different images', async t => {
  const images = [
    './media/1.png',
    './media/2.png',
    './media/3.png'
  ];

  await imageq(images)
    .then(identical => t.is(identical, false))
    .catch(err => t.fail(err));
});
