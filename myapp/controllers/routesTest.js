/*let getTest = async (request, response)=>{
response.json({

    message: "Hello World",
    hora: "10:14 del 18 de febrero de 2026"

})

}

const postTest = async () =>{

}

module.exports ={
    getTest,
    postTest
}
*/

let getTest = async (req, res) => {

    const mostrarHora = true; 

    if (mostrarHora) {
        return res.json({
            message: "Hola Mundo",
            hora: new Date().toLocaleString()
        })
    }

    res.json({
        message: "Hola Mundo"
    })
}
//http://localhost:3000/testr/test

let postTest = async (req, res) => {
    const { nombre } = req.body

    res.json({
        message: ` Hola ${nombre}, Entendido!`
    })
}
//http://localhost:3000/testr/saludo/:NOMBRE

let getSaludo = async (req, res) => {
    const nombre = req.params.nombre

    res.json({
        message: `Hola ${nombre}, Bienvenido!`
    })
}
//http://localhost:3000/testr/saludo/:NOMBRE

module.exports = {
    getTest,
    postTest,
    getSaludo
}