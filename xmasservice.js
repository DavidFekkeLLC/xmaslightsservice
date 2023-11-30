const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

let toggle = true;

async function setLightStatus(bulb, state) {
    const endpoint = `http://${ip_address}/api/${user}/lights/${bulb}/state`;
    const options = {
        method: "PUT",
        body: JSON.stringify(state)
    };
    await fetch(endpoint, options);
}

async function setLightStatus2() {
    let state = {
        "on":true,
        "sat":254,
        "bri":254,
        "hue": toggle ? 25600 : 0
    };
    await setLightStatus(2, state);
}

async function setLightStatus3() {
    let state = {
        "on":true,
        "sat":254,
        "bri":254,
        "hue": toggle ? 0 : 25600
    };
    await setLightStatus(3, state);
}

async function masterSwitch() {
    await setLightStatus2();
    await setLightStatus3();
    toggle = !toggle;
}

let timer = setInterval(await masterSwitch, 15000);
