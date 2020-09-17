input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(247, music.beat(BeatFraction.Whole))
        temperature = input.temperature()
        basic.showNumber(input.temperature())
        if (input.temperature() < 10) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
            basic.showString("hot")
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
            basic.showString("cold")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        compass = input.compassHeading()
        basic.showNumber(input.compassHeading())
        if (input.compassHeading() < 10) {
            music.playTone(294, music.beat(BeatFraction.Whole))
            basic.pause(100)
            basic.showString("close")
        } else {
            music.playTone(294, music.beat(BeatFraction.Whole))
            basic.pause(100)
            basic.showString("far")
        }
    }
})
let compass = 0
let temperature = 0
basic.showString("pick one")
