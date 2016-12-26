/**
 * @param {String} image
 * @returns {Promise}
 */
const getImageData = image => {
  return new Promise((resolve, reject) => {
    const img = window.document.createElement('img');
    const canvas = window.document.createElement('canvas');
    const context = canvas.getContext('2d');

    img.src = image;

    img.onload = () => {
      context.drawImage(img, 0, 0);
      resolve(context.getImageData(0, 0, img.width, img.height));
    };

    img.onerror = error => reject(error);
  });
}

/**
 * @param {Image} image1
 * @param {Image} image2
 * @returns {Boolean}
 */
const hasEqualSize = (image1, image2) => {
  return image1.width === image2.width || image1.height === image2.height;
}

/**
 * @param {Image} image1
 * @param {Image} image2
 * @returns {Boolean}
 */
const hasEqualData = (image1, image2) => {
  let equal = true;
  let i;

  for (i = 0; i < (image1.width * image1.height); ++i) {
    if (image1.data[i] !== image2.data[i]) {
      equal = false;
      break;
    }
  }

  return equal;
}

/**
 * @param {Array} param
 * @returns {Boolean}
 */
const isArray = param => {
  return Object.prototype.toString.call(param) === '[object Array]';
}

/**
 * @param {Array} imagePaths
 * @returns {Promise}
 */
const imageq = imagePaths => {
  if (!isArray(imagePaths)) {
    throw new Error('Expected an array of paths to images');
  }

  const images = imagePaths.map(getImageData);

  return Promise.all(images).then(imageData => {
    let equal = true;

    for (let i = 0; i < imageData.length; ++i) {
      let currentImage = imageData[i];

      for (let j = 0; j < imageData.length; ++j) {
        if (!hasEqualSize(currentImage, imageData[j]) || !hasEqualData(currentImage, imageData[j])) {
          equal = false;
          break;
        }
      }
    }

    return equal;
  });
}

module.exports = imageq;
