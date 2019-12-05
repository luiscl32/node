const API_PATH = '/api'
const films = require('../../resources/films.json')

module.exports = function getFilms(app){
  app.get(`${API_PATH}/films`, (req, res) => {
    res.json(films)
  })
}