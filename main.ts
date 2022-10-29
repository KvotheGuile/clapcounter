input.onSound(DetectedSound.Loud, function () {
    clap += 1
    basic.showNumber(clap)
})
let clap = 0
clap = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
	
})
