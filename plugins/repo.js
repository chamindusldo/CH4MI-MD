const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦ https://github.com/ch4miBOY/CH4MI-MD

*📍PLEASE SUBSCRIBE MY YOUTUBE CHANNEL ❤️‍🔥👇*

🧚‍♀️◦ https://youtube.com/@chami-boy-ofc

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🧚‍♀️◦ https://whatsapp.com/channel/0029Vazgd9F6WaKffmdKQH2A

*©Cʜ4ᴍɪ-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜ4ᴍɪ ʙᴏʏッ*

`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
