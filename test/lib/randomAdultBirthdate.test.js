const birthdate = require('../../lib/randomAdultBirthdate');
const chai = require('chai');
chai.use(require('chai-datetime'));
const expect = chai.expect;

describe('Generating 18yo birthdays', function () {

  it('should be at least 18 years in the past', function () {
    const today = new Date();
    const eighteenYearsAgo = today.setFullYear(today.getFullYear()-18);

   expect(birthdate().toDate()).to.be.beforeDate(new Date(eighteenYearsAgo));
  });
});