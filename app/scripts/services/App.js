'use strict';
angular.module('myBoardApp').factory('App', [ '$rootScope', '$location', function ($rootScope, $location) {
	//Main App Object
	var App = {
		currentUser: Parse.User.current(),
		init: function(){
			
			window.fbAsyncInit = function() {
		    // init the FB JS SDK
				Parse.FacebookUtils.init({
				    appId      : '143045392563170', // Facebook App ID
				    channelUrl : '//http://my-board.aws.af.cm/channel.html', // Channel File
				    status     : true, // check login status
				    cookie     : true, // enable cookies to allow Parse to access the session
				    xfbml      : true  // parse XFBML
				  });
		  };
			
			
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
		
		fblogin: function(){
			Parse.FacebookUtils.logIn(null, {
			  success: function(user) {
			    if (!user.existed()) {
			      alert("User signed up and logged in through Facebook!");
			    } else {
			      alert("User logged in through Facebook!");
			    }
			  },
			  error: function(user, error) {
			    alert("User cancelled the Facebook login or did not fully authorize.");
			  }
			});
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
