//Niccolas Ricci, Hongya Zhou.




//Helpful resources:
//    Selector and input: https://docs.angularjs.org/guide/concepts
//    table and style: http://jsfiddle.net/SubtleGradient/gjajp/
//    todo app: https://angularjs.org/
//    remove and controller: https://docs.angularjs.org/api/ng/directive/select




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

//this is each class item with a name, credit amount, and a value of each grade letter
    $scope.classes = {
        class: [{
            name:'name',
            credit: 1,
            grade:{
                sign:'',
                value:''}
        }]
    };

     //this function will push a new class to the class list
    $scope.addClass = function() {
        $scope.classes.class.push({
            name:'name',
            credit: 1,
            grade: {
                sign:'',
                value:''}
        });
    };

    //This function allows you to remove only if the number of classes is > 1
    $scope.removeClass = function(index) {
        if($scope.classes.class.length > 1) {
            $scope.classes.class.splice(index, 1);
        } else {window.alert("You can't drop the only class")
          }

    };

    //This function will calculate the GPA, including credits per class
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



    $scope.printDiv = function (divName) {

        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var popupWin = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWin.window.focus();
            popupWin.document.write('<!DOCTYPE html><html><head>' +
                '<link rel="stylesheet" type="text/css" href="style.css" />' +
                '</head><body onload="window.print()"><div class="reward-body">' + printContents + '</div></html>');
            popupWin.onbeforeunload = function (event) {
                popupWin.close();
                return '.\n';
            };
            popupWin.onabort = function (event) {
                popupWin.document.close();
                popupWin.close();
            }
        } else {
            var popupWin = window.open('', '_blank', 'width=800,height=600');
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
        popupWin.document.close();

        return true;
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