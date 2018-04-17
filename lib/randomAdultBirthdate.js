const casual = require ('casual');

const today = new Date();
const eighteenYearsAgo = today.setFullYear(today.getFullYear()-18);

const randomAdultBirthdate = () => { 
	const moment = casual.moment; 
    if (moment.isBefore(eighteenYearsAgo)) {
    	return moment;
    }
    return randomAdultBirthdate();
}

module.exports = randomAdultBirthdate;