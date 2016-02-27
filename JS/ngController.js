
/* myController */
myApp.controller('myController',function($scope){
				$scope.names="subbu";
				$scope.age="32";
				$scope.clicked = function(){
					alert('hi');
				}
			});
			

/* myController2 */
myApp.controller('myController2',function($scope){
			$scope.myBooks = [ 
					{'bookName':'Ramayan', 'author':'bheema','price':'250'},
					{'bookName':'Jungle Book', 'author':'Raju Dixit', 'price':'150'},
					{'bookName':'Secrets', 'author':'Ronold', 'price':'850'},
					{'bookName':'My Life', 'author':'katewinseletee', 'price':'850'},
					{'bookName':'Secrets', 'author':'Ronold', 'price':'850'}
				
				];
			});


/* myController3 */
myApp.controller('myController3',function($scope, $http){
	var dataJson = $http.get("data/guests.json");	
		dataJson.success(function(response) {
			$scope.getData = response;
		});
	$scope.likeFunc = function(jsonData) {
		jsonData.like++;
	}
	$scope.disLikeFunc = function(jsonData) {
		jsonData.dislike++;
	}
	});
				
			