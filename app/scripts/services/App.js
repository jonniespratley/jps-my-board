'use strict';
angular.module('myBoardApp').factory('App', ['$rootScope', '$location',
function($rootScope, $location) {
	//Main App Object
	var App = {
		debug : false,
		currentDate : new Date(),
		user : {
			username : 'demo',
			password : 'demo',
			name : 'Guest',
			emal : 'jonniespratley@gmail.com'
		},
		currentUser : Parse.User.current(),
		nav : [{
			title : 'My Career',
			icon : 'briefcase',
			href : 'career'
		}, {
			title : 'My Health',
			icon : 'medkit',
			href : 'health'
		}, {
			title : 'My Network',
			icon : 'sitemap',
			href : 'network'
		}],
		init : function() {

			window.fbAsyncInit = function() {
				// init the FB JS SDK
				Parse.FacebookUtils.init({
					appId : '143045392563170', // Facebook App ID
					channelUrl : '//http://my-board.aws.af.cm/channel.html', // Channel File
					status : true, // check login status
					cookie : true, // enable cookies to allow Parse to access the session
					xfbml : true  // parse XFBML
				});
			};
			if(this.currentUser) {
				this.initUser();
				this.log('Logged in.');
			} else {
				this.currentUser = null;
				$location.url('/');
				this.log('Logged out.');
			}
			return this;
		},
		//logger
		log : function(obj) {
			if(this.debug) {
				console.log(obj);
			}
		},
		alerts : [],
		alert : function(type, title, content) {
			var a = {
				"type" : type,
				"title" : title,
				"content" : content
			};
			$rootScope.$apply(function(){
				App.alerts.push(a);
			});
			return a;
		},
		initUser : function() {
			this.user = angular.extend({
				username : App.currentUser.get('username'),
				email : App.currentUser.getEmail() ? this.currentUser.getEmail() : '',
				gender : App.currentUser.get('gender'),
				height : App.currentUser.get('height'),
				name : App.currentUser.get('name'),
				calories : App.currentUser.get('calories'),
				activity : App.currentUser.get('activity'),
				weight : App.currentUser.get('weight'),
				twitter : App.currentUser.get('twitter'),
				facebook : App.currentUser.get('facebook'),
				klout : App.currentUser.get('klout')
			}, App.user);
			this.user.icon = 'http://gravatar.com/avatar/' + calcMD5(this.user.email) + '?s=35.png';
			this.user.avatar = 'http://gravatar.com/avatar/' + calcMD5(this.user.email) + '?s=250.png'
		},
		fblogin : function() {
			Parse.FacebookUtils.logIn(null, {
				success : function(user) {
					if(!user.existed()) {
						this.log("User signed up and logged in through Facebook!");
						$rootScope.App.currentUser = user;
						angular.element('#loginModal').modal('hide');
					} else {
						this.log("User logged in through Facebook!");
						$rootScope.App.currentUser = user;
						angular.element('#loginModal').modal('hide');
					}
				},
				error : function(user, error) {
					this.log("User cancelled the Facebook login or did not fully authorize.");
				}
			});
		},
		//Login a user
		login : function(user) {
			this.user = user;
			Parse.User.logIn(user.username, user.password, {
				success : function(user) {
					$rootScope.$apply(function() {
						$rootScope.App.currentUser = user;
						angular.element('#loginModal').modal('hide');
					});
				},
				error : function(user, error) {
					alert('Invalid username/password, try again.');
				}
			});
		},
		//Logout a user
		logout : function() {
			Parse.User.logOut();
			document.location = '/';
		},
		//Signup a user
		signup : function(user) {
			var self = this;
			self.log(user);

			Parse.User.signUp(user.username, user.password, {
				ACL : new Parse.ACL()
			}, {
				success : function(u) {
					angular.element('#signupModal').modal('toggle');
					self.login(user);
				},
				error : function(u, error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});

		},
		//Handle updating a user
		saveUser : function(u, success, error) {
			this.currentUser.set("username", u.username);
			this.currentUser.set("email", u.email);
			this.currentUser.set('name', u.name);
			//health
			this.currentUser.set("height", u.height);
			this.currentUser.set('weight', u.weight);
			this.currentUser.set('activity', Number(u.activity));
			this.currentUser.set('gender', u.gender);
			this.currentUser.set('calories', u.calories);

			//network
			this.currentUser.set('twitter', u.twitter);
			this.currentUser.set('facebook', u.facebook);
			this.currentUser.set('klout', u.klout);

			this.currentUser.save(null, {
				success : function(data) {
					if(success) {
						success(data);
					}
				},
				error : function(data) {
					if(error) {
						error(data);
					}
				}
			});
		},
		//Reset password
		reset : function(user) {

		}
	};

	return App;
}]);
