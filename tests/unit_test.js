/**
 * This file contains tools to help write unit test cases.
 * These are meant to be run in the node runtime, not inside a browser.
 */

 var UnitTestCase = (function(){
 	function UnitTestCase(name, fn, expected){
 		this.tname = name;
 		this.fn = fn;
 		this.expected = expected;
 		this.result = null;
 		this.passed = false;
 	}

 	UnitTestCase.prototype.testSingleArg = function(arg) {
 		this.result = this.fn(arg);
 	};

 	UnitTestCase.prototype.testMultiArg = function() {
 		this.result = this.fn.apply(null, arguments);
 	};

 	UnitTestCase.prototype.validate = function() {
 		if(this.result === this.expected) {
 			this.passed = true;
 		} else {
 			// result is kept as false.
 			return false;
 		}
 	};

 	UnitTestCase.prototype.repr = function() {
 		var repString = "Unit Test(" + this.tname + ") ";
 		return repString + "expected: " + this.expected.toString() +
 		                 " result: " + this.result.toString() +
 		                 (this.passed ? " PASSED" : " FAILED");
 	};

 	UnitTestCase.prototype.reset = function() {
 		this.result = null;
 		this.passed = false;
 	};


 	return UnitTestCase;
 })();

// export of unit test case.
 exports.UnitTestCase = UnitTestCase;
