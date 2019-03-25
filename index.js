const {argv} = require('./yargs')
const funciones = require("./funciones")
let comando = argv._[0]

switch (comando) {
	case "crear":
	funciones.crear(argv)
	break

	case "mostrar":
	funciones.mostrar()
	break
	
	case "mostrarest":
	funciones.mostrarest(argv.nombre)
	break
	
	case "mostrarMejores":
	funciones.mostrarMejores()
	break

	default:
	console.log("ingrese un comando que existe")
}
