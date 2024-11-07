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
        . . . . . . . . b b b b b . . . 
        . . . . . . b b d d d d b b . . 
        . . . . . b d d d d d d d c . . 
        . . . . c d d d d d d d d c . . 
        . . . c b d d d d d d d b c c . 
        . . . c b b d d d d b c c c c . 
        . . c c d b b b c c c c c c c . 
        . . c c c d d d d c c d d d c c 
        . c d b c c b b c c d d d d d c 
        . c b d d b b b c c d d d d d c 
        . c c b b b b c b c b d d d b c 
        c b b c c c c c b b b b b c c c 
        c c b b c c c c c d d d d d b c 
        c c c c c c b b b b b c c c c c 
        c c c c c c c b b b b b c c c c 
        c c c c c c c c b b b b b c c c 
        `,
    img`
        . . . . . b b b b b b . . . . . 
        . . . b b d d d d d d b b . . . 
        . . b b d d b b b b d d b b . . 
        . e d b d b d d d d b d b d e . 
        . f d b d d b b b b d d b d e . 
        . f b d b b d d d d b b d b e . 
        . f e d d d b b b b d d d e e . 
        . f f e b d d d d d d b e e f . 
        . f f e e e e e e e e e e e f . 
        . f f e e e f e e e e e e e f . 
        . f f e f e e e f f e e f e e f 
        . f e e f e f e f e f e f e e e 
        f f e e e e f e e f f e f f e e 
        f e e e e f f e e e e e f f f e 
        e e e e f f f e f e e e e f f f 
        e e e e f f f e f e e e e f f f 
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
        . . . . . . c c c c c c . . . . 
        . . . . c c b b d d d d c . . . 
        . . . c c b b d d d d d d c . . 
        . . c b b d b d d d d d d b c . 
        . c b b b d b b d d d d d b c . 
        . c b b b d d b d d d d b b c . 
        c b c b b b d d b b b b b c c . 
        c b c c b b b b d d d b c c c . 
        c b b c c c c c c c c c c c c . 
        c c b b b b b b c c b d d d b c 
        c c c c c c c c c d d d d d d c 
        c c c c c c c b c b d d d d d b 
        c b b b c c c b c c b d d d c b 
        c c b b b c c b b c c c c b b c 
        c c c c c c c c b b b b b b c c 
        c c c c c c c c c c c c c c c c 
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
        ....................................
        ...................b................
        ...................b................
        ...................b................
        ..................bbb...............
        ..................bb................
        .................bbbb...............
        ................bbbbbb..............
        ..................bb................
        .................bbbb...............
        ................bbbbbb..............
        ...............bbbbbbbb.............
        ..............bb..bbbbbb............
        .................bbbb..bbb..........
        ..................bb................
        .................bbbb...............
        ................bbbbbb..............
        ...............bbbbb.bb.............
        ..............bbbbbbbbbb............
        ............bbbb.bbbbbbb............
        ..........bbbbb..bbbbb.bbbb.........
        ................bbbbbb...bbb........
        ...............bbbbbbbb.............
        ..............bbbbbb.bb.............
        ...........bbbbbbbbbbbbb............
        .........bbbbbb..bbbb.bbb...........
        ..........bbbbb..bbbb...............
        ................bbbbbbb.............
        ...............bbbbbbbbb............
        .............bbbbbbbbb..............
        ...........bbbbbbbbbbbbbbbbb........
        ..........bbbbbbbbbbbbbbbbb.........
        .........bbbb.bbbbbbbb..............
        ........bb....bbbbbbbbb.............
        ............bbbbbbbbbbbbb...........
        ........bbbbbbbbbbbbbbbbbbbb........
        .......bbbbbbbbbbbbbbbbbbbbbbb......
        ......bbbbbbbb...bbbbbbbbb..........
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        `, img`
        ...................b................
        ...................b................
        ...................b................
        ..................bbb...............
        .................bbbbbb.............
        ..................bb................
        ...................bbbb.............
        .................bbbbbbb............
        ...............bbb.b................
        ..................bbb...............
        ...............bbbbbbb..............
        ................bbbbbbbb............
        ..................bb.bbbb...........
        ..................bbb...............
        .................bbbbbb.............
        .............bbbbbbb.bbbb...........
        ............bbbbb.bbb...............
        ..................bbb...............
        .................bbbbb..............
        ..............bbbbbbbb..............
        .............bbbbbbbbbb.............
        ............bbb..bbbbbbbb...........
        ...........bbbb.bbbbbbbb.b..........
        ............b...bbbbbbbbb...........
        ...............bbbbbbbbbbb..........
        ..............bbbbbbb.bbbb..........
        .............bbbbbbbbbbbbbbb........
        ...........bbbb.bbbbbbb.............
        ...............bbbbbb.bb............
        .............bbbbbbbbbbbb...........
        ............bbbbbbbbbbbbbb..........
        ............bbbbbbbbbb..bbb.........
        .........bbbbbbbbbbbbbb..bbbb.......
        ........bb...bbbbbbbbb..............
        ..............bbbbbbbbbbb...........
        ............bbbb.bbbbbbbb...........
        ........bbbb.b...bbbbbbb............
        ................bbbbb..bbbb.........
        .............bbbbb.bbbbbbbb.........
        .........bbbbbb..bbbb..bbbbb........
        ........bb.b....bbbbb.....bbb.......
        ................bbbbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        `, img`
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ...................b................
        ...................b................
        ...................b................
        ...................b................
        ..................bb................
        ..................bbb...............
        .................bbbb...............
        ...............bbbbb................
        ..................bb................
        .................bbbb...............
        .................bbbb...............
        .................bbbbb..............
        ................bbbbbbb.............
        ..............bbbbbbbbbb............
        ............bbbb..bbbbbbb...........
        .................bbbb...............
        .................bbbb...............
        ................bbbbbb..............
        ................bbbbbb..............
        ...............bbbbbbbb.............
        ............bbbbbbbbbbbbb...........
        ........bbbbbbbbbbbbbbbbbbbb........
        ...........bbbbbbbbbbbbbbbb.........
        ................bbbbbbb.b...........
        ..............bbbbbbbbbbbbbbbb......
        ...........bbbbbbbbbbbbbbbbbb.......
        ........bbbbbbbbbbbbbbbbbbb.........
        ..........bbbbb...bbbb..............
        ..................bbb...............
        ..................b.b...............
        ..................b.b...............
        ..................bbb...............
        ..................bbb...............
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
        ............................11.....................
        .........................1111111...................
        ........................111111111111...............
        .......................11111111111111..............
        ......................1111111111111111.............
        .....................11111111111111111.............
        ..................111111111111111111111............
        ...............1111111111111111111111111...........
        ..........1111111111111111111111111111111..........
        .........111111111111111111111111111111111.........
        ........111111111111111111111111111111111111.......
        .......111111111111111111111111111111111111111.....
        .......1111111111111111111111111111111111111111....
        .......11111111111111111111111111111111111111111...
        .......111111111111111111111111111111111111111111..
        ......1111111111111111111111111111111111111111111..
        ....111111111111111111111111111111111111111111111..
        ...11111111111111111111111111111111111111111111111.
        ..111111111111111111111111111111111111111111111111.
        .11111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111.
        .....1111111111111111111111111111111111111111......
        `,
    img`
        .........................11111................
        ........................1111111...............
        ......................1111111111..............
        ..................111111111111111.............
        ...............111111111111111111.............
        ..............1111111111111111111111111.......
        .............111111111111111111111111111......
        .............111111111111111111111111111......
        .............1111111111111111111111111111.....
        ............11111111111111111111111111111.....
        ............111111111111111111111111111111....
        ............111111111111111111111111111111....
        ...........11111111111111111111111111111111...
        ......11111111111111111111111111111111111111..
        .....1111111111111111111111111111111111111111.
        ....11111111111111111111111111111111111111111.
        ...1111111111111111111111111111111111111111111
        ...1111111111111111111111111111111111111111111
        ...1111111111111111111111111111111111111111111
        ...1111111111111111111111111111111111111111111
        ..11111111111111111111111111111111111111111111
        .111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111.
        11111111111111111..................111111111..
        `,
    img`
        ........11111111.................
        .......1111111111................
        ....11111111111111...............
        ...1111111111111111..............
        ..11111111111111111111111........
        ..111111111111111111111111.......
        .11111111111111111111111111......
        .111111111111111111111111111.....
        1111111111111111111111111111.....
        111111111111111111111111111111...
        .111111111111111111111111111111..
        .1111111111111111111111111111111.
        ..1111111111111111111111111111111
        .....1111111111111111111111111111
        ......111111111111111111111111...
        .................................
        `,
    img`
        ...................1111................................................
        ..................111111...............................................
        .................11111111111111........................................
        ................1111111111111111.......................................
        ..............1111111111111111111......................................
        ............1111111111111111111111.....................................
        ...........11111111111111111111111.....................................
        ..........111111111111111111111111.....................................
        ..........1111111111111111111111111......11111.........................
        .........11111111111111111111111111...111111111........................
        .........111111111111111111111111111111111111111.......................
        .......111111111111111111111111111111111111111111......................
        ......1111111111111111111111111111111111111111111111...................
        ....11111111111111111111111111111111111111111111111111.................
        ...1111111111111111111111111111111111111111111111111111................
        ...11111111111111111111111111111111111111111111111111111...............
        ..1111111111111111111111111111111111111111111111111111111..............
        ..1111111111111111111111111111111111111111111111111111111..............
        ..11111111111111111111111111111111111111111111111111111111.............
        ..111111111111111111111111111111111111111111111111111111111............
        ..11111111111111111111111111111111111111111111111111111111111..........
        ..1111111111111111111111111111111111111111111111111111111111111........
        ..111111111111111111111111111111111111111111111111111111111111111111...
        .11111111111111111111111111111111111111111111111111111111111111111111..
        1111111111111111111111111111111111111111111111111111111111111111111111.
        1111111111111111111111111111111111111111111111111111111111111111111111.
        11111111111111111111111111111111111111111111111111111111111111111111111
        .1111111111111111111111111111111111111111111111111111111111111111111111
        ..11111111111111111111111111111111111111111111111111111111111111111111.
        ...............1111111111111111111111111111111..........11111111.......
        `,
    img`
        ........................1111...........
        .................1111..111111..........
        ...............111111111111111.........
        .............111111111111111111........
        ............11111111111111111111.......
        .........111111111111111111111111......
        ........1111111111111111111111111......
        .......1111111111111111111111111111....
        ......111111111111111111111111111111...
        .....11111111111111111111111111111111..
        .....111111111111111111111111111111111.
        ....1111111111111111111111111111111111.
        ....11111111111111111111111111111111111
        ....11111111111111111111111111111111111
        ..1111111111111111111111111111111111111
        .1111111111111111111111111111111111111.
        1111111111111111111111111111111111111..
        111111111111111111.....................
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
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
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
scene.setBackgroundColor(12)
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
        if (Math.percentChance(50)) {
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
