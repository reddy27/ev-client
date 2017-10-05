let express = require('express');
let app = express();
app.set('port', (process.env.PORT || 5000));
//app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
//var server = app.listen(4005);

//console.log('got request');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
