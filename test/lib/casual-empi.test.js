const casual = require('../../lib/casual-empi');
const expect = require('chai').expect;

describe('casual.patient generation', function () {
  it('should generate a patient', function () {
    const patient = casual.patient;
    expect(patient.mrn).is.greaterThan(1000000);
    expect(patient.mrn).is.lessThan(9999999);
    expect(patient).to.have.property('prefix');
    expect(patient).to.have.property('last_name');
    expect(patient).to.have.property('first_name');
    expect(patient).to.have.property('middle_name');
    expect(patient).to.have.property('birth_date');
    expect(patient).to.have.property('gender');
    expect(patient).to.have.property('race');
    expect(patient).to.have.property('ethnicity');
    expect(patient).to.have.property('address1');
    expect(patient).to.have.property('city');
    expect(patient).to.have.property('state');
    expect(patient).to.have.property('phone');
  });
});