var createGame = window.createGame
var player = window.player;
var voxel = window.voxel
var oculus = require('voxel-oculus-vr')
var effect;


module.exports = function(opts, setup) {
  setup = setup || defaultSetup
  var defaults = {
    generate: voxel.generator['Valley'],
    chunkDistance: 1,
    container: document.getElementById('container'),
    materials: ['#fff', '#000'],
    materialFlatColor: true,
    worldOrigin: [0, 0, 0],
    controls: { discreteFire: true }
  }
  opts = extend({}, defaults, opts || {})

  // setup the game and add some trees
  var game = createGame(opts)
  effect = new oculus(game);

  var container = opts.container || document.body
  window.game = game // for debugging
  game.appendTo(container)
  if (game.notCapable()) return game

  var createPlayer = player(game)

  // create the player from a minecraft skin file and tell the
  // game to use it as the main player
  var avatar = createPlayer()
  avatar.possess()
  avatar.yaw.position.set(2, 14, 4)

  setup(game, avatar)

  return game
}

function defaultSetup(game, avatar) {

  window.addEventListener('keydown', function (ev) {
    // if (ev.keyCode === 'R'.charCodeAt(0)) avatar.toggle()
  })

  game.once('tick', function() {

  })

  game.once('tick', function() {


  })

}
