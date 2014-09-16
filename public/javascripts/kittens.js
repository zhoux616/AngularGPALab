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
    $scope.grades = [
        {grade:'A', value:4.000},
        {grade:'A-', value:3.667},
        {grade:'B+', value:3.333},
        {grade:'B', value:3.000},
        {grade:'B-', value:2.667},
        {grade:'C+', value:2.333},
        {grade:'C', value:2.000},
        {grade:'C-', value:1.667},
        {grade:'D+', value:1.333},
        {grade:'D', value:1.000},
        {grade:'F', value:0.000}
    ];

    $scope.classes = {
        class: [{
            name:'name',
            credit: 1,
            grade:{
                sign:'',
                value:''}
        }]
    };

    $scope.addClass = function() {
        $scope.classes.class.push({
            name:'name',
            credit: 1,
            grade: {
                sign:'',
                value:''}
        });
    };

    $scope.total = function() {
        var total = 0;
        var cred = 0;
        angular.forEach($scope.classes.class, function(item) {
            total += item.credit * item.grade.value;
            cred += item.credit;
        });
        $scope.returnCred = cred;
        $scope.gpa = ((total)/cred).toFixed(3);
    };

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