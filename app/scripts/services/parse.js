'use strict';
//https://EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5:javascript-key=stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD@api.parse.com/1/classes/GameScore/
angular.module('myBoardApp').factory('parse', ['$q', function ($q){
	var Service = function(apikey, apisecret, model, successCb, errorCb){
  	Parse.initialize(apikey, apisecret);
		var	query = new Parse.Query(model),
				delay = $q.defer(),
				data = null;
			query.find({
				success: function(results) {
					data = results.map(function(obj){
						return {	
							id: obj.id,
							title: obj.get('title'),
							body: obj.get('body'),
							duration: obj.get('duration'),
							day: obj.get('day'),
							meal: obj.get('meal'),
							intensity: obj.get('intensity'),
							user_id: obj.get('user_id'),
							calories: obj.get('calories'),
							date: obj.get('date'),
							created: obj.createdAt,
							updated: obj.updatedAt
						}
					});
					if(successCb){
						successCb(data);
					} else {
						delay.resolve(data);
					}
				},
				error: function(error) {
					if(errorCb){
						errorCb(error);
					}
					delay.reject(error);
				}
			});
		return delay.promise;
	}
	
	
		return Service;
}]);
