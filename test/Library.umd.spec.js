import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import Library from '../dist/Library.umd.js';

const { expect } = chai;

chai.use(sinonChai);

let library;

// Replace with actual tests
describe('Library.umd.js', () => {
  beforeEach(() => library = new Library());

  it('should get the library\'s version', () => {
    expect(library.version).to.eql('1.0.0');
  });

  it('should get the library\'s name', () => {
    const spy = sinon.spy(library, 'name');
    const name = library.name();

    expect(name).to.eql('Library');

    spy.restore();

    expect(spy).to.have.been.called;
  });
});
