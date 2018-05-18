var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EthnicitySchema = new Schema({
	definition : { type: String, required:true, minlength :3, maxlength: 100 },
});

// Virtual for ethnicity's URL
EthnicitySchema
.virtual('url')
.get(function () {
  return '/ethnicity/' + this._id;
});

module.exports = mongoose.model('Ethnicity', EthnicitySchema);