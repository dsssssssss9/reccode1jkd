radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item == "A") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        -200
        )
    } else if (item == "B") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        200
        )
    } else if (item == "C") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        -200
        )
    } else if (item == "S") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    } else if (item == "0") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    } else if (item == "E") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (item == "F") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item == "G") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item == "H") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (item == "I") {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
item = "S"
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . # . # .
    `)
