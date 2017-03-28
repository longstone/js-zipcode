const assert = require('assert');
const ZipLookup = require('./../index');
const LookupService = new ZipLookup();

describe('some smoketest', () => {
    it('should lookup Zurich', () => {
        const result = LookupService.lookup(8000)[0];
        assert.equal(result.zip, 8000);
    });
    it('should find multible results for 8580', () => {
        const result = LookupService.lookup(8580);
        assert.equal(result.length, 4);
    });

});

describe('lookup enclaves', () => {
    it('should lookup germany/buesingen', () => {
        const result = LookupService.lookup(8238)[0];
        assert.equal(result.zip, 8238);
        assert.equal(result.loc, 'Büsingen');
        assert.equal(result.canton, 'DE');
        assert.equal(result.cc, 'DE');
        assert.equal(result.localeCanton.de, 'Büsingen');
        assert.equal(result.localeCountry.de, 'Deutschland');
    });
    it('should lookup italia/campione', () => {
        const result = LookupService.lookup(6911)[0];
        assert.equal(result.zip, 6911);
        assert.equal(result.loc, 'Campione d\'Italia');
        assert.equal(result.canton, 'IT');
        assert.equal(result.cc, 'IT');
        assert.equal(result.localeCanton.fr, 'Italie');
        assert.equal(result.localeCountry.fr, 'Italie');
    });
    it('should lookup balzers/fürstentum', () => {
        const result = LookupService.lookup(9496)[0];
        assert.equal(result.zip, 9496);
        assert.equal(result.loc, 'Balzers');
        assert.equal(result.canton, 'FL');
        assert.equal(result.cc, 'LI');
        assert.equal(result.localeCanton.it, 'Principato del Liechtenstein');
        assert.equal(result.localeCountry.it, 'Principato del Liechtenstein');
    });
});