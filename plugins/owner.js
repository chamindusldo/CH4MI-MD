const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴄʜᴀᴍɪɴᴅᴜ ʟᴀᴋꜱʜᴀɴ (ᴄʜ4ᴍɪ ʙᴏʏ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94703973470
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://youtube.com/@chami-boy-ofc
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029Vazgd9F6WaKffmdKQH2A

*©Cʜ4ᴍɪ-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜ4ᴍɪ ʙᴏʏッ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
