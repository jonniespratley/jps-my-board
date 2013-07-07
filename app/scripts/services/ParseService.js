'use strict';

angular.module('myBoardApp').factory('ParseService', [ '$q', function ($q) {
		Parse.initialize("EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5", "stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD");
		var ParseService = function(){
			return {
				get: function(model, params, successCb, errorCb){
					var	query = new Parse.Query(model),
							delay = $q.defer(),
							data = null;
							if(params){
								//query.greaterThan(params.name, params.value);		
							}
						// Retrieve the most recent ones
						query.descending("createdAt");
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
										amount: obj.get('amount'),
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
				},
				add: function(model, data, success, error){
					//add user to this data object
					var ParseObject = Parse.Object.extend(model);
					var _parseObject = new ParseObject();
					
						if(Parse.User.current()){
							_parseObject.setACL(new Parse.ACL(Parse.User.current()));
						}
					
							_parseObject.save(data, {
								success: function(object) {
									if(success){
										success(object);
									}
								},
								error: function(err){
									if(error){
										error(err);
									}
								}
							});
						}
				}
			}
		
		return ParseService();
}]);