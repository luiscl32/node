module.exports = function(app){
  app.get('/profile/:user', (req, res) => {
      res.send(`Hola ${req.params.user}`)
  })
}