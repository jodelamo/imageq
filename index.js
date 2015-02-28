'use strict';

function getImageData(image) {
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

module.exports = function (path1, path2) {
  return Promise.all([getImageData(path1), getImageData(path2)]).then(function (data) {
    var image1 = data[0];
    var image2 = data[1];

    if (image1.width !== image2.width || image1.height !== image2.height) {
      return false;
    }

    for (var i = 0; i < image1.width * image1.height; ++i) {
      if (image1.data[i] !== image2.data[i]) {
        return false;
      }
    }

    return true;
  });
};

