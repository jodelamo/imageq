'use strict';

function getPixelData(image) {
  return new Promise(function (resolve, reject) {
    var img = window.document.createElement('img');
    var canvas = window.document.createElement('canvas');
    var context = canvas.getContext('2d');

    img.src = image;
    img.onload = function () {
      context.drawImage(img, 0, 0);
      resolve(context.getImageData(0, 0, img.width, img.height));
    };
    img.onerror = function (error) {
      reject(error);
    };
  });
}

module.exports = function (image1, image2) {

  return Promise.all([getPixelData(image1), getPixelData(image2)]).then(function (data) {
    var data1 = data[0];
    var data2 = data[1];

    if (data1.width !== data2.width || data1.height !== data2.height) {
      return false;
    }

    for (var i = 0; i < data1.width * data1.height; ++i) {
      if (data1.data[i] !== data2.data[i]) {
        return false;
      }
    }

    return true;
  });

};