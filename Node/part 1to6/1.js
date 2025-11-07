const fs = require('fs');
const os = require('os');

osDetails = {
    'homedir': os.homedir(),
    'hostName': os.hostname(),
    'platform': os.platform()
}

console.log(osDetails);
fs.writeFileSync('data.txt', JSON.stringify(osDetails));