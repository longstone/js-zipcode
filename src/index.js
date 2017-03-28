const countryCode = require('database-meta').countryCode;
const cantonCode = require('database-meta').cantonCode;
const zipDatabase = require('database-zip').db;
const localeKeywords = { canton :'localeCanton', country : 'localeCountry'};
class ZipCodeLookpup {

    constructor() {
    }

    lookup(zip) {
        return zipDatabase
            .filter(location => location.zip === zip)
            .map(location => Object.assign({}, location))
            .map(location => {
                location[localeKeywords.canton] = cantonCode[location.canton];
                if (!location.hasOwnProperty('cc')) {
                    location.cc = 'CH';
                }
                location[localeKeywords.country] = countryCode[location.cc];
                return location;
            });
    }

}

module.exports = ZipCodeLookpup;