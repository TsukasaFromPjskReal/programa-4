let velocidad = 700
let tipo_giro = 1000
let tiempo_giro_2 = 800
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(800)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
maqueen.motorStop(maqueen.Motors.M2)
basic.pause(tipo_giro)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(1300)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(tiempo_giro_2)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(350)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(tiempo_giro_2)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(500)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
maqueen.motorStop(maqueen.Motors.M2)
basic.pause(tiempo_giro_2)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(500)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(tiempo_giro_2)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(500)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
