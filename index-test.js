'use strict';

var imageq = require('./index');

describe('imageq', function () {

  it('should return true for identical images', function () {
    var image = '/base/images/arnold1.jpg';

    return imageq(image, image).then(function (data) {
      expect(data).to.be.true;
    });
  });

  it ('should return false for different images', function () {
    var image1 = '/base/images/arnold1.jpg';
    var image2 = '/base/images/arnold2.jpg';

    return imageq(image1, image2).then(function (data) {
      expect(data).to.be.false;
    });
  });

});