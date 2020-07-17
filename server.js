const path = require('path');
const express = require('express');
const app = express();
var router = express.Router();


var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

// serve angular front end files from root path
router.use('/', express.static('app', { redirect: false }));

// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function(req, res, next) {
  res.sendFile(path.resolve('dist/workflow-test/index.html'));
});
// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/workflow-test¬index.html'));
});

const port = process.env.PORT || 5000;
// default Heroku port

app.listen(port, function() {
  console.log('App running on port' + port);
});

module.exports = router;
