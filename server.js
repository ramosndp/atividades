var mongoose = require('mongoose');
var atividadesModel = require('./models/atividades');

var express = require('express');
var app = express();
app.set('views',__dirname);
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

app.get('/api/atividades', function(req, res){
    mongoose.model('atividades').find({}).exec(function(error,collection){
        res.send(collection);
        });
    });

app.get('*', function(req, res){
    res.render('index');
    });

/*mongoose.connect('mongodb://localhost/atividades');   */
mongoose.connect('mongodb://ndpr:hjknr200@ds061661.mongolab.com:61661/atividades');



var con = mongoose.connection;
con.once('open', function(){
    console.log('Ligação ao MongoDB efetuada com sucesso');
    atividadesModel.criaAtividades();
});      
 

app.listen(process.env.PORT, process.env.IP);    
