// Build floodFill(canvas2D, startXY, newColor). Repalce a pixel's color value only if it is the same color as 
// the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 
// Diagnally related pixels are not considered adjacent.

var floodFill = (canvas, xy, newColor) => {
    let start = canvas[xy[1]][xy[0]];
    canvas[xy[1]][xy[0]] = newColor;
    let adj = [];
    if (xy[1] >= 1) {
      adj.push([xy[0], xy[1] - 1]); //TOP
    }
    if (xy[0] < canvas[0].length - 1) {
      adj.push([xy[0] + 1, xy[1]]); //RIGHT
    }
    if (xy[1] < canvas.length - 1) {
      adj.push([xy[0], xy[1] + 1]); //BOTTOM
    }
    if (xy[0] >= 1) {
      adj.push([xy[0] - 1, xy[1]]); //LEFT
    }
    for (let i = 0; i < adj.length; i++) {
      if(canvas[adj[i][1]][adj[i][0]] === start) {
        floodFill(canvas, adj[i], newColor)
      }
    }
  }
  
  var canvas = [
    [1,1,2,1,1],
    [1,1,2,1,1],
    [1,2,2,2,1],
    [1,1,2,1,1],
    [1,1,2,2,2]
  ]
  
  floodFill(canvas,[2,2], 0);
  console.log(canvas);
