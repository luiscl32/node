const glob = require('glob')
const path = require('path')

function mainRoute(app){
  glob.sync('./routes/**/*.js').forEach(e => {
    if(!e.includes('index.js')){
      require(path.resolve(e))(app);
    }
  });
}

module.exports = mainRoute