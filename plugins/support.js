const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "⛓",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*🧚CH4MI-MD Support Channels🧚*

*Youtube Channel Link:* https://youtube.com/@chami-boy-ofc

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vazgd9F6WaKffmdKQH2A

*©Cʜ4ᴍɪ-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜ4ᴍɪ ʙᴏʏッ*`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
