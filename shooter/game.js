'use strict';

var submarine;
var cursors;
var backround;
var ltorpedo;

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render,});

function preload() {
  game.load.image('backround', 'backround.gif');
  game.load.image('submarine', 'submarine.gif');
  game.load.image('rtorpedo', 'rtorpedo.gif');
  game.load.image('ltorpedo', 'ltorpedo.gif');

}

function create() {
  backround = game.add.tileSprite(0,0,800,600,'backround');
  backround.autoScroll(100,0);
  cursors = game.input.keyboard.createCursorKeys();
  ltorpedo = game.add.sprite(744,300,'ltorpedo');
  submarine = game.add.sprite(744,300,'submarine');
  game.physics.enable(submarine, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  submarine.body.velocity.x = 0;
  submarine.body.velocity.y = 0;

  ltorpedo.x = submarine.x;
  ltorpedo.y = submarine.y;

  if (cursors.up.isUp) {
    submarine.body.velocity.x = -300;
  }
  else if (cursors.down.isDown) {
    submarine.body.velocity.y = 300;
}  
if (game.input.keyboard.isDown(Phaser.Keyboard.SPASEBAR)) {

  }
}

function render() {
}
