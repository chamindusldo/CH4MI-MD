const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gAgnVLBY#Fxc8vkyXXI5uxz9y-fDSTvMM68hG85f-0QSr-IbQNc4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi CH4MI-MD Is Online Now 💻\n*💻 Owner* - CH4MI-BOY\n\n*💻 Owner Number* -94703973470",
SUDO_NB: process.env.SUDO_NB || "94723737086",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

