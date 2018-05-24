var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RaceSchema = new Schema({
	definition : { type: String, required:true, minlength :3, maxlength: 100 },
});

// Virtual for Race's URL
RaceSchema
.virtual('url')
.get(function () {
  return '/race/' + this._id;
});

module.exports = mongoose.model('Race', RaceSchema);