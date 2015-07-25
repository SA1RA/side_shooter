'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render,});

function preload() {
  game.stage.backgroundColor = '#FFFFFF';
  game.load.image('submarine', 'submarine.gif');


}

var submarine;
var cursors;

function create() {
  submarine = game.add.sprite(744,300,'submarine');
  game.physics.enable(submarine, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  submarine.body.velocity.x = 0;
  submarine.body.velocity.y = 0;
  if ( cursors.up.isDown) {
    submarine.body.velocity.y = -300;

  }
  else if (cursors.down.isDown) {
    submarine.body.velocity.y = 300;
    
  }
}

function render() {
}
