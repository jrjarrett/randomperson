const MasterPatientRecord = require('../models/MasterPatientRecord')

// Display list of all Authors.
exports.mpr_list = function (req, res) {
  MasterPatientRecord.find()
    .populate('race')
    .exec(function (err, list_mprs) {
      if (err) { return next(err) }
      // Successful, so render
      res.send(list_mprs)
    })
}
