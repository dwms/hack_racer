'use strict';

exports.currentProblemGet = function() {

  var examples = {};
  
  examples['application/json'] = {
  "repeat_string" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.submitAnswerGet = function(answer) {

  var examples = {};
  
  examples['application/json'] = true;
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
