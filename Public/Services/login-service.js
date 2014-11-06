var app = angular.module("RememberThisMoment")

app.service("loginService", function($http, $cookieStore){
	this.login = function(user){
		//console.log(user)
		return $http({
					method: "POST",
					url: "/login",
					data: user
				}).then(function(currUser){
					$cookieStore.put('currentUser', currUser.data)
					//console.log($rootScope.currentUser)
					return currUser.data
				})
	}


	this.getMyData = function() {
      var deferred = $q.defer();

      $http({
      	method: 'GET', 
      	url:'/user'})
        .success(function(response) {
          console.log('success', response);
          deferred.resolve(response);
        })
        .error(function(err) {
          deferred.reject(err);
        })

      return deferred.promise;
    }


});