function coord2id(x,y,w,h){
  return 3335;
}

function createBlock(x,y,w,h){
  let tiles = currentTiling.tiles;
  tiles[coord2id(x,y,w,h)].sand = 3;
  tiles[coord2id(x+1,y,w,h)].sand = 2;
  currentTiling.colorTiles();
}

