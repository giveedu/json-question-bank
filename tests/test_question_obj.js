var unit_test = require("./unit_test.js");
var qobj = require("../src/question_obj.js");

/**
 * Testing for question object
 */

 function test_answers(correct_input) {
 	var ans = new qobj.Answers('red', 'white', 'blue', 'green', 'c');
 	return ans.check(correct_input);
 }

var test_case = new unit_test.UnitTestCase("test_answers", test_answers, true);
test_case.testSingleArg('c');
test_case.validate();

console.log(test_case.repr());
