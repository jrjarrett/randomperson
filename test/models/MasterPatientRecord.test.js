const expect = require('chai').expect

const MasterPatientRecord = require('../../models/MasterPatientRecord')
const casual = require('../../lib/casual-empi.js')

describe('Creating Master Patient Records', function () {
  it('should be able to assign an mpr with casual', function (done) {
    const mpr = new MasterPatientRecord()
    const mockPatient = casual.patient
    Object.assign(mpr, mockPatient)
    expect(mpr.mrn).is.not.null
    expect(mpr.mrn).to.equal(mockPatient.mrn)
    expect(mpr.last_name).to.equal(mockPatient.last_name)
    expect(mpr.first_name).to.equal(mockPatient.first_name)
    expect(mpr.middle_name).to.equal(mockPatient.middle_name)
    expect(mpr.birth_date).to.equal(mockPatient.birth_date)
    expect(mpr.gender).to.equal(mockPatient.gender)
    expect(mpr.race).to.equal(mockPatient.race)
    expect(mpr.ethnicity).to.equal(mockPatient.ethnicity)
    expect(mpr.address1).to.equal(mockPatient.address1)
    expect(mpr.address2).to.equal(mockPatient.address2)
    expect(mpr.city).to.equal(mockPatient.city)
    expect(mpr.state).to.equal(mockPatient.state)
    expect(mpr.zip).to.equal(mockPatient.zip)
    expect(mpr.phone).to.equal(mockPatient.phone)
    done()
  })
})


