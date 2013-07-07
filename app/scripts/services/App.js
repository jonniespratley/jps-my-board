'use strict';
angular.module('myBoardApp').factory('App', [ '$rootScope', '$location', function ($rootScope, $location) {
	//Main App Object
	var App = {
		currentUser: Parse.User.current(),
		init: function(){
			Parse.initialize("EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5", "stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD");
			if (this.currentUser) {
					console.log('Logged in.');
			} else {
				this.currentUser = null;
				$location.url('/');
				// show the signup or login page
				console.log('Logged out.');
			}
			return this;
		},
		//Login a user
		login:function(user){
				console.log(user);
				Parse.User.logIn(user.username, user.password, {
				  success: function(user) {
						$rootScope.$apply(function(){
							$rootScope.App.currentUser = user;
							angular.element('#loginModal').modal('toggle');
						});
				  },
				  error: function(user, error) {
						alert('Invalid username/password, try again.');
				  }
				});
			},
			//Logout a user
			logout: function(){
				Parse.User.logOut();
				document.location = '/';
			},
			//Signup a user
			signup: function(user){
				console.log(user);
				var user = new Parse.User();
				user.set("username", user.username);
				user.set("password", user.password);
				user.set("email", user.email);
				// other fields can be set just like with Parse.Object
				user.set('name', user.username);
				user.set("height", '5-11');
				user.set('weight', 0);
				user.set('activity', 30);
				user.set('gender', 'm');
				user.set('calories', 0);
				user.signUp(null, {
				  success: function(user) {
				    // Hooray! Let them use the app now.
						angular.element('#signupModal').modal('toggle');
				  },
				  error: function(user, error) {
				    // Show the error message somewhere and let the user try again.
				    alert("Error: " + error.code + " " + error.message);
				  }
				});
			},
			//Reset password
			reset:function(user){
				
			}
	};
	
	return App;
}]);
