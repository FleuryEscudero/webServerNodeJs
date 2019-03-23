/**
 * usando express como servidor web
 */
    const express = require('express')
    const app = express()
    const hbs = require('hbs');
    require ('./hbs/helpers');

/**
 * Configuracion para heroku
 */
    const port = process.env.PORT || 3000

/**
 * Creamos un middleware para ver la pagna web de publilc
 */

    app.use(express.static(__dirname+ '/public'));


 /**
  * Este motor HBS es como usar cualqueir framework de front es similar a handlebars
  */

 //EXpress HBS engine

    hbs.registerPartials(__dirname + '/views/partials');
    app.set('view engine', 'hbs');
    



    app.get('/',  (req, res) => {

        /**
         * vamos a usar un template engine
         */

        res.render('home',{
            nombre: 'Fleury',
            
        });
    });

    app.get('/about',  (req, res) => {
        
        /**
         * vamos a usar un template engine
         */

        res.render('about',{
            nombre: 'Fleury',

        });
    });

 
    app.listen(port, ()=>{
        console.log(`Escuchando peticiones en el puerto ${port}`)
    })