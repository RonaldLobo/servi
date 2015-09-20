'use strict';

/**
 * @ngdoc service
 * @name serviApp.Usuario
 * @description
 * # Usuario
 * Factory in the serviApp.
 */
angular.module('serviApp')
  .factory('Usuario', [ '$resource' , function ($resource) {
  	var apiUrl = 'http://192.168.0.7:9000';
    //return $resource('/api/usuarios/'); // Note the full endpoint address
    return $resource(apiUrl  +'/api/usuarios/'); // mobile to local
}]);
