const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
┏━━━━━━━━━━━━━━━━━━━━┓
   🎀 *${settings.botName || 'Makima Bot'}*  🎀
   ────────────────
   📦 Version: *${settings.version || '3.0.0'}*
   👑 Owner: *${settings.botOwner || 'MinatoXMclaren'}*
   📺 YouTube: *${global.ytch || 'HACKER'S HIDEOUT'}*
┗━━━━━━━━━━━━━━━━━━━━┛

*🌟 GENERAL COMMANDS*
┌─────────────────────
│ 🆘   .help / .menu
│ 📊   .ping
│ 💚   .alive
│ 🎤   .tts <text>
│ 👑   .owner
│ 😂   .joke
│ 💫   .quote
│ 📚   .fact
│ 🌤️   .weather <city>
│ 📰   .news
│ ✨   .attp <text>
│ 🎵   .lyrics <song_title>
│ 🎱   .8ball <question>
│ 👥   .groupinfo
│ 👮   .staff / .admins
│ 👁️   .vv
│ 🔤   .trt <text> <lang>
│ 🌐   .ss <link>
│ 🆔   .jid
│ 🔗   .url
└─────────────────────

*🛡️ ADMIN COMMANDS*
┌─────────────────────
│ 🚫   .ban @user
│ ⬆️   .promote @user
│ ⬇️   .demote @user
│ 🔇   .mute <minutes>
│ 🔊   .unmute
│ 🗑️   .delete / .del
│ 👢   .kick @user
│ ⚠️   .warnings @user
│ 🚨   .warn @user
│ 🔗   .antilink
│ 🤬   .antibadword
│ 🧹   .clear
│ 🏷️   .tag <message>
│ 📢   .tagall
│ 👥   .tagnotadmin
│ 🎭   .hidetag <message>
│ 🤖   .chatbot
│ 🔄   .resetlink
│ 🏷️   .antitag <on/off>
│ 🎉   .welcome <on/off>
│ 👋   .goodbye <on/off>
│ 📝   .setgdesc <description>
│ ✏️   .setgname <new name>
│ 🖼️   .setgpp (reply to image)
└─────────────────────

*⚙️ OWNER COMMANDS*
┌─────────────────────
│ 🔒   .mode <public/private>
│ 🗂️   .clearsession
│ 🚫   .antidelete
│ 🧹   .cleartmp
│ 🔄   .update
│ ⚙️   .settings
│ 🖼️   .setpp <reply to image>
│ ❤️   .autoreact <on/off>
│ 📱   .autostatus <on/off>
│ 🔄   .autostatus react <on/off>
│ ⌨️   .autotyping <on/off>
│ 👀   .autoread <on/off>
│ 📞   .anticall <on/off>
│ 🚷   .pmblocker <on/off/status>
│ 💬   .pmblocker setmsg <text>
│ 💌   .setmention <reply to msg>
│ 🔔   .mention <on/off>
└─────────────────────

*🎨 MEDIA COMMANDS*
┌─────────────────────
│ 🔍   .blur <image>
│ 🖼️   .simage <reply to sticker>
│ 🎨   .sticker <reply to image>
│ 🎭   .removebg
│ ✨   .remini
│ ✂️   .crop <reply to image>
│ 📺   .tgsticker <Link>
│ 😄   .meme
│ 🎒   .take <packname>
│ 🔣   .emojimix <emj1>+<emj2>
│ 📸   .igs <insta link>
│ 🎬   .igsc <insta link>
└─────────────────────

*👩 PIES COMMANDS*
┌─────────────────────
│ 🌍   .pies <country>
│ 🇨🇳   .china
│ 🇮🇩   .indonesia
│ 🇯🇵   .japan
| 🇰🇷   .korea
│ 🧕   .hijab
└─────────────────────

*🎮 GAME COMMANDS*
┌─────────────────────
│ ❌⭕   .tictactoe @user
│ 🪢   .hangman
│ 🔤   .guess <letter>
| ❓   .trivia
| ✅   .answer <answer>
| 💬   .truth
| 😈   .dare
└─────────────────────

*🤖 AI COMMANDS*
┌─────────────────────
│ 🧠   .gpt <question>
| 🤖   .gemini <question>
| 🎨   .imagine <prompt>
| 🌟   .flux <prompt>
| 🎥   .sora <prompt>
└─────────────────────

*🎉 FUN COMMANDS*
┌─────────────────────
| 💝   .compliment @user
| 😈   .insult @user
| 💘   .flirt
| 📜   .shayari
| 🌙   .goodnight
| 🌹   .roseday
| 🎭   .character @user
| 💀   .wasted @user
| 💑   .ship @user
| 😍   .simp @user
| 🤪   .stupid @user [text]
└─────────────────────

*🔤 TEXTMAKER*
┌─────────────────────
| ⚙️   .metallic <text>
| ❄️   .ice <text>
| 🌨️   .snow <text>
| 💎   .impressive <text>
| 📟   .matrix <text>
| 💡   .light <text>
| 🌈   .neon <text>
| 😈   .devil <text>
| 💜   .purple <text>
| ⚡   .thunder <text>
| 🍃   .leaves <text>
| 🎖️   .1917 <text>
| 🏟️   .arena <text>
| 🖥️   .hacker <text>
| 🏖️   .sand <text>
| 🖤💖   .blackpink <text>
| 🌐   .glitch <text>
| 🔥   .fire <text>
└─────────────────────

*📥 DOWNLOADER*
┌─────────────────────
| 🎵   .play <song_name>
| 🎶   .song <song_name>
| 🎧   .spotify <query>
| 📸   .instagram <link>
| 📘   .facebook <link>
| 🎵   .tiktok <link>
| 🎬   .video <song name>
| 📹   .ytmp4 <Link>
└─────────────────────

*🎭 MISC COMMANDS*
┌─────────────────────
| 💖   .heart
| 😏   .horny
| 🔵   .circle
| 🌈   .lgbt
| 👮   .lolice
| 🤦   .its-so-stupid
| 🪪   .namecard
| 🐢   .oogway
| 🐦   .tweet
| 💬   .ytcomment
| ☭   .comrade
| 🌈   .gay
| 🔍   .glass
| 🚔   .jail
| ✅   .passed
| 🔫   .triggered
└─────────────────────

*🎌 ANIME COMMANDS*
┌─────────────────────
| 🐱   .neko
| 👰   .waifu
| 👧   .loli
| 🍜   .nom
| 👉   .poke
| 😢   .cry
| 💋   .kiss
| 🫳   .pat
| 🤗   .hug
| 😉   .wink
| 🤦   .facepalm
└─────────────────────

*💻 GITHUB COMMANDS*
┌─────────────────────
| 📂   .git
| 🔗   .github
| 📜   .sc
| 🛠️   .script
| 🗃️   .repo
└─────────────────────

*📢 JOIN OUR CHANNEL*
${global.channelLink || 'https://whatsapp.com/channel/0029VbB4g3eAe5VslZgJdq38'}

*💡 TIP: Use .<command> without <> to execute*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Makima',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Makima by MinatoXMclaren',
                        serverMessageId: -1
                    } 
                }
            }, { quoted: message });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { 
            text: helpMessage,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Makima',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    }
}

module.exports = helpCommand;
