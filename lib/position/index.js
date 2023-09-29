"use strict";

var _ = require("../lodash");
var util = require("../util");
var positionX = require("./bk").positionX;

module.exports = position;

function position(g) {
  g = util.asNonCompoundGraph(g);

  positionY(g);
  _.forEach(positionX(g), function(x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = util.buildLayerMatrix(g);
  var rankSep = g.graph().ranksep;
  var prevY = 0;
  _.forEach(layering, function(layer) {
    var maxHeight = _.max(_.map(layer, function(v) { return g.node(v).height; }));
    var borderTopSeen = false;
    var labelheight = 0;
    _.forEach(layer, function(v) {
      var node = g.node(v);
      console.log("nodeY", node);
      if (node.dummy === "border" && node.whimNode) {
        borderTopSeen = true;
        labelheight = node.labelheight;
      }
      node.y = prevY + maxHeight / 2;
    });
    if (borderTopSeen) {
      prevY += maxHeight + labelheight + 24;
    } else {
      prevY += maxHeight + rankSep;
    }
  });
}

