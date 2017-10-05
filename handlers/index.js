const homeHandler = require('./home')
const filesHandler = require('./static-files')
const other= require('./content/images')
const other2 =require('./content/styles/site.css')
module.exports = [ homeHandler, filesHandler,other,other2 ]