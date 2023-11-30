
const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

const endpoint = `http://${ip_address}/api/${user}/lights/`;

//const state = { 'on': false };

async function getLightbulbState(bulbnumber) {
    const res = await fetch(`${endpoint}${bulbnumber}`);
    return await res.json();
}

const stateTwo = await getLightbulbState(2);
const stateThree = await getLightbulbState(3);
console.log(stateTwo);
console.log(stateThree);