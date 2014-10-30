var app = angular.module('RememberThisMoment');

           //"name-of-directive"
app.directive('expandTextBox', function(){
	// var increase = function(5){
	// 	var x = "5em"
		
	// }
	return {
		link: function(scope, elem, event){
			x = 10
			y = 2.5
			elem.bind('focus keyup', function(){
				//console.log(input.value + "\n")
				//console.log(scope.newPost)

			if(scope.newPost.length > x){
				x += .25
				elem.css({"width": x + "em"}),
				elem.css({"height": "5em"})
			}
			// else {
			// 	elem.css({"height": "7.5em"})
			// }
			// })
			})
			elem.bind("blur", function(){
				elem.css({"height": "2.5em"}),
				elem.css({"width": "10em"})

		})
	}

}

})