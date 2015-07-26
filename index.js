'use strict';

function getImageData(image) {
  return new Promise((resolve, reject) => {
    const img = window.document.createElement('img');
    const canvas = window.document.createElement('canvas');
    const context = canvas.getContext('2d');

    img.src = image;

    img.onload = () => {
      context.drawImage(img, 0, 0);
      resolve(context.getImageData(0, 0, img.width, img.height));
    };

    img.onerror = error => {
      reject(error);
    };
  });
}

export default function (path1, path2) {
  return Promise.all([
      getImageData(path1),
      getImageData(path2)
  ]).then(data => {
    const image1 = data[0];
    const image2 = data[1];
    let i;

    // It can't possibly be the same image if dimensions do not match.
    if (image1.width !== image2.width || image1.height !== image2.height) {
      return false;
    }

    // Run a byte to byte comparison.
    for (i = 0; i < image1.width * image1.height; ++i) {
      if (image1.data[i] !== image2.data[i]) {
        return false;
      }
    }

    return true;
  });
}
