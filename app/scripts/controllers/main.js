'use strict';

/**
 * @ngdoc function
 * @name serviApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviApp
 */
angular.module('serviApp')
  .controller('MainCtrl',['$scope','$resource','Usuario','Servicio', function ($scope,$resource,Usuario,Servicio) {
    var Usuarios = Usuario.get(function() {
      $scope.usuarios = Usuarios.usuarios;        
	});
	var Servicios = Servicio.get(function() {
      $scope.clientes = Servicios.clientes;        
	});
}]);
