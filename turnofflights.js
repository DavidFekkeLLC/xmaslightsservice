const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

async function setLightStatus(bulb, state) {
    const endpoint = `http://${ip_address}/api/${user}/lights/${bulb}/state`;
    const options = {
        method: "PUT",
        body: JSON.stringify(state)
    };
    await fetch(endpoint, options);
}

async function setLightStatusOff() {
    let state = {
        "on":false,
    };
    await setLightStatus(2, state);
    await setLightStatus(3, state);
}

await setLightStatusOff();
