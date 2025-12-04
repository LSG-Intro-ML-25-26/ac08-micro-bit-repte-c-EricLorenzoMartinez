radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > dice) {
        basic.showIcon(IconNames.Sad)
    } else {
        if (receivedNumber < dice) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola")
    basic.showString("ENVIAT!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(1)
