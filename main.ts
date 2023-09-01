input.onButtonPressed(Button.A, function () {
    vogel.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    vogel.change(LedSpriteProperty.Y, 1)
})
let leersHindernisY = 0
let häkchen = 0
let vogel: game.LedSprite = null
vogel = game.createSprite(0, 2)
let hindernisse: game.LedSprite[] = []
basic.forever(function () {
    while (hindernisse.length > 0 && hindernisse[0].get(LedSpriteProperty.X) == 0) {
        hindernisse.removeAt(0).delete()
    }
    for (let hindernis of hindernisse) {
        hindernis.change(LedSpriteProperty.X, -1)
    }
    if (häkchen % 3 == 0) {
        leersHindernisY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != leersHindernisY) {
                hindernisse.push(game.createSprite(4, index2))
            }
        }
    }
    for (let hindernis2 of hindernisse) {
        if (hindernis2.get(LedSpriteProperty.X) == vogel.get(LedSpriteProperty.X) && hindernis2.get(LedSpriteProperty.Y) == vogel.get(LedSpriteProperty.Y)) {
            game.gameOver()
            music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
        }
    }
    häkchen += 1
    if (häkchen > 15) {
        basic.pause(800)
    } else {
        basic.pause(1000)
    }
})
