/**
 * usando express como servidor web
 */


const express = require('express')
const app = express()

/**
 * Creamos un middleware para ver la pagna web de publilc
 */

 app.use(express.static(__dirname+ '/public'))
 
// app.get('/',  (req, res) => {
//     let salida = {
//         nombre: 'Fleury',
//         edad: 34,
//         url: req.url
//     }

//     res.send(salida);
// })

 
app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000')
})