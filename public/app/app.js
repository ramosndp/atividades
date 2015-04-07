var app = angular.module("app",[]);
app.controller('testeCtlr', function($scope,$http){
   $http.get("/api/atividades")
   .success(function(response){
       $scope.atividades = response;
   })
   .error(function(reason){
       $scope.erro = reason;
   });
   
     /*$scope.atividades = [{
        nome: 'Workshop de Robótica',
        descricao: 'Demonstração de robôs NXT, Roamer, Robonova e Pleo pelo projeto CAPER'
    }, {
        nome: 'Demonstração de Robótica e Inteligência Artificial',
        descricao: 'Apresentação dos projetos de alunos de Engenharia Informática da UMa'
    }]*/
});