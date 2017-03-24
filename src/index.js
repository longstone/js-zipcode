const countryCode = require('database-meta').countryCode;
const cantonCode = require('database-meta').cantonCode;
const zipdatabase = require('database-zip').db;

class ZipCodeLookpup {

    constructor() {
    }

    lookup(zip) {
        //  { "zip":9604, "loc": "Unterrindal", "canton":"SG"}

        return zipdatabase
            .filter(location => location.zip === zip)
            .map(location => Object.assign({}, location))
            .map(location => {
                location['cantonLocale'] = cantonCode[location.canton];
                if (!location.hasOwnProperty('cc')) {
                    location.cc = 'CH';
                }
                location['country-locale'] = countryCode[location.cc];
                return location;
            });
    }

}

module.exports = ZipCodeLookpup;