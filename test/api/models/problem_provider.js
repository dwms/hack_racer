var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var ProblemProvider = require('../../../api/models/problem_provider');

describe('models', function() {

  describe('problem_provider', function() {

      it('should return a default string', function(done) {

	    var p = new ProblemProvider();
	    var problem1 = p.currentProblem();
	    var problem2 = p.currentProblem();

            problem1.should.eql(problem2);

            done();
       });
   });
});

