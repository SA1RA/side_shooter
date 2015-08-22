'use strict';


var game = new Phaser.Game(800, 600, Phaser .AUTO, 'game',
    {preload:preload,create:create,update:update,render:render});


var submarine;
var cursors;
var backround;
var ltorpedo;
var squid;


function preload() {
  game.load.image('backround', 'backround.gif');
  game.load.image('submarine', 'submarine.gif');
  game.load.image('ltorpedo', 'ltorpedo.gif');
  game.load.image('squid', 'squid.gif');
}

function create() {
  backround = game.add.tileSprite(0,0,800,600,'backround');
  backround.autoScroll(100,0);
  ltorpedo = game.add.sprite(744,300,'ltorpedo');
  game.physics.enable(ltorpedo, Phaser.Physics.ARCADE);
  submarine = game.add.sprite(744,300,'submarine');
  game.physics.enable(submarine, Phaser.Physics.ARCADE);
  squid = game.add.sprite(submarine.y, submarine.x, 'squid');
  game.physics.enable(squid, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.overlap(ltorpedo, squid, collisionHandler, null, this);

  submarine.body.velocity.x = 0;
  submarine.body.velocity.y = 0;

  if (! ltorpedo.shooting) {
    ltorpedo.body.velocity.x = 0;
    ltorpedo.body.velocity.x = 0;
    ltorpedo.x = submarine.x + 16;
    ltorpedo.y = submarine.y + 16;
    ltorpedo.renderable = true;
  }

  if (cursors.up.isDown) {
    submarine.body.velocity.y = -300;
    if (! ltorpedo.shooting) {
      ltorpedo.body.velocity.x = -300;
    }
  }

  else if (cursors.down.isDown) {
    submarine.body.velocity.y = 300;
    if (! ltorpedo.shooting) {
      ltorpedo.body.velocity.x = 300;
    }
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    ltorpedo.body.velocity.x = -1000;
    ltorpedo.shooting = true;

  }

  if (ltorpedo.x < 0) ltorpedoReset();
}

function render() {}

function collisionHandler(ltorpedo, squid) {
  ltorpedoReset();
  repositionSquid();
}
function repositionSquid() {
    squid.x = game.rnd.integerInRange(100,780);
    squid.y = game.rnd.integerInRange(20, 540);  
}
function ltorpedoReset() {
    ltorpedo.shooting = false;
    ltorpedo.body.velocity.x = 0;
    ltorpedo.body.velocity.y = 0;
}
