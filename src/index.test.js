const assert = require('assert');
const ZipLookup = require('./../index');
const LookupService = new ZipLookup();

describe('calculate the checksum', () => {
    it('should lookup Zurich', () => {
        const result = LookupService.lookup(8000)[0];
        assert.equal(result.zip, 8000);
    });
    it('should find multible results for 8580', () => {
        const result = LookupService.lookup(8580);
        assert.equal(result.length, 4);
    });

});