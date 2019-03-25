const nombre =
{
    demand: true,
    alias: 'n'
}
const matematicas =
{
    demand: true,
    alias: 'm'
}

const ingles =
{
    default: true,
    alias: "i"
}

const programacion = {
    //Obliga a que el atrbiuto sea obligatorio
    demand: true,
    alias: "p"
}

const creacion = 
{
    nombre,
    matematicas, 
    ingles,
    programacion
}
const mostrarest =
{
    nombre
}

const argv = require("yargs")
            .command("crear", "Crear un estudiante", creacion)
            .command("mostrar", "Muesta los estudiantes y sus notas")
            .command("mostrarest", "Muestra el estudiante solicitado",mostrarest)
            .argv

module.exports = {
    argv
}