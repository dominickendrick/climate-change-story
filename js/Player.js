var Player = {


  text: [
    "Do you think climate change is happening?",
    "Climate change caused largely by humans\n burning fossil fuels like coal, oil and gas - right?",
    "Are things gonna start getting sticky?",
    "Do you think that companies own the most fossil fuels?",
    "Companies should be sustainable - right?",
  ],
  
  player: '',
  snapLocation: { x: 0, y: 0},
  moving: false,
  jumping: false,
  playerScore: 0,
  maxLocation:0,

  init: function(game) {
    var bounds = game.physics.isoArcade.bounds;
    this.player = game.add.isoSprite(bounds.frontY/ 2, bounds.frontX, 0, 'player', 0, carsGroup);
    this.player.anchor.set(0.5);
    game.physics.isoArcade.enable(this.player);
    this.player.body.moves = false;
    this.player.body.setSize(50,40,60,0,0,0);
    Player.setControls(game, this.player);

    return this.player;
  },
  
  currentLocation: [2,14],
  
  moving: false,

  update: function(player){
    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN)
    this.snapToGrid(this.currentLocation);
  },

  inBoundsLeft: function (){
    return this.currentLocation[1] >= 4
  },

  inBoundsRight: function (){
    return this.currentLocation[1] <= 22
  },
  
  snapToGrid: function(currentLocation){
    var gridCell = Roads.grid[currentLocation[0]][currentLocation[1]];
    var destination = Roads.gridCellCenter(gridCell);
    this.snapLocation.x = destination[0];
    this.snapLocation.y = destination[1];

    if (!this.moving){
      this.snapStop();

    } else {
      this.snapJump();
    }
  },
  
  snapJump: function(){
    var startMod;
    var endMod;
    var moveAxis;
    var jumpFunc;
    switch (this.direction) {
      case "up":
        startMod = player.isoY > (this.snapLocation.y - (Roads.size));
        endMod = player.isoY < (this.snapLocation.y - (Roads.size));
        moveAxis = "isoY";
        jumpFunc = function(subject, value){player[subject] -= value};
        break;
      case "down":
        startMod = player.isoY < (this.snapLocation.y + (Roads.size + 5));
        endMod = player.isoY > (this.snapLocation.y + (Roads.size + 5));
        moveAxis = "isoY";
        jumpFunc = function(subject, value){player[subject] += value};
        break;
      case "left":
        startMod = player.isoX > (this.snapLocation.x - (Roads.size + 5));
        endMod = player.isoX < (this.snapLocation.x - (Roads.size + 5));
        moveAxis = 'isoX';
        jumpFunc = function(subject, value){player[subject] -= value};
        break;
      case "right":
        startMod = player.isoX < (this.snapLocation.x + (Roads.size + 5));
        endMod = player.isoX > (this.snapLocation.x + (Roads.size + 5));   
        moveAxis = 'isoX';
        jumpFunc = function(subject, value){player[subject] += value};  
        break;
    }  
    if (startMod && player.isoZ < 15) {
      player.isoZ += 2;
      jumpFunc(moveAxis,7);
    } else if (endMod && player.isoZ > 0){
      player.isoZ -= 2;
      jumpFunc(moveAxis,3);
    } else {
      this.snapStop();
    }
    
  },
  
  snapStop: function(){
    player.isoZ = 0;
    player.isoX = this.snapLocation.x;
    player.isoY = this.snapLocation.y;
    this.moving = false;
    game.iso.topologicalSort(carsGroup, 20);
  },
  
  getGridLocation: function (player) {
    row = Math.round(player.isoX / doubleSize);
    column = Math.round(player.isoY / doubleSize);
    return [row, column];
  },
 
  setControls: function(game, player){
    // Set up our controls.
    this.cursors = game.input.keyboard.createCursorKeys();

    game.input.keyboard.addKeyCapture([
       Phaser.Keyboard.LEFT,
       Phaser.Keyboard.RIGHT,
       Phaser.Keyboard.UP,
       Phaser.Keyboard.DOWN,
       Phaser.Keyboard.SPACEBAR
    ]);

    player.moving = false;

    var openKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var closeKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    
    openKey.onDown.add(function () {
       var text = this.text[game.rnd.pick([0,1,2,3,4,5,6,7,8,9])];
       console.log(text.width);
       var style = {  fill: "#ffffff", align: "center" };

       game.dialog = game.add.text(40, game.height - 100, text, style);
        
       Player.fontStyle(game.dialog)
        
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFFFF0B, 0.5);
        graphics.drawRect(50, 250, 100, 100);
        graphics.endFill();
    }, this);

    closeKey.onDown.add(function () {
      game.dialog.destroy();
    }, this);
    
    this.cursors.up.onDown.add(function () {
      this.moving = true;
      this.currentLocation[0] += 1;
      this.direction = "up";
      this.checkLocation(player);
      this.updateScore(game);
    }, this);
    

    this.cursors.down.onDown.add(function () {
      this.moving = true;
      this.currentLocation[0] -= 1;
      this.direction = "down";
    }, this);

    this.cursors.left.onDown.add(function () {
      if(this.inBoundsLeft()){
        this.moving = true;
        this.currentLocation[1] -= 1;
        this.direction = "left";
      }
    }, this);

    this.cursors.right.onDown.add(function () {
      if(this.inBoundsRight()){
        this.moving = true;
        this.currentLocation[1] += 1;
        this.direction = "right";
      }
    }, this);
  },
  
  checkLocation: function(player){
    //add new road when player moves forward
    if (game.scoreCount.text == (this.currentLocation[0] - 1) || game.scoreCount.text == 0){ 
      Player.alignWorld();     
      Roads.createNewRoads(game.velocity);
      Cars.cullCars(player.isoY);
    }
  },

  alignWorld: function(){
    offset = this.currentLocation[0] * Roads.size
    worldOffsetY = 0 - offset
    worldOffsetX = offset * 0.5
    game.world.setBounds(worldOffsetX, worldOffsetY, worldWidth , worldHeight)
  },

  updateScore: function(game){
    if (game.scoreCount.text == (this.currentLocation[0] - 1) || game.scoreCount.text == 0){
      game.scoreCount.text = this.currentLocation[0]
    }
  },
  showLabels: function(game) {
      var style = { font: "20px Arial", fill: "#fff", align: "center" };
      
      var text = "Score :";
      game.scoreLabel = game.add.text(game.width-150, 10, text, style);
      Player.fontStyle(game.scoreLabel)
      
      var count = "0";
      game.scoreCount = game.add.text(game.width-50, 10, count, style);
      Player.fontStyle(game.scoreCount)
  },
  fontStyle: function(item){
    item.fixedToCamera = true;
    item.font = 'VT323';
    item.fontSize = 30;
    item.stroke = '#000000';
    item.strokeThickness = 6;
  },

  hitCar: function(playerSprite, carsGroup, player){
    game.time.events.add(0, Player.gameOver, this);
  },

  gameOver: function() {    
      //Player.currentLocation = [5,12]
      this.game.state.start('Boot', true, false)
  }
}