var mongoose = require('mongoose');

var atividadesSchema = mongoose.Schema({
    nome:{type:String},
    descricao:{type:String}
});

var atividades = mongoose.model('atividades',atividadesSchema);

exports.criaAtividades = function(){
    atividades.find({}).exec(function(error,collection){
        if(collection.length===0){
            atividades.create({nome:'Workshop de Robótica',descricao:'Demonstração de robôs NXT, Roamer, Robonova e Pleo pelo projeto CAPER'});
            atividades.create({nome:'Demonstração de Robótica e Inteligência Artificial',descricao:'Apresentação dos projetos de alunos de Engenharia Informática da UMa'});
        }
    })
};
