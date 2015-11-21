'use strict';

var React = require('react');

var IIIFImage = React.createClass({
  displayName: 'IIIFImage',

  makeSource: function () {
    var server = this.props.server;
    var id = this.props.id;
    var region = this.props.region || 'full';
    var size = this.props.size || '1000,';
    var rotation = this.props.rotation || '0';
    var quality = this.props.quality || 'native';
    var format = this.props.format || 'jpg';
    return server + '/' + id + '/' + region + '/' + size + '/' + rotation + '/' + quality + '.' + format;
  },
  render: function () {
    var source = this.makeSource();
    return React.createElement('img', { src: source });
  }
});

module.exports = IIIFImage;
