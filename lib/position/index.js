"use strict";

let util = require("../util");
let positionX = require("./bk").positionX;

module.exports = position;

function position(g) {
  g = util.asNonCompoundGraph(g);

  positionY(g);
  Object.entries(positionX(g)).forEach(([v, x]) => g.node(v).x = x);
}

function positionY(g) {
  let layering = util.buildLayerMatrix(g);
  let rankSep = g.graph().ranksep;
  let prevY = 0;
  layering.forEach(layer => {
    const maxHeight = layer.reduce((acc, v) => {
      const height = g.node(v).height;
      if (acc > height) {
        return acc;
      } else {
        return height;
      }
    }, 0);
    let borderTopSeen = false;
    let labelheight = 0;
    layer.forEach(v => {
      let node = g.node(v);
      if (node.dummy === "border" && node.whimNode) {
        borderTopSeen = true;
        labelheight = node.labelheight;
      }
      node.y = prevY + maxHeight / 2;
    });

    if (borderTopSeen) {
      // hard coding padding for cluster labels
      prevY += maxHeight + labelheight + 24;
    } else {
      prevY += maxHeight + rankSep;
    }
  });
}

