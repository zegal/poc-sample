/* command line invocation of library */

const KEY = process.env.API_KEY;
const Zegal = require('@zegal/zegal-client');
const FILE = 'data/sa-payload.json'
const fs = require('fs');

async function test() {
    try {
        const zegal = new Zegal(KEY);
        await zegal.init();
        let payload = fs.readFileSync(FILE);
        payload = JSON.parse(payload);

        let doc = await zegal.createDocument(payload);
        console.log("doc created: ", JSON.stringify(doc, null, 2))
    } catch(err) {
        console.log("ERR", err);
    }
}

test()