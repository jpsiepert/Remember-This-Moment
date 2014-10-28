var app = angular.module('RememberThisMoment');

           //"name-of-directive"
app.directive('nameOfDirective', function(){

	return {
		link: function(scope, elem, event){
	
			elem.bind('focus', function(){

				elem.css({"height": "5em"})
			})
		}
	}

})