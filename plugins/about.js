const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "🧟‍♂️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` 👋 Hello ${pushname}
                    
 𝐈 𝐀𝐌 𝐂𝐇4𝐌𝐈-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘  (𝐂𝐇4𝐌𝐈 𝐁𝐎𝐘)..
           
*ɢɪᴛʜᴜʙ :* https://github.com/ch4miBOY/CH4MI-MD   
             
*ʏᴏᴜᴛᴜʙᴇ :* https://youtube.com/@chami-boy-ofc
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029Vazgd9F6WaKffmdKQH2A

*©Cʜ4ᴍɪ-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜ4ᴍɪ ʙᴏʏッ*`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(${e})

}

})
