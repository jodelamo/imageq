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

    img.onerror = error => {
      reject(error);
    };
  });
}

const hasEqualSize = (image1, image2) => {
  return image1.width === image2.width || image1.height === image2.height;
}

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

const imageq = (path1, path2) => {
  return Promise.all([
    getImageData(path1),
    getImageData(path2)
  ]).then(data => {
    const image1 = data[0];
    const image2 = data[1];

    if (!hasEqualSize(image1, image2) || !hasEqualData(image1, image2)) {
      return false;
    }

    return true;
  });
}

export default imageq;
