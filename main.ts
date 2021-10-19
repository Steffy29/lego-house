function ledRGB () {
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P2, 1023)
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index <= 513; index++) {
            pins.analogWritePin(AnalogPin.P0, index)
            pins.analogWritePin(AnalogPin.P1, 1023 - index)
            pins.analogWritePin(AnalogPin.P2, 512 - index)
            basic.pause(1)
        }
    }
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
}
let number = 0
let reading = 0
led.enable(false)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P4)
    number = Math.idiv(reading, 50)
    if (number > 10) {
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        soundExpression.hello.playUntilDone()
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        for (let index = 0; index < 5; index++) {
            ledRGB()
            basic.pause(100)
        }
    }
})
