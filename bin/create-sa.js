/* command line invocation of library */

const KEY = ''
const Zegal = require('@zegal/zegal-client');
const FILE = 'data/sa-payload.json'
const fs = require('fs');

async function test() {
    try {
        const zegal = new Zegal('pk_4d457898-15b5-430a-aff9-18e8e460e454');
        console.log("initializing");
        await zegal.init();
        let payload = fs.readFileSync(FILE);
        payload = JSON.parse(payload);
        console.log("create document");

        let doc = await zegal.createDocument(payload);
        console.log("doc created: ", JSON.stringify(doc, null, 2))
    } catch(err) {
        console.log("ERR", JSON.stringify(err));
    }
}

test()