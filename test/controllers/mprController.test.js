const expect = require('chai').expect
const sinon = require('sinon')
const casual = require('../../lib/casual-empi')
const httpMocks = require('node-mocks-http')
require('sinon-mongoose')

const MasterPatientRecord = require('../../models/MasterPatientRecord')
const Race = require('../../models/Race')
const mprController = require('../../controllers/mprController')

describe('Testing Master Patient Controller', function () {
  it('should return the list of patients when GET is called', sinon.test(function() {

    const mpr = new MasterPatientRecord()
    const mockPatient = casual.patient
    Object.assign(mpr, mockPatient)
    const r = new Race({definition: mockPatient.race});
    mpr.race.push(r)

    this.mock(MasterPatientRecord).expects('find')
      .chain('populate').withArgs('race')
      .chain('exec')
      .yields(null ,mpr)

    const mockReq = httpMocks.createRequest({
      method: 'GET',
      url: '/mpr'
    })

    let mockRes = httpMocks.createResponse()

    let result = mprController.mpr_list(mockReq, mockRes, function () {})
    console.log(mockRes._getData())
  }))
})