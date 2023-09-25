const {check} = require('express-validator')

module.exports = [
    check('title')
    .notEmpty().withMessage('Nombre de la pelicula es obligatorio')
    .isLength({
        min:2,
    }).withMessage('Tiene que se al menos 2 caracteres'),
    check('rating')
    .notEmpty().withMessage('Rating de la pelicula es obligatorio'),
    check('awards')
    .notEmpty().withMessage('Premios es obligatorio'),
    check('release_date')
    .notEmpty().withMessage('Fecha de estreno es obligatorio'),
    check('length')
    .notEmpty().withMessage('Duracion es obligatorio')
]