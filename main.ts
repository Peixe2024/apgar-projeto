namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    if (bunny.ay == 0) {
        bunny.setImage(img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . 5 5 5 . . . . . 
            . . . . . 5 5 5 . . . . 
            . . . . 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 . . . 
            . . 5 5 4 4 4 4 5 5 . . 
            . . 5 5 4 f 4 4 f 4 . . 
            . . 5 4 4 4 4 4 4 4 . . 
            . . 4 4 4 4 f f 4 4 . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 8 8 8 1 2 1 8 8 . . 
            . 8 8 8 8 1 2 1 8 8 8 . 
            . 4 8 . 8 8 2 8 . 8 4 . 
            . . . . 8 8 8 8 . . . . 
            . . . . 8 8 8 8 . . . . 
            . . . . 8 8 8 8 . . . . 
            . . . . 8 . . 8 . . . . 
            . . . . . . . 8 . . . . 
            . . . . . . . . . . . . 
            `)
        bunny.vy = -160
        bunny.ay = gravity
    }
})
sprites.onDestroyed(SpriteKind.Obstacle, function (sprite) {
    info.changeScoreBy(1)
})
function createCloud () {
    cloud = sprites.createProjectileFromSide(clouds[randint(0, clouds.length - 1)], -30, 0)
    cloud.bottom = randint(30, 55)
    cloud.z = -2
}
function setupFrames () {
    birdFrames = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e e . . . . 
        . . . . . . . e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . e e e e e e e e e . 4 . 
        . . . . d d d d d e e e . . . 5 
        . . . . f d d f d d e e . . . 5 
        . . . . d d d d d d e e . . 4 5 
        . . . . d b b d d d d d . . . 5 
        . . . . d b b d d d d d . 4 . 4 
        . . . . . d d d d d d . . 2 5 5 
        . . . . . 5 5 5 5 5 5 . 2 2 5 4 
        . . 2 2 2 5 5 5 d d e 2 2 5 4 5 
        2 2 2 2 2 5 5 f e e f 2 2 4 4 4 
        2 2 2 2 2 f f 2 2 f f 2 2 5 4 5 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 5 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e d d e e e e e . . . . 
        . . . . d d d d d e e e . . . . 
        . . . . d d d d d d e e . . . . 
        . . . . f d d f f d e e . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d b d d d d d d . . . . 
        . . . . . d d d d d d . . 2 2 . 
        . . . . . 5 5 5 5 5 5 . 2 2 2 . 
        . . 2 2 2 5 5 5 d d e 2 2 8 2 8 
        2 2 2 2 2 5 5 f e e f 2 2 2 8 2 
        2 2 2 2 2 f f 2 2 f f 2 2 8 2 8 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . . . 
        . . . . . . . . e e e e e e . . 
        . . . . . e e e e e e e e . . . 
        . . . . e d d d e e e e . . . . 
        . . . . d d d d d e e e . . . 5 
        . . . . d d d d d d e e . . . . 
        . . . . f d d f f d e e . . . 4 
        . . . . d d b b d d d d . . 5 . 
        . . . . d d b b d d d d . . . 5 
        . . . . . d d d d d d . . 2 5 4 
        . . . . . 5 5 5 5 5 5 . 2 2 5 4 
        . . 2 2 2 5 5 5 d d e 2 2 8 4 4 
        2 2 2 2 2 5 5 f e e f 2 2 2 4 5 
        2 2 2 2 2 f f 2 2 f f 2 2 8 4 4 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 5 4 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . e e e e e e e e . . . 
        . . . . e d d d e e e e e . 4 . 
        . . . . d d d d d e e e . . . . 
        . . . . d d d d d d e e . . 5 . 
        . . . . f d d f f d e e . . . . 
        . . . . d b b d d d d d . . 5 . 
        . . . . d b b d d d d d . . 5 4 
        . . . . . d d d d d d . . 2 5 5 
        . . . . . 5 5 5 5 5 5 . 2 2 5 . 
        . . 2 2 2 5 5 5 d d e 2 2 8 . . 
        2 2 2 2 2 5 5 f e e f 2 2 2 4 4 
        2 2 2 2 2 f f 2 2 f f 2 2 8 4 4 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . 4 4 
        . . . . d d d d d e e e . . . . 
        . . . . d d d d d d e e . . . 5 
        . . . . d d d d d d e e . 4 . 5 
        . . . . d f f d d d d d . 4 5 5 
        . . . . d f f d d d d d . . 5 4 
        . . . . . f f d d d d . . 2 . . 
        . . . . . 5 5 5 5 5 5 . 2 2 4 5 
        . . 2 2 2 5 5 5 d d e 2 2 8 . 5 
        2 2 2 2 2 5 5 f e e f 2 2 2 4 . 
        2 2 2 2 2 f f 2 2 f f 2 2 8 4 4 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 5 4 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e e e . . . . 
        . . . . . e e e e e e e . . 5 5 
        . . . . e e d d e e e e . . . . 
        . . . . d d d d d e e e . . . . 
        . . . . d d d d d d e e . . 5 4 
        . . . d f d d f d d e e . . 5 4 
        . . . . d b b d d d d d . . 5 4 
        . . . . d b b d d d d d . . . 5 
        . . . . . d d d d d d . . 2 . 5 
        . . . . . 5 5 5 5 5 5 . 2 2 5 5 
        . . 2 2 2 5 5 5 d d e 2 2 8 4 5 
        2 2 2 2 2 5 5 f e e f 2 2 2 4 5 
        2 2 2 2 2 f f 2 2 f f 2 2 8 . 4 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . e . . . . . 
        . . . . . . . e e e e e e . . . 
        . . . . . e e e e e e e . . . . 
        . . . . e d d d d e e e . . 5 . 
        . . . . d d d d d e e e . 5 . . 
        . . . . f d d f d d e e . . . 4 
        . . . . d d d d d d e e . . . 4 
        . . . . d b b d d d d d . . . 5 
        . . . . d b b d d d d d . . 5 5 
        . . . . . d d d d d d . . 2 . 5 
        . . . . . 5 5 5 5 5 5 . 2 4 4 5 
        . . 2 2 2 5 5 5 d d e 2 2 8 5 . 
        2 2 2 2 2 5 5 f e e f 2 2 2 5 5 
        2 2 2 2 2 f f 2 2 f f 2 2 8 5 5 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . 4 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . 4 4 
        . . . . d d d d d e e e . . . . 
        . . . . d d d d d d e e . . . 5 
        . . . . d d d d d d e e . 4 . 5 
        . . . . d f f d d d d d . 4 5 5 
        . . . . d f f d d d d d . . 5 4 
        . . . . . f f d d d d . . 2 . . 
        . . . . . 5 5 5 5 5 5 . 2 2 4 5 
        . . 2 2 2 5 5 5 d d e 2 2 8 . 5 
        2 2 2 2 2 5 5 f e e f 2 2 2 4 . 
        2 2 2 2 2 f f 2 2 f f 2 2 8 4 4 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 5 4 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e e . . . . 
        . . . . . . . e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . e e e e e e e e e . 4 . 
        . . . . d d d d d e e e . . . 5 
        . . . . f d d f d d e e . . . 5 
        . . . . d d d d d d e e . . 4 5 
        . . . . d b b d d d d d . . . 5 
        . . . . d b b d d d d d . 4 . 4 
        . . . . . d d d d d d . . 2 5 5 
        . . . . . 5 5 5 5 5 5 . 2 2 5 4 
        . . 2 2 2 5 5 5 d d e 2 2 5 4 5 
        2 2 2 2 2 5 5 f e e f 2 2 4 4 4 
        2 2 2 2 2 f f 2 2 f f 2 2 5 4 5 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 5 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e e . . . . 
        . . . . . . . e e e e e e . . . 
        . . . . . e e e e e e e e e . . 
        . . . . e e e e e e e e e . 4 . 
        . . . . d d d d d e e e . . . 5 
        . . . . f d d f d d e e . . . 5 
        . . . . d d d d d d e e . . 4 5 
        . . . . d b b d d d d d . . . 5 
        . . . . d b b d d d d d . 4 . 4 
        . . . . . d d d d d d . . 2 5 5 
        . . . . . 5 5 5 5 5 5 . 2 2 5 4 
        . . 2 2 2 5 5 5 d d e 2 2 5 4 5 
        2 2 2 2 2 5 5 f e e f 2 2 4 4 4 
        2 2 2 2 2 f f 2 2 f f 2 2 5 4 5 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 4 5 
        `
    ]
    animation.runImageAnimation(
    bird,
    birdFrames,
    50,
    true
    )
    bunnyFrames = [
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . 5 5 5 . . 
        . . . . 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 . . 
        . . 5 5 4 4 4 4 4 5 . . 
        . . 5 5 4 f 4 4 f 4 . . 
        . . 5 4 4 4 4 4 4 4 . . 
        . . 5 4 4 4 f f 4 4 . . 
        . . . 4 4 4 4 4 4 . . . 
        . . 8 8 8 1 2 1 8 8 . . 
        . 8 8 8 8 1 2 1 8 8 8 . 
        . 4 8 . 8 8 2 8 . 8 4 . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 . . 8 . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 5 5 5 . . . . . 
        . . . . . 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . 5 5 4 4 4 4 5 5 . . 
        . . 5 5 4 f 4 4 f 4 . . 
        . . 5 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 f f 4 4 . . 
        . . . 4 4 4 4 4 4 . . . 
        . . 8 8 8 1 2 1 8 8 . . 
        . 8 8 8 8 1 2 1 8 8 8 . 
        . 4 8 . 8 8 2 8 . 8 4 . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 . . 8 . . . . 
        . . . . . . . 8 . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 5 . . . . . . . 
        . . . 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . 5 5 4 4 4 4 4 4 . . 
        . . 5 4 4 f 4 4 f 4 . . 
        . . 5 4 4 4 4 4 4 4 . . 
        . . 5 5 4 4 f f 4 4 . . 
        . . . 5 4 4 4 4 4 . . . 
        . 4 8 8 8 1 2 1 8 8 4 . 
        . 4 4 8 8 1 2 1 8 4 4 . 
        . . . . 8 8 2 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . . 8 8 . . . . . 
        . . . . . . 8 . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 . . 
        . . 5 5 4 4 4 4 4 5 . . 
        . . 5 5 4 f 4 4 f 4 . . 
        . . 5 4 4 4 1 1 4 4 . . 
        . . 4 4 4 4 f f 4 4 . . 
        . . . 4 4 4 1 1 4 . . . 
        . 4 8 8 8 d 2 d 8 8 4 . 
        . 4 8 8 8 d 2 d 8 8 4 . 
        . . . . 8 8 2 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . . 8 8 . . . . . 
        . . . . . 8 . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 5 5 . . . . . . . . 
        . . 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 . . . 
        . . 5 5 4 4 4 4 4 4 . . 
        . . 5 5 4 f 4 4 f 4 . . 
        . . 5 5 4 4 1 1 4 4 . . 
        . . 4 4 4 4 f f 4 4 . . 
        . . . 4 4 4 f f 4 . . . 
        . 4 8 8 8 1 2 1 8 8 4 . 
        . 4 8 8 8 1 2 1 8 8 4 . 
        . . . . 8 8 2 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 . . 8 . . . . 
        . . . . 8 . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 5 5 5 . . . 
        . . . . . 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 . . 
        . . 5 5 4 4 4 4 4 5 . . 
        . . 5 5 4 f 4 4 f 4 . . 
        . . 5 5 4 4 1 1 4 4 . . 
        . . 4 4 4 4 f f 4 4 . . 
        . . . 4 4 4 4 4 4 . . . 
        . 4 8 8 8 1 2 1 8 8 4 . 
        . 4 8 8 8 1 2 1 8 8 4 . 
        . . . . 8 8 2 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 8 8 8 . . . . 
        . . . . 8 . . 8 . . . . 
        . . . . . . . . . . . . 
        `
    ]
    obstacles = [
    img`
        ........................
        ...............7ffff....
        ..............7f7767ff..
        .............77f77777ff.
        ............67666f7777f.
        ...........7777777fffff.
        ...........67ffff7767ff.
        ...........ffeeefffffff.
        ............444fb444efe.
        ............d44fb444eef.
        ....f.....f..44444eeef..
        ....fbbffffffeeee777f...
        ..fffbbfffffeeeee444f...
        ........ff.ff..eeffff...
        .......fff..f.ffffffff..
        .......ff......ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,
    img`
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . 8 8 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 6 8 . . 
        . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
        . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
        . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
        8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
        8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
        8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
        8 6 8 8 8 8 b b b b 8 b b 8 b 8 
        8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
        8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f 8 8 8 8 f f f 8 8 
        . 8 8 f b c c f 8 8 f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,
    img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,
    img`
        . f f f . f f f f . f f f . 
        f f 2 f 2 2 2 2 2 2 f 2 f f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 f . 
        . f f 2 2 2 2 2 2 2 2 f f . 
        . f f f b f d d f b f f f . 
        . f f d 1 f d d f 1 d f f . 
        . . f f d d d d d d f f . . 
        . . e f e d d d d e f e . . 
        . e d f b 3 3 3 3 b f d e . 
        . d d f 3 3 3 3 3 3 c d d . 
        . d d f 6 6 6 6 6 6 f d d . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,
    img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ................25......
        .......ffffffff215......
        ......f1d444444115......
        ......f55544445215......
        .......fffffff2225......
        ...............252......
        ................55......
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,
    img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f 2 2 2 2 2 f f . 
        . . f f 2 2 2 2 2 2 2 f f 
        f f 2 2 2 2 2 2 2 2 2 2 f 
        f f 2 2 2 2 2 2 2 2 2 2 f 
        . f f f 2 2 2 2 2 2 2 f f 
        . . f f d d f b d d d f f 
        . . . f d d f 1 d d d f . 
        . . . f d d d d d f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e d d e . . 
        . . . f 7 7 7 e d d e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    animation.runImageAnimation(
    bunny,
    bunnyFrames,
    50,
    true
    )
    trees = [img`
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        .....bbbbbbbbbbbbbbbbbbbbbbbbb......
        ....bbbbbbbbbbbbbbbbbbbbbbbbbb......
        ...bbbbbbbbbbbbbbbbbbbbbbbbbbb......
        ...bbbbbcccbc33b333b3ccbcccbbb......
        ..bbcbbbc33bc33b333b33cb33cbbb......
        .bbbcbbbc33bc33b333b33cb33cbbb......
        .bbccbbbc33bcc3bcccb3ccbcccbbb......
        .bcccbbbbbbbbbbbbbbbbbbbbbbbbb......
        .bcc3bbbc33b333b333b333bcccbbb......
        .b3ccbbbc33bc33b333b33cb33cbbb......
        .bcccbbbc33bc33b333b33cb33cbbb......
        .bcc3bbbc33bc33bcccb33cb33cbbb......
        .b3ccbbbc33bcc3b333b3ccbcccbbb......
        .bcccbbbbbbbbbbbbbbbbbbbbbbbbb......
        .bcc3bbbc33b333b333b333bcccbbb......
        .bcccbbbc33b333bcccb333b33cbbb......
        .b3ccbbbc33bc33b333b33cb33cbbb......
        .bcccbbbc33bcc3b333b3ccbcccbbb......
        .bcc3bbbbbbbbbbbbbbbbbbbbbbbbb......
        .bcccbbbc33b333bcccb333bcccbbb......
        .bcccbbbc33b333b333b333b33cbbb......
        .b3ccbbbc33bcc3bcccbcc3b33cbbb......
        .bcccbbbc33b333b333b333bcccbbb......
        .bcc3bbbbbbbbbbbbbbbbbbbbbbbbb......
        .bcccbbbc33b333bcccb333bcccbbb......
        .bcccbbbc33b333b333b333b33cbbb......
        .b3ccbbbc33bcc3bcccbcc3b33cbbb......
        .bcccbbbc33b333b333b333bcccbbb......
        .bcccbbbbbbbbbbbbbbbbbbbbbbbbb......
        .bcc3bbbcc3bcc3bcccbcccbcccbbb......
        .bcccbbbc33bc33bc3cbc3cb33cbbb......
        .b3ccbbbc33bc33bc3cbc33b33cbbb......
        .bcccbbbc33bc33bc3cbc33b33cbbb......
        .bcccbbbcccbcc3bcccbcccbcccbbb......
        .bcccbbbbbbbbbbbbbbbbbbbbbbbbb......
        .bcc3bbbbbbbbbbbbbbbbbbbbbbbbb......
        .bc33bbbbbbbbbbbbbbbbbbbbbbbbb......
        .b333bbbbbbbbbccccccccbbbbbbbb......
        .b33cbbbbbbbbbc33cc33cbbbbbbbb......
        .bcccbbbbbbbbbc3bccb3cbbbbbbbb......
        .bcccbbbbbbbbbc33cc33cbbbbbbbb......
        `, img`
        .......cbbbbbbbbbbbbbbbbbbbbbb......
        ......ccbbbbbbbbbbbbbbbbbbbbbb......
        .....cccbbbcccbbbcccbbbcccbbbb......
        ....ccccbbbcccbbbcccbbbcccbbbb......
        ...ccc3cbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...c3cccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...ccc3cbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...c3cccbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...ccc3cbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...c3cccbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...ccc3cbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...c3cccbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...ccc3cbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...c3cccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...ccc3cbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...c3cccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...ccc3cbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...c3cccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...ccc3cbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbcccbbbcccbbbcccbbbb......
        ...c3cccbbbcccbbbcccbbbcccbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbcccccccccbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        ...cccccbbbbbbbbbbbbbbbbbbbbbb......
        `, img`
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....cbbbbbbbbb......cbbbbbbbbb......
        ...ccbbbbbbbbb.....ccbbbbbbbbb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb..3.3.
        ..cccbcbcbcbcb....cccbcbcbcbcb.3333.
        ..cccbbbbbbbbb....cccbbbbbbbbb..3...
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbcbcbcbcb....cccbcbcbcbcb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        ..cccbbbbbbbbb....cccbbbbbbbbb......
        `]
    grassImages = [
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . b b b . . . 
        . . b b b . . . 
        . . b b b b . . 
        . . b b b b . . 
        . . b b b b . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . . b b . b . 
        . . . b b . b . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        b . . . . . . . 
        b . . b . . . . 
        b . . b b . . . 
        b . b b b . . . 
        b . b b b . b . 
        b b b b b . b . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . b 
        . . . b . . . b 
        . . . b . . . b 
        . . . b b . b b 
        . . . b b . b b 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b b . . . . 
        . . b b b . . . 
        . . b b b . . . 
        . . b b b . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b . . . . . . 
        . b . . . . . . 
        . b b . . . b . 
        . b b . . . b . 
        . b b . . . b . 
        `
    ]
    clouds = [
    img`
        ........5...................dd.....................
        .....5..55......5........ddddddd..1........55......
        ....5...5............1..dddddddddddd...5....5....5.
        ...55...............11.dddddddddddddd.....5.....55.
        ....1.....1.5...5.....dddddddddddddddd...555.....5.
        ...............555...ddddddddddddddddd....5........
        .......5........5.ddddddddddddddddddddd..1.........
        ...5..555...5..ddddddddddddddddddddddddd......5....
        ..55...5..d555ddddddddddddddddddddddddddd....55.5..
        ...5.....ddd5dddddddddddddddddddddddd1dddd.....5...
        ........dddddddddddddddddddddddddddddddddddd..555..
        .5.....ddddddddddddddddddddddddddddddddddddddd.5...
        555....dddddddddddddddddddddddddddddddddddddddd..1.
        .5.....ddddddddddddddddddddddddddddddddddddddddd...
        .......dddddddddddddddddddddddddddddddddddddddddd..
        ......5dddddddddddddddddddddddddddddddddddddddddd..
        .1..d555ddddddddddddddddddddddddddddddddddddddddd..
        ...ddd5ddddddddddddddddddddddddddddddddddddddddddd.
        ..dddddddddddddddddddddddddddddddddddddddddddddddd.
        .dddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddd.
        .....dddddddddddddddddddddddddddddddddddddddd......
        `,
    img`
        .........................33333................
        ......5.................3333333...5...........
        .5...555..............3333333333.55...........
        ......5.....5.....333333333333333.5.......5...
        ...............333333333333333333........55...
        ..............3333333333333333333333333...5...
        ....5........333333333333333333333333333......
        .............333333333333333333333333333......
        .........5...3333333333333333333333333333.....
        ........55..33333333333333333333333333333.....
        .........5..333333333333333333333333333333.5..
        ...5........333333333333333333333333333333..5.
        ...........33333333333333333333333333333533...
        ......33333333333333333333333333333333355333..
        .....3333333333333333333333333333333333353333.
        5...33333333333333333333333333333333333333333.
        ...3333333333333333333333333333333333333333333
        ...3333333333333333333333333333333333333333333
        ...3333333333333333333333333333333333333333333
        ...3333333333333333333333333333333333333333333
        ..33333333333333333333333333333333333333333333
        .333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333.
        33333333333333333..................333333333..
        `,
    img`
        ........bbbbbbbb.................
        .5..5..bbbbbbbbbb.....5...5....5.
        ...55bbbbbbbbbbbbb...55..........
        ...b5bbbbbbbbbbbbbb...5......5...
        5.bbbbbbbbbbbbbbbbbbbbbbb........
        ..bbbbbbbbbbbbbbbbbbbbbbbb.....5.
        .bbbbbbbbbbbbbbbbbbbbbbbbbb......
        .bbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        bbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
        ..5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        .55..bbbbbbbbbbbbbbbbbbbbbb5bbbbb
        ..5...bbbbbbbbbbbbbbbbbbbb555b...
        ...........................5.....
        `,
    img`
        ...................dddd....................................5...........
        ..................dddddd.................................5555..........
        .................dddddddddddddd.........5...............55555..........
        ....5...........dddddddddddddddd.......555.......55....555.............
        ...555...5....ddddddddddddddddddd.......5..............555.......5...5.
        ....5.....5.dddddddddddddddddddddd.....................555.............
        ...........ddddddddddddddddddddddd......................555............
        ..........dddddddddddddddddddddddd......................55555..........
        ..........ddddddddddddddddddddddddd......ddddd............555.....5....
        .........dddddddddddddddddddddddddd...ddddddddd...................5....
        .....55..5dddddddddddddddddddddddddddddddddddddd.......................
        ......5dddddddddddddddddddddddddddddddddddddddddd..............5..5....
        ......dddddddddddddddddddddddddddddddddddddddddddddd...................
        ....dddddddddddddddddddddddddddddddddddddddddddddddddd5................
        ...ddddddddddddddddddddddddddddddddddddddddddddddddddd5................
        ...ddddddddddddddddddddddddddddddddddddddddddddddddddddd...............
        ..ddddddddddddddddddddddddddddddddddddddddddddddddddddddd..............
        ..ddddddddddddddddddddddddddddddddddddddddddddddddddddddd..............
        ..dddddddddddddddddddddddddddddddddddddddddddddddddddddddd.............
        ..ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd............
        ..ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..........
        ..ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd........
        ..dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd...
        .dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .dddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddd
        ..dddddddddddddddddddddddddddddddddddddddddddddd555ddddddddddddddddddd.
        ...............ddddddddddddddddddddddddddddddd...5......dddddddd.......
        `,
    img`
        ........5...............1111...........
        ...5.............1111..111111..........
        ..555..........111111111111111..5......
        ...5.......5.111111111111111111.....5..
        ..........5551111111111111111111...555.
        ....5....151111111111111111111111...5..
        ........1111111111111111111111111......
        .......1111111111111111111111111111....
        ...5..111111111111111111111111111111...
        ..55511111111111111111111111111111111..
        ...5.111111111111111111111111111111111.
        ....1111111111111111111111111111111111.
        ..5.11111111111111111111111111111111111
        ....11111111111111111111111111111111111
        ..1111111111111111111111111111111111111
        .1111111111111111111111111111111115111.
        1111111111111111111111111511111111111..
        111111111111111111.......5.............
        `
    ]
    stars = [
    img`
        . . . . . . . . . . . . . . . 1 
        . 5 . 1 . . 5 . . . . 5 . . . . 
        . . . . . 5 5 5 . . . . . . 5 . 
        . . . 5 . . 5 . . . . . . . . . 
        . 5 . . . . . . . 1 . . . . . . 
        . . . . . . . 1 . . . . . . 5 . 
        . . . 5 . . . . . 5 . . 1 . . . 
        . . . . . 5 . . 5 5 5 . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . 5 . . . 1 . . . . . 5 . . . 
        . 5 5 5 . . . . . . . 5 5 . . . 
        . . 5 . . . . . . . . . 5 . . 1 
        . . . . . . . . . . 1 . . . . . 
        . . . . . 5 . . . . . . . . . . 
        1 . . . . . . . 1 . . . . 1 . . 
        . . . . 1 . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . 1 
        . 5 . 1 . . 5 . . . . 5 . . . . 
        . . . . . 5 5 5 . . . . . . 5 . 
        . . . 5 . . 5 . . . . . . . . . 
        . 5 . . . . . . . 1 . . . . . . 
        . . . . . . . 1 . . . . . . 5 . 
        . . . 5 . . . . . 5 . . 1 . . . 
        . . . . . 5 . . 5 5 5 . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . 5 . . . 1 . . . . . 5 . . . 
        . 5 5 5 . . . . . . . 5 5 . . . 
        . . 5 . . . . . . . . . 5 . . 1 
        . . . . . . . . . . 1 . . . . . 
        . . . . . 5 . . . . . . . . . . 
        1 . . . . . . . 1 . . . . 1 . . 
        . . . . 1 . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 5 . . 
        . . . . . . . . b . . . . 5 . . 
        . . . . . . . b d b . . . 5 5 . 
        . . . . . . . c d c . 5 5 . . . 
        . . . . . . . c 5 c 5 . . . 5 . 
        . . . . . . c d 5 d c . . . . 5 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . 5 . . . . 
        . . . . . . . c d c . 5 5 . 5 . 
        . . . . . . . b d b . . . . . 5 
        . . . . . . . . b . . 5 5 5 5 . 
        . . . . . . . . . . . . . . 5 5 
        `,
    img`
        . . 1 . . . . . . . . . . . . . 
        5 . . . . . 5 . . . 5 . . . 5 . 
        . . . 5 . . . . . 5 5 5 . . . . 
        . . 5 5 5 . . . . . 5 . . 1 . 5 
        . . . 5 . . . 5 . . . . . . 5 5 
        . . . . . . 5 5 5 . . . 5 . . 5 
        . 5 . . . . . 5 . . . 5 5 . . . 
        5 5 5 . . 1 . . . . . . . . 5 . 
        . 5 . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 . . . . . 
        . . 1 . . 5 . . . . . . . . 1 . 
        . 5 . . 5 5 5 . . . . . 5 . . . 
        5 5 5 . . 5 . . . . . 5 5 5 . . 
        . 5 . . . . . . . . . . 5 . . . 
        . . . 1 . . . . . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
}
function createTree () {
    tree = sprites.createProjectileFromSide(trees[randint(0, trees.length - 1)], -50, 0)
    tree.bottom = 100
    tree.z = -1
}
let grass: Sprite = null
let projectile: Sprite = null
let obstacleImage: Image = null
let tree: Sprite = null
let stars: Image[] = []
let grassImages: Image[] = []
let trees: Image[] = []
let obstacles: Image[] = []
let bunnyFrames: Image[] = []
let birdFrames: Image[] = []
let clouds: Image[] = []
let cloud: Sprite = null
let bird: Sprite = null
let gravity = 0
let bunny: Sprite = null
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scene.setBackgroundColor(10)
bunny = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f 5 5 f . . . 
    . . . . . . f f 5 5 f f . . . . 
    . . . . . f f 5 5 5 5 5 f . . . 
    . f f f f f 5 5 5 5 5 5 5 f . . 
    . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 f 5 d 1 f 5 f 4 f . . 
    . . f f 5 5 f 1 f f 5 4 4 f . . 
    f f f f 5 5 5 d f f 4 4 4 4 f f 
    f 5 5 f f 5 5 f 5 4 4 4 4 4 4 4 
    f 5 5 5 f f f 5 5 5 5 4 4 5 f . 
    f f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f f 5 5 5 5 5 5 5 5 5 5 f f . 
    . . f f 5 5 5 5 5 5 5 5 f f f . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
gravity = 400
bunny.ay = gravity
bunny.x = 20
bird = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
bird.setPosition(160, 20)
bird.setVelocity(-120, 0)
setupFrames()
game.onUpdate(function () {
    if (bird.x < 0) {
        bird.setPosition(randint(160, 240), randint(20, 60))
    }
})
game.onUpdate(function () {
    if (bunny.bottom > 105) {
        bunny.bottom = 105
        bunny.vy = 0
        bunny.ay = 0
        animation.runImageAnimation(
        bunny,
        bunnyFrames,
        50,
        true
        )
    }
})
game.onUpdateInterval(2000, function () {
    obstacleImage = obstacles[randint(0, obstacles.length - 1)]
    projectile = sprites.createProjectileFromSide(obstacleImage, -100, 0)
    projectile.bottom = 105
    projectile.setKind(SpriteKind.Obstacle)
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(40)) {
        createCloud()
    }
})
forever(function () {
    if (Math.percentChance(60)) {
        createTree()
        if (Math.percentChance(80)) {
            pause(randint(150, 300))
            createTree()
        }
    }
    pause(1500)
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(40)) {
        grass = sprites.createProjectileFromSide(grassImages[randint(0, grassImages.length - 1)], -50, 0)
        grass.bottom = 100
        grass.z = -1
    }
})