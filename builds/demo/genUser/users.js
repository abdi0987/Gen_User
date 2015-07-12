angular.module('GenUser',[])

.directive('genUser',['$http','$log',function($http,$log) {
    return {
        restrict: 'A',
        scope: {
            genUser: '@'
        },
        transclude:true,
        template: '{{text}}'+'<ng-transclude></ng-transclude>',
        link: function (scope ,elem) {
          $http.get('genUser/userData.json').success(function (mdata) {
            scope.data = mdata;
            var value = scope.genUser;
            var indexOfUser = Math.floor((Math.random() * scope.data.length) + 0);
            if(value === 'name'){
              scope.text = scope.data[indexOfUser].first_name + " " + scope.data[indexOfUser].last_name;
            } else if(value) {
              scope.text = scope.data[indexOfUser][value];
            }
            else{
              $log.error("Data to retrieve not defined");
            }
          });
        }
    };
}]);
