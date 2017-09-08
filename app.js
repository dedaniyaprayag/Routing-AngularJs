var app = angular.module ('ProjectList',["ngRoute"]);

app.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl: "templates/projectList.html"
    })
    .when('/edit/:projectId',{
    	templateUrl: "templates/editList.html"
    });
});