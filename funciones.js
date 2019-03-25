const fs = require("fs")
listaEstudiantes = []

const crear = (estudiante) => 
{
    listar()
    let est =
    {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    }
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
    if (!duplicado)
    {
        listaEstudiantes.push(est)
        console.log(listaEstudiantes)
        guardar()
    }
    else
    {
        console.log("Ya existe otro estudiante con ese nombre")
    }
}

const listar = () =>
{
    try
    {
        listaEstudiantes = require("./listado.json")
        //Para funciones asincronicas se usa la siguiente linea: 
        //  listaEstudiantes = JSON.parse(fs.readFileSync("listado.json"))
    }
    catch(error)
    {
        listaEstudiantes = []
    }

}

const guardar = () =>
{
    let datos = JSON.stringify(listaEstudiantes)
    fs.writeFile("listado.json", datos,(err) =>
    {
        if (err) throw (err)
        console.log("Archivo creado con exito")
    } )
}

const mostrar = () =>
{
    listar()
    console.log("notas estudiantes")
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre)
        console.log("notas")
        console.log("matematicas", estudiante.matematicas)
        console.log("ingles", estudiante.ingles)
        console.log("programacion", estudiante.programacion,"\n" )
    });
}

const mostrarest = (nom) =>
{
    listar()
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    console.log(est)
    if (!est)
    {
        console.log("No existe este estudiante")
    }
    else
    {
        console.log(est.nombre)
        console.log("notas")
        console.log("matematicas", est.matematicas)
        console.log("ingles", est.ingles)
        console.log("programacion", est.programacion,"\n" )
    }

}

const CalcularPromedio = (nota1,nota2,nota3)  =>
{
    return (nota1 + nota2 + nota3)/3
}
const mostrarMejores = () =>
{
    listar()
    console.log("mejoresEstudiantes")
    listaEstudiantes.forEach(estudiante => {
        notaM = estudiante.matematicas
        notaI = estudiante.ingles
        notaP = estudiante.programacion
        promedio = CalcularPromedio(notaM, notaI, notaP)
        if (promedio > 3)
        {
            console.log(estudiante.nombre)
            console.log("PROMEDIO", promedio)
            console.log("notas")
            console.log("matematicas", estudiante.matematicas)
            console.log("ingles", estudiante.ingles)
            console.log("programacion", estudiante.programacion,"\n" )
        }
        
    });
}

module.exports = 
{
    crear,
    mostrar,
    mostrarest,
    mostrarMejores

}