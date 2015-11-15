'use strict';

var expect = require('chai').expect;
var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');
var IIIFImage = require('../src/iiif_image.jsx');

var shallowRenderer = ReactTestUtils.createRenderer();

describe('IIIFImage', function () {
  before(function() {
    shallowRenderer.render(<IIIFImage server='http://www.example.com' id='1234'/>);
    this.result = shallowRenderer.getRenderOutput();
  });

  it('renders an img tag as its root element', function () {
    expect(this.result.type).to.equal('img');
  });

  it('uses the server in the source', function () {
    expect(this.result.props.src).to.include('example.com/');
  });

  it('uses the image id in the source', function () {
    expect(this.result.props.src).to.include('/1234/');
  });

  describe('defaults', function() {
    it('has a default region', function () {
      expect(this.result.props.src).to.include('/full/');
    });

    it('has a default rotation', function () {
      expect(this.result.props.src).to.include('/0/');
    });

    it('has a default size', function () {
      expect(this.result.props.src).to.include('/1000,/');
    });

    it('has a default quality', function () {
      expect(this.result.props.src).to.include('/native');
    });

    it('has a default format', function () {
      expect(this.result.props.src).to.include('.jpg');
    });
  });
});
