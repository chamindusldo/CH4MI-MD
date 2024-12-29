const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: ''
                    }
let des = `*👋 Hello ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now🤹‍♂️  │─◎◎▷*
*╘╰────────────╯╜*
*│A CH4MI-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.✨*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*
 *➣ ʏᴏᴜᴛᴜʙᴇ⚡*= https://youtube.com/@chami-boy-ofc

*➣ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ⚡* = https://whatsapp.com/channel/0029Vazgd9F6WaKffmdKQH2A

*©Cʜ4ᴍɪ-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜ4ᴍɪ ʙᴏʏッ*`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//===========menu========
cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!


*╭───────────◉◉►*
*│Hey, I'm CH4MI-MD, Created By*
*│ch4mi boy ✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.movie*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
*│►.apk*
*│►.img*
*│►.rvideo*
│ ─────────
│🔍𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🔎
*│─────────*
*│►.yts*
*│►.news*
*│►.githubstalk*
*│►.srepo*
*│►.weather*
│─────────
│👾𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦👾
*│─────────*
*│►.ai*
│─────────
│🌀𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🌀
*│─────────*
*│►.convert*
*│►.trt*
│─────────
│📍𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦📍
*│─────────*
*│►.restart*
│ ─────────
│💫𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*│►.about*
*│►.support*
│ ─────────
│⛓𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⛓
*│─────────*
*│►.ch4mi*
*│►.hack*
*│►.define*
*│►.gpass*
│─────────
│🌝𝗙𝗨𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦👀
*│─────────*
*│►.animegirl*
*│►.dog*
*│►.fact*
*│►.joke*
*│►.quote*
│─────────
│⛥𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⛥
*│─────────*
*│►.promote*
*│►.demote*
*│►.remove*
*│►.setpic*
*│►.del*
*│►.add*
*│►.setwelcome*
*│►.setgoodbye*
*╰───────────◎◎►*

> *©Cʜ4ᴍɪ-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʜ4ᴍɪ ʙᴏʏッ*`

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
