/**
 * Main access module
 * exports the question object and bank.
 */


 var qobj = require("./src/question_obj.js");
 var qbank = require("./src/qbank.js");

 exports.Answers = qobj.Answers;

 exports.Question = qobj.Question;

 exports.QuesBank = qbank.QuesBank;
