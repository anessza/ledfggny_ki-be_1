let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (led.point(0, 0)) {
        x = 4
        y = 4
        for (let c = 0; c <= 4; c++) {
            for (let k = 0; k <= 4; k++) {
                y = 4 - k
                x = 4 - c
                led.unplot(x, y)
                basic.pause(100)
            }
        }
    } else {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(100)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    x = 4
    y = 4
    for (let c = 0; c <= 4; c++) {
        for (let k = 0; k <= 4; k++) {
            y = 4 - k
            x = 4 - c
            led.unplot(x, y)
            basic.pause(100)
        }
    }
})
