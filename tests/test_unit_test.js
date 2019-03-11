// Main testing file for unit tests
var unit_test = require("./unit_test.js");

function test_units(num) {
	return num + 5;
}

var test_case = new unit_test.UnitTestCase("test_units", test_units, 6);
test_case.testSingleArg(1);
test_case.validate();
console.log(test_case.repr())
