/**
 * Question bank abstraction object
 * This allows searching of questions under a pre-existing schema.
 */


var QuesBank = (function(){
 	function QuesBank(source){
 		this.source = source;
 	}

 	// This function is meant to be called with an arbitrary number of arguments.
 	QuesBank.prototype.validateSchema = function() {
 		for(var key in this.source) {
 			for(var akey in arguments) {
 				if(!(arguments[akey] in this.source[key]) )
 					return false;
 			}
 		}
 		return true;
 	};

 	// If the question has some key attribute under the correct value, it's returned in the result list.
 	QuesBank.prototype.getByAttr = function(key, value) {
 		var results = [];
 		for(var ikey in this.source) {
 			if(key in this.source[ikey] && this.source[ikey][key] === value) {
 				results.push(this.source[ikey]);
 			}
 		}
 		return results;
 	};

 	QuesBank.prototype.getByTags = function(/*Arbitrary Arguments*/) {
 		var results = [];
 		for(var key in this.source) {
 			for(var i = 0; i < arguments.length ; i++) {
 				if(arguments[i] in this.source[key].tags) {
 					results.push(this.source[key]);
 				}
 			}
 		}
 		return results;
 	};

 	return QuesBank;
})();

/* QuesBank object */
exports.QuesBank = QuesBank;
