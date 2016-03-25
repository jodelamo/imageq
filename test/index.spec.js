import imageq from '../';

describe('imageq', () => {

  it('should return true for identical images', done => {
    const image1 = '/2.png';
    const image2 = '/3.png';

    imageq(image1, image2).then(identical => {
      expect(identical).to.be.true;
      done();
    }).catch(done);
  });

  it('should return false for different images', done => {
    const image1 = '/1.png';
    const image2 = '/3.png';

    imageq(image1, image2).then(identical => {
      expect(identical).to.be.false;
      done();
    }).catch(done);
  });

});

