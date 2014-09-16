angular.module('kittensApp', ['ui.bootstrap'])

.controller('CarouselDemoCtrl', ['$scope', function($scope) {

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 500 + slides.length;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }

}])


 .controller('GradeController', ['$scope', function($scope) {
    $scope.items = ['A',
                    'B',
                    'C',
                    'D',
                    'F'];

    $scope.grade = 0;

    function gradeIncrease() {
        var n = this.grade;
        if(n < 4) {
            n++
        } else {

        }

    }

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}]);