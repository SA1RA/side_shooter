'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render,});

function preload() {
  game.stage.backgroundColor = '#FFFFFF';
  game.load.image('RCB', 'RCB.gif');


}

var RCB;

function create() {
  RCB = game.add.sprite(400,550,'RCB');

}

function update() {
}

function render() {
}
