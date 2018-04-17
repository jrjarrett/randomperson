const casual = require('casual');
const randomAdultBirthdate = require('./randomAdultBirthdate');


const race = ["American Indian or Alaska Native", "Asian", "Black or African American", "Native Hawaiian or Other Pacific Islander", "Unknown", "White"];
const ethnicity = ["Hispanic or Latino", "Non-Hispanic", "Unknown"]


casual.define('patient', function () {
	return {
		last_name     : casual.last_name,
		first_name    : casual.first_name,
		middle_name   : casual.first_name,
		birth_date    : randomAdultBirthdate().toDate(),
		gender        : casual.prefix === 'Mr.' ? 'M' : 'F',
		race          : casual.random_element(race),
		ethnicity     : casual.random_element(ethnicity),
		address1      : casual.address1,
		address2      : casual.address2,
		city          : casual.city,
		state         : casual.state_abbr,
		zip           : casual.zip(),
		phone         : casual.numerify('(###)###-####')

	}
});
module.exports = casual;
