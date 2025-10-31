const config = require('./config');

module.exports = {
    name: 'owner',
    description: 'Show bot owner information',
    category: 'info',
    
    async execute(sock, message, args, metadata, bot) {
        const ownerInfo = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃             👑  OWNER INFO  👑           ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 📛  Name: Minato McLaren                ┃
┃ 📞  WhatsApp: +8801719741293            ┃
┃ 🤖  Bot: Makima v1.0.0                  ┃
┃ ⏰  Support: Available 24/7             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃          🌟  BOT FEATURES  🌟           ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅  150+ Commands                        ┃
┃ ✅  Multi-Device Support                ┃
┃ ✅  24/7 Online                         ┃
┃ ✅  Free & Open Source                  ┃
┃ ✅  Regular Updates                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

📱 *Contact Owner For:*
• 🐛 Bot Issues & Bugs
• 💡 Feature Requests  
• 🛠️ Custom Bot Development
• 💝 Donations & Support
• 🤝 Collaboration Opportunities

📢 *Join Our Channel:*
${global.channelLink || 'https://whatsapp.com/channel/0029VbB4g3eAe5VslZgJdq38'}

💡 *Note:* Please be respectful and patient when contacting the owner.
        `.trim();

        try {
            // Try to send with channel info for better forwarding
            await sock.sendMessage(metadata.jid, { 
                text: ownerInfo,
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
        } catch (error) {
            // Fallback if contextInfo fails
            await sock.sendMessage(metadata.jid, { 
                text: ownerInfo 
            }, { quoted: message });
        }
    }
};
