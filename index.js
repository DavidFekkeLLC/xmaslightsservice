
const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

const endpoint = `http://${ip_address}/api/${user}/lights`;

//const state = { 'on': false };

async function listAllBulbs() {
    const res = await fetch(endpoint);
    const json = await res.json();
    console.log(json);
}

listAllBulbs();