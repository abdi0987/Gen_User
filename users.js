angular.module('GenUser',[])

.directive('genUser',['$http','$log',function($http,$log) {
    return {
        restrict: 'A',
        scope: {
            genUser: '@'
        },
        template: '{{text}}',
        link: function (scope ,elem) {
          $http.get('userData.json').success(function (mdata) {
            scope.data = mdata;
            var value = scope.genUser;
            var indexOfUser = Math.floor((Math.random() * scope.data.length) + 0);
            console.log(scope.data[indexOfUser]);
            if(value === 'name'){
              scope.text = scope.data[indexOfUser].first_name + " " + scope.data[indexOfUser].last_name;
            } else {
              scope.text = scope.data[indexOfUser][value];
            }
          });
        }
    };
}]);

function UserGen(){
    this.users = [];
}
