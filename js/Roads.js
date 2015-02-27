var Roads = {
  
  size: 74,
  doubleSize: 052,
  tileArray: [
    "grass",
    "pavement_center",
    "pavement_bottom",
    "pavement_top",
    "road_bottom",
    "road_center",
    "road_single",
    "road_top",
    "water_blue",
    "water",
    "sand",
    "question",
    "no",
    "yes",
    "bush",
    "tree"
  ],

  grid: [],

  mapData: [
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,8 ,1 ,8 ,8 ,8 ,8 ,8 ,10] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,14,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,8 ,1 ,8 ,8 ,8 ,8 ,8 ,10] ,
    [0 ,0 ,0 ,14,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,8 ,1 ,8 ,8 ,8 ,10,10,10] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,1 ,8 ,8 ,10,10,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,1 ,8 ,8 ,10,10,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,1 ,8 ,8 ,10,10,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,8 ,1 ,8 ,8 ,10,10,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,10,8 ,8 ,1 ,8 ,8 ,10,10,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,10,8 ,1 ,8 ,8 ,10,10,0 ,0 ] ,
    [0 ,0 ,14,0 ,0 ,13,0 ,0 ,0 ,0 ,12,0 ,1 ,1 ,1 ,1 ,1 ,1 ,13,10,8 ,1 ,8 ,10,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,11,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,10,8 ,12,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,8 ,10,10,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,14,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,10,11,10,10,10,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,10,10,1 ,10,10,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,14,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,10,10,10,1 ,10,10,10,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,10,10,1 ,10,10,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,10,10,1 ,10,10,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,10,1 ,10,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,13,0 ,0 ,0 ,0 ,0 ,0 ,0 ,12,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,14,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,11,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,14,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ] ,
    [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ] ,
    [6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ,6 ] ,
    [5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ] ,
    [5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ] ,
  ],
  
  gridCellCenter: function(cell){
    return [cell.isoX - 10, cell.isoY ];
  },

  loadTiles: function(){  
    for(var y = 0; y <= this.mapData.length - 1; y++  ) {
      var tiles = Roads.addRoad(y,this.mapData[y]);
      //add in reverse order to make indexing additions easier : /
      this.grid.unshift(tiles);
    }
  },

  addRoad: function(location, tiles){
    var tileContainer = [];
    for (var x = 0; x <= tiles.length - 0; x++) {
      var tile = game.add.isoSprite(x * this.size, location * this.size, 0, 'tiles', this.tileArray[tiles[x]], roadGroup);
      Roads.setRoadTileProperties(tile, 0);
        
        //set tint for bound edges
      if (x >= 16) { tile.tint = 0x86bfda } 

      tile.body.immovable = true;
      tileContainer.push(tile);
    }
    return tileContainer;
  },
  
  setRoadTileProperties: function(tile, yVelocity){
    game.physics.isoArcade.enable(tile);
    tile.body.maxVelocity = new Phaser.Plugin.Isometric.Point3(200,200,200);
    tile.body.drag.set(200, 200, 200);
    tile.body.setSize(74,74,4,0,0,0)
    tile.body.velocity.y = yVelocity;
    tile.body.allowGravity = false;
    tile.body.blocked = {"down" : true}
    tile.smoothed = false;
  },
  
  createNewRoads: function(yVelocity){
    //get top tile from grid 
    var tile = this.grid[this.grid.length - 1][0]
    var yValue = tile.isoY - this.size
    var tiles = Roads.addRoad(yValue, game.rnd.pick([0,0,2,3,4,5,6,7]), yVelocity)
    this.grid.push(tiles);
    game.iso.simpleSort(roadGroup);
  }
}