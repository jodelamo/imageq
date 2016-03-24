'use strict';

import imageq from '../';

describe('imageq', () => {

  it('should return true for identical images', () => {
    const image = '/1.png';

    imageq(image, image).then(data => {
      expect(data).to.be.true;
    });
  });

  it ('should return false for different images', () => {
    const image1 = '/1.png';
    const image2 = '/2.png';

    imageq(image1, image2).then(data => {
      expect(data).to.be.false;
    });
  });

});

