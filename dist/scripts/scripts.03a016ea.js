"use strict";angular.module("serviApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("serviApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("serviApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("serviApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>Bienvenido a Servi</h1> <p class="lead"> Aquí podrás encontrar todo tipo de servicios de una manera fácil, rápida y barata. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Buscar<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>Siempre en linea</h4> <p> Hacemos todo lo posible por mantener nuestros servicios funcionales 24 horas 7 dias a la semana! </p> <h4>Ganar , Ganar</h4> <p>Servi funciona bajo un metodo que intenta hacer ganar tanto al que necesita un servicio como al que lo ofrece!</p> </div>')}]);