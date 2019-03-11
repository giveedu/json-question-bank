/**
 * Question Bank and Object
 * abstracts the idea of a question bank, where questions can be selected based on their attributes.
 */

/**
 * Simple answers object that checks for correct answer.
 */
 var Answers = function(a, b, c, d, correct) {
 	this.a = a;
 	this.b = b;
 	this.c = c;
 	this.d = d;
 	this.correct = correct;
 };

Answers.prototype.check = function(ans) {
	return ans === this.correct;
};

Answers.prototype.repr = function(showCorrect) {
	var repString = "";
	return repString;
};

 exports.Answers = Answers;


 var Question = (function(){
 	function Question(){

 	}

 	return Question;
 })();

 exports.Question = Question;
