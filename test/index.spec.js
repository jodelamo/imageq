import imageq from '../';

describe('imageq', () => {

  it('should throw an error if its argument is not an array', () => {
    expect(imageq).to.throw(Error);
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

