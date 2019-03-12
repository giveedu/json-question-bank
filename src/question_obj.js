/**
 * Question And Answer Object
 * abstracts the idea of a question, where questions can be selected based on their attributes.
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
	if (!(typeof ans === 'string')) {
		console.log("ERROR expected string got:" + typeof ans);
		return false;
	}
	return ans === this.correct;
};

Answers.prototype.repr = function(showCorrect) {
	var repString = "(a): " + this.a + "\n" +
	                "(b): " + this.b + "\n" +
	                "(c): " + this.c + "\n" +
	                "(d): " + this.d + "\n";
	if(showCorrect) {
		repString += "(correct answer): " + this.correct + "\n";
	}
	return repString;
};

exports.Answers = Answers;


var Question = (function(){
 	function Question(qs, a, b, c, d, correct){
 		this.question = qs;
 		this.answers = new Answers(a, b, c, d, correct);
 	}

 	Question.prototype.check = function(attempt) {
 		return this.answers.check(attempt);
 	};

 	return Question;
})();

exports.Question = Question;
