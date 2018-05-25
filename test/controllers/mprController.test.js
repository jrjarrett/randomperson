const expect = require('chai').expect

const MasterPatientRecord = require('../../models/MasterPatientRecord')
const Race = require('../../models/Race')
const mprController = require('../../controllers/mprController')

describe('Testing Master Patient Controller', function () {
  it('should return the list of patients when GET is called', function() {
    this.stub(MasterPatientRecord, 'find')

  })
})