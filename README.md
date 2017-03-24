# js-zipcode
Postleitzahlsuche für die Schweiz / zipcode lookup for swiss area (offline)

## How to
```
const ZipLookup = require('./../index');
const LookupService = new ZipLookup();
// the return value is always  an array
const result = LookupService.lookup(8000)[0]; 
assert.equal(result.zip, 8000);
```