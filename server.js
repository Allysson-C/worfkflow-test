//Install express server
const express = require('express');
const path = require('path');

const app = express();

var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

// serve angular front end files from root path
router.use('/', express.static('app', { redirect: false }));
// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function(req, res, next) {
  res.sendFile(path.resolve('dist/index.html'));
});
// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
