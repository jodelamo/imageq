import imageq from '../';

describe('imageq', () => {

  it('should throw an error if its argument is not an array', () => {
    expect(imageq).to.throw(Error);
  });

  it('should reject with an error if an image fails to load', done => {
    const images =['/1.png', '/does-not-exist.png'];

    imageq(images).catch(err => {
      expect(err).to.exist;
      done();
    });
  });

  it('should return true for identical images', done => {
    const images = ['/2.png', '/3.png'];

    imageq(images).then(identical => {
      expect(identical).to.be.true;
      done();
    }).catch(done);
  });

  it('should return false for different images', done => {
    const images = ['/1.png', '/2.png', '/3.png'];

    imageq(images).then(identical => {
      expect(identical).to.be.false;
      done();
    }).catch(done);
  });

});

