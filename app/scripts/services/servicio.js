'use strict';

/**
 * @ngdoc service
 * @name serviApp.Servicio
 * @description
 * # Servicio
 * Factory in the serviApp.
 */
angular.module('serviApp')
  .factory('Servicio', [ '$resource','$http' , function ($resource,$http) {
  	var apiUrl = 'http://192.168.0.7:9000';
  	$http.defaults.useXDomain = true;
    //return $resource('/api/clientes/'); // Note the full endpoint address
    return $resource(apiUrl + '/api/clientes/'); // mobile to local
}]);
