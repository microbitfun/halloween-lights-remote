radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showIcon(IconNames.Ghost)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Skull)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
