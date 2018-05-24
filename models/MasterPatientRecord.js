const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  master patient record

const MasterPatientRecordSchema = new Schema(
  {
    mrn           : {type: Number, required: true},
		last_name     : {type: String, required: true, max: 100},
		first_name    : {type: String, required: true, max: 100},
		middle_name   : {type: String, required: false, max: 100},
		birth_date    : {type: Date},
		gender        : {type: String, required: true, max: 1},
		race          : [{type: Schema.ObjectId, ref: 'Race'}],
		ethnicity     : {type: String, required: true, max: 50},
		address1      : {type: String, required: true, max: 100},
		address2      : {type: String, required: false, max: 100},
		city          : {type: String, required: false, max: 100},
		state         : {type: String, required: false, max: 2},
		zip           : {type: String, required: false, max: 10},
		phone         : {type: String, required: false, max: 13}
  }
);

// Virtual for  full name
MasterPatientRecordSchema
.virtual('name')
.get(function () {
  return this.last_name + ', ' + this.first_name;
});

// Virtual for author's URL
MasterPatientRecordSchema
.virtual('url')
.get(function () {
  return '/mpr' + this._id;
});

//Export model
module.exports = mongoose.model('MasterPatientRecord', MasterPatientRecordSchema);