var assert = require("assert");
require("../public/libs/angular-mocks/angular-mocks");

describe('filter', function(){
    beforeEach(angular.mock.module('todoApp'));
    //something is not quite right here, but I can't figure it out yet
    // (window, window.angular);   ReferenceError: window is not defined

    describe('reverse', function(){
        it('should reverse a string', inject(function(reverseFilter) {
            assert.equal(reverseFilter('ABCD'), 'DCBA');
        }))
    });
});

