const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gAgnVLBY#Fxc8vkyXXI5uxz9y-fDSTvMM68hG85f-0QSr-IbQNc4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg",
ALIVE_MSG: process.env.ALIVE_IMG ||  "*🤖𝐇𝐞𝐲 𝐈'𝐦 CH4MI MD 🤍 𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰 🤹‍♂️*\n\n*Type .menu To Get Bot User* > .Menu💫*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : *©Cʜ4ᴍɪ-ᴍᴅッ*",
SUDO_NB: process.env.SUDO_NB || "94723737086",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

