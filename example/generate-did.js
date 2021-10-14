const didKeyDriver_ = require('../lib/index');

const svc =   [  {
  "id": "#linkedin",
  "type": "linkedin",
  "serviceEndpoint": "https://www.linkedin.com/company/moncon/"
},
{
  "id": "#telegram",
  "type": "telegram",
  "serviceEndpoint": "https://t.me/monconcommunity"
},
{
  "id": "#gihhub",
  "type": "github",
  "serviceEndpoint": "https://github.com/LedgerProject/moncon"
}]

async function test() {
    didKeyDriver = didKeyDriver_.driver({method:'moncon',service:svc})
    const didDocument = await didKeyDriver.generate(); // Ed25519 key type by default            
    console.log(didDocument); // see DID Document above        
}


test().then(()=>console.log("ready")).catch((e)=>console.log(e,"error"))

