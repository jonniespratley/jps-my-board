/**
 * Commands
 * 
 * curl -v -X POST \
  -H "Authorization: Bearer 2j_rLGRjssaJtB4tX-fo0Q6UuocRXD6FyacLMtNwVaI" \
  -H "content-type:application/vnd.7ca45a8b.mydata+json" \
  -H "x-kii-appid:7ca45a8b" \
  -H "x-kii-appkey:c52889a0f202544ee11019b148f036e4" \
  "https://api.kii.com/api/apps/7ca45a8b/users/me/buckets/scores/objects" \
  -d '{"score":"1800", "name":"game1"}'
 */
'use strict';
angular.module('myBoardApp').factory('KiiService', [], function() {
	var _KiiService = {
		currentUser: KiiUser.getCurrentUser(),
		init : function() {

		},
		signup : function(user, successCb, errorCb) {
			var username = "user_123456";
			var emailAddress = "user_123456@example.com";
			var password = "123ABC";

			// Create the KiiUser object
			var user = KiiUser.userWithEmailAddressAndUsername(emailAddress, username, password);

			// Register the user, defining callbacks for when the process completes
			user.register({
				// Called on successful registration
				success : function(theUser) {
					// Print some info to the log
					console.log("User registered!");
					console.log(theUser);
				},
				// Called on a failed registration
				failure : function(theUser, errorString) {
					// Print some info to the log
					console.log("Error registering: " + errorString);
				}
			});
		},
		
		signin : function(user, successCb, errorCb) {
			var username = "user123456789";
			var password = "123ABC";

			// Authenticate the user
			KiiUser.authenticate(username, password, {
				// Called on successful registration
				success : function(theUser) {
					// Print some info to the log
					console.log("User authenticated!");
					console.log(theUser);
				},
				// Called on a failed authentication
				failure : function(theUser, errorString) {
					// Print some info to the log
					console.log("Error authenticating: " + errorString);
				}
			})
		}
	};

	return _KiiService;
});
