 //═══════════════════════════════════════════════════════//

// ✯ 𝐌𝐈𝐊𝐇𝐀𝐈𝐄𝐋 𝐎𝐅𝐅𝐈𝐂𝐀𝐋 ✯

//════════════════════════════//
process.on('uncaughtException', console.error) //Error log
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zJimbruOffical = require("@adiwajshing/baileys")
const fs = require('fs')
const os = require('os')
const ms = require('ms')
const util = require('util')
const _ = require('lodash')
const path = require('path')
const chalk = require('chalk')
const axios = require('axios')
let fetch = require('node-fetch')
const mathjs = require('mathjs')
const cheerio = require("cheerio")
const primbon = new Primbon()
const maker = require('mumaker')
const { JSDOM } = require('jsdom')
const xeonkey = require('xfarr-api')
const textpro = require('./lib/textpro')
const speed = require('performance-now')
const { wikiSearch } = require('./lib/wiki.js');
const moment = require('moment-timezone')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const { mediafireDl } = require('./lib/mediafire.js')
const imgbbUploader = require('imgbb-uploader')
const toHur = require('@develoka/angka-terbilang-js')
// API
const haha = require('xfarr-api') //
const hx = require("hxz-api") //
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const hxz = require('./lib/hxz-api') //
const bdr = require('rumus-bdr') //
const yogipw = require("tod-api") //
// MIKHAIEL
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const ID3Writer = require('browser-id3-writer')
// const { TiktokDownloader } = require('./lib/tiktokdl') 
const { exec, spawn, execSync } = require("child_process")
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const { aiovideodl, savefrom, instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme, Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
let acrcloud = require('acrcloud')
let acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: '07242f1833b82439bdb5c504193aff0c',
    access_secret: 'yDgkLpj1IPCBUQSbVaCi7erX85O1pswbxd9JjtDS'
})
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { yta,  ytv,  searchResult } = require('./lib/ytdl')
 //database 
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))

//read database using mongodb and lowdb by xeon
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
// time (india)
const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
// date
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDay = myHari[thisHari];
var yye = tgel.getYear();
var year = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + year)
const janghar = (thisDay)
//
module.exports = JimbruOffical = async (JimbruOffical, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await JimbruOffical.decodeJid(JimbruOffical.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
// Group
const groupMetadata = m.isGroup ? await JimbruOffical.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
//const ak = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
const Autoreply = m.isGroup ? autorep.includes(from) : true
autoreadsw = true
// payment 
_sewa.expiredCheck(JimbruOffical, sewa)

// group target
const reply = (teks) => {
             JimbruOffical.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `Thanks For Using Jimbru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/theme/Jimbru.jpg`),"sourceUrl": `${links}`}}}, { quoted: m})
        }
        
const rply = (teks) => {
             JimbruOffical.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `Thanks For Using Jimbru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/theme/Jimbru.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
     //if (Autoreply) //remove forwad slashes to make it autoreply on off
             for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					JimbruOffical.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./Media/audio/${anju}.mp3`)
					JimbruOffical.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					JimbruOffical.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/video/${anjh}.mp4`)
					JimbruOffical.sendMessage(m.chat, { video: result }, { quoted: m })
					}
		    }

            }
// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await JimbruOffical.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await JimbruOffical.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await JimbruOffical.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await JimbruOffical.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.dogeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return JimbruOffical.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 
    
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		JimbruOffical.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await JimbruOffical.sendPresenceUpdate('composing', m.chat)
JimbruOffical.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { JimbruOffical.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
//autoread all
  if (global.autoReadAll) { if (m.chat) { JimbruOffical.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }
  //auto recording all
    if (global.autoRecord) { if (m.chat) { JimbruOffical.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { JimbruOffical.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { JimbruOffical.sendPresenceUpdate('available', m.chat) }
  }
// afk
const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
//
 let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}
//
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "IDR", // Up to you
}
}), { userJid: jid })
JimbruOffical.relayMessage(jid, order.message, { messageId: order.key.id})
}    
 /*
function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡'] */

//menu logo
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}
    //
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}    
 //   
// afk
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
He's in AFK/Offline ${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Type .owner to join your whatsapp group`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Media/theme/Jimbru.jpg'), `${watermark}`, `${botname}`, "919544846609@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await JimbruOffical.sendMessage(from, {text:sami}, {quoted:m})
}*/    
 // AntiLink
if (AntiLink) {
linkgce = await JimbruOffical.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  JimbruOffical.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad word
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
// AntiLink gc 
if (AntiLink) {
if (!isBotAdmins) return
linkgce = await JimbruOffical.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Gc Link Detected 」\`\`\`\n\nYou will not be kicked by a bot because what you send is our group link`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Gc Link Detected 」\`\`\`\n\nAdmin has sent a group link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Gc Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//antilink youtube video
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all 
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await JimbruOffical.groupParticipantsUpdate(m.chat, [kice], 'remove')
JimbruOffical.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

//anti viewonce
if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
JimbruOffical.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}
 // Public & Self
if (!JimbruOffical.public) {
if (!m.key.fromMe) return
}
// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Kolkata"
})

    
/*
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowercase perf+) == jawaban) {
await JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.botname}`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowercase perf+).replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowercase perf+).replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
JimbruOffical.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
JimbruOffical.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
JimbruOffical.sendText(m.chat, `Suit has been sent to chat
@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}
Please choose a suit in the respective chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) JimbruOffical.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
if (!roof.pilih2) JimbruOffical.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) JimbruOffical.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
JimbruOffical.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /scissors/i
let b = /rock/i
let k = /paper/i
let reg = /^(scissors|rock|paper)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowercase perf+))[0]
roof.text = m.text
reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
if (!roof.pilih2) JimbruOffical.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowercase perf+))[0]
roof.text2 = m.text
reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
if (!roof.pilih) JimbruOffical.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
JimbruOffical.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
} */
// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
// 
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 ᴍᴀᴛʜs ǫᴜɪᴢ 🎮\n\nCᴏʀʀᴇᴄᴛ Aɴsᴡᴇʀ 🎉\n\nWᴀɴᴛ ᴛᴏ ᴘʟᴀʏ ᴀɢᴀɪɴ ? sᴇɴᴅ ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('ᴡʀᴏɴɢ ᴀɴsᴡᴇʀ ⚠︎')
}
    
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?giveup|surr?ender|off|skip|surrender)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { //sender
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'ɢᴀᴍᴇ ᴇɴᴅᴇᴅ',
'-2': 'ɪɴᴠᴀʟɪᴅ',
'-1': 'ɪɴᴠᴀʟɪᴅ ᴘᴏsɪᴛɪᴏɴ',
0: 'ɪɴᴠᴀʟɪᴅ ᴘᴏsɪᴛɪᴏɴ',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `      ✵ ᴛɪᴄᴛᴀᴄᴛᴏᴇ ✵ 
Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Type *surrender* to surrender and admit defeat`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await JimbruOffical.sendText(room.x, str, m, { mentions: parseMention(str) } )
await JimbruOffical.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: JimbruOffical.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, JimbruOffical.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
JimbruOffical.ev.emit('messages.upsert', msg)
}

// FAKE TEXT IMG
const textImg = (teks) => {
JimbruOffical.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Media/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `919544846609 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "9544846609@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": logo //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//fake gif 
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "919544846609-1628086590@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Mikhaiel`,
                 "h": `Mikhaiel`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `mikhaiel`,
                 'jpegThumbnail': fs.readFileSync('./Media/theme/bot.mp4')
                        }
                       }
	                  } 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: logo, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: logo
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: logo
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "919544846609-1628086590@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': logo
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': logo
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "919544846609-1628086590@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': logo
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "919544846609-1628086590@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': logo
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "919544846609-1628086590@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
const timestampe = speed();
const latensie = speed() - timestampe
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }  

const menulist = `╭➤ 
│❖ Hᴇʏ👋 ❤︎
└┬❥︎  ${pushname} 
┌┤❖  ᴛʜᴀɴᴋs ғᴏʀ ᴄʜᴏssɪɴɢ
││ ᴊɪᴍʙʀᴏᴏᴛᴀɴ 🧞
│╰────────────────❋ཻུ۪۪⸙
❤︎
╭➤ ʙᴏᴛ ɪɴғᴏ ✫    
│❥︎ sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
│❥︎ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│❥︎ ʙᴏᴛ ɴᴀᴍᴇ : ${global.botname}
│❥︎ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownername}
│❥︎ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${global.ownernummenu}
╰────────────────❋ཻུ۪۪⸙
  ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
╭◪ ᴄᴏᴅᴇᴅ ʙʏ ᴍɪᴋʜᴀɪᴇʟ
│ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ
╰────────────────❋ཻུ۪۪⸙ `
const qtod = m.quoted? "true":"false"

//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
//case perf+ starts here
switch(command) {
	case perf+'list': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
JimbruOffical.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let btn = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: `${website}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Script',
                                    url: `${botscript}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu',
                                    id: 'allmenu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'command'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        JimbruOffical.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        JimbruOffical.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        JimbruOffical.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        JimbruOffical.send5ButMsg(m.chat, menulist, global.botname, btn)
                        } else if (setbot.templateDocument) {
                        let buttonmenu = [
        	{ urlButton: { displayText: `YouTube`, url : `${website}` } },
            { urlButton: { displayText: `Script`, url: `${botscript}` } },
            { quickReplyButton: { displayText: `All Menu`, id: 'allmenu'} },
            { quickReplyButton: { displayText: `List Menu`, id: 'command'} },
            { quickReplyButton: { displayText: `Owner`, id: 'owner'} }
        	]
        	JimbruOffical.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./Media/theme/doc.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                        }
                     }
break
case perf+'menuxxx':
case perf+'helpxxx':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
JimbruOffical.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
let buttonmenu = [
        	{ urlButton: { displayText: `YouTube`, url : `${website}` } },
            { urlButton: { displayText: `Script`, url: `${botscript}` } },
            { quickReplyButton: { displayText: `All Menu`, id: 'allmenu'} },
            { quickReplyButton: { displayText: `List Menu`, id: 'command'} },
            { quickReplyButton: { displayText: `Owner`, id: 'owner'} }
        	]
        	JimbruOffical.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./Media/theme/doc.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
        	break
case perf+'sc': case perf+'script': case perf+'donate': case perf+'sourcecode': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
teks = `*「 ${global.botname} Script 」*\n\nYouTube: ${global.website}\nGitHub: ${global.botscript}\n\n ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ꜰᴏᴜɴᴅ ᴀɴʏᴛʜɪɴɢ ᴜꜱᴇꜰᴜʟ ᴀɴᴅ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ꜱᴜᴘᴘᴏʀᴛ ᴍᴇ ᴛʜᴇɴ ʙᴜʏ ᴍᴇ ᴀ ᴄᴏꜰꜰᴇᴇ  ʙᴜʏ ᴍᴇ ᴀ ᴄᴏꜰꜰᴇᴇ ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴄᴏɴᴛʀɪʙᴜᴛᴇ ꜰᴇᴇʟ ꜰʀᴇᴇ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ !  ᴀɴᴅ ᴍᴀɴʏ ᴛʜᴀɴᴋꜱ ɪɴ ᴀᴅᴠᴀɴᴄᴇ.  ꜰᴏʀ ᴀꜱ ᴡᴇ ᴡᴇʟʟ ᴋɴᴏᴡ`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thum,
jpegThumbnail: logo,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to donate", 
thumbnail: fs.readFileSync("Media/theme/Jimbru.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg',
sourceUrl: "https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg"
}}
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
}    
//ban chat
 case perf+'banchat': {
 if (isBan) return reply(mess.ban)	 			
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (isBanChat) return replay('Already Banned')
banchat.push(from)
replay('Success in banning the group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('Already Unbanned')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('Success in unbanning the group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
  }
  }
  break		
case perf+'botgroups':
case perf+'botgroup':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` Don't forget to join yeah!
*GROUP*
https://chat.whatsapp.com/BuYtj7IRcd2E2EaBftF9fC`)
break
case perf+'getsxvdxcmd': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
JimbruOffical.sendMessage(from, {sticker:{url:"https://github.com/Mikhaiel/Media/blob/main/stickers/menu.webp"}}, {quoted:m})
JimbruOffical.sendMessage(from, {sticker:{url:"https://github.com/Mikhaiel/Media/blob/main/stickers/groupopen.webp"}}, {quoted:m})
JimbruOffical.sendMessage(from, {sticker:{url:"https://github.com/Mikhaiel/Media/blob/main/stickers/groupclose.webp"}}, {quoted:m})
}    
break
//logo maker
case perf+'hoorror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
  case perf+'whitebear':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'thunder2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'sky':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'joker':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'sand':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'pencil':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'metallic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'steel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'harrypotter':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'underwater':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'luxury':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'glue2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'fabric':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'toxic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'ancient':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'christmas2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'rainbow':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'classic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'watercolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'halloweenfire':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'writing':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'foggy':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'skeleton2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'sketch':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'wonderful':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'cool':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'collwall':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'multicolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'juice':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    JimbruOffical.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case perf+'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
JimbruOffical.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case perf+'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
JimbruOffical.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case perf+'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
JimbruOffical.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case perf+'8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
JimbruOffical.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case perf+'textmaker': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
JimbruOffical.sendMessage(from, {image:{url:teds}, caption:"Here you go!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
JimbruOffical.sendMessage(from, {image:{url:teds}, caption:"Here you go!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
// user limit
             case perf+'userlimit':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `「 *ALL USER LIMIT* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break	
//h     
case perf+'ringtone': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!args.join(" ")) return reply(`Example:\n${prefix + command} black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		JimbruOffical.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case perf+'film':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               JimbruOffical.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break
case perf+'wallpaper': case perf+'animewallpaper': case perf+'anime': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case perf+'wikimedia': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case perf+'quotes':case perf+'qoutesimage':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.wait)
				  JimbruOffical.sendMessage(m.chat, { image: { url: cok }, caption: 'Done' }, { quoted: m })
				  break
            case perf+'quotesanime': case perf+'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break		
case perf+'animestory': { 
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  JimbruOffical.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: botname,
       title: ownername,
       buttonText: "Click and see search results➡",
       sections
      }, { quoted : m }
    )  
})
}    
break
case perf+'group setting':{
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    let sections = []
                    let com = [`group open`,`leveling on`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autorevoke on`,`autoreply on`]
                    let comm = [`group close`,`leveling off`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autorevoke on`,`autoreply on`]
                    let listnya = [`Group open/close`,`Leveling on/off`,`Auto-Sticker on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virus on/off`,`Auto Revoke on/off`,`Auto Reply on/off`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Auto Revoke`,`Auto Reply`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Activate ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Deactivate ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  JimbruOffical.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: botname,
       title: "Set your group settings here......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}    
break
case perf'+glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case perf+'3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case perf+'waterdrop':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case perf+'lion2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if(!q) return reply(`Use ${prefix + command} text`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case perf+'papercut':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case perf+'transformer':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case perf+'harrypot':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case perf+'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case perf+'3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case perf+'3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case perf+'thunder':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case perf+'window':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case perf+'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case perf+'graffiti':
   case perf+'grafiti':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case perf+'glitch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'lion':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case perf+'bokeh':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case perf+'holographic':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'bear':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case perf+'wolf':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case perf+'joker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case perf+'dropwater2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case perf+'summertime':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case perf+'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case perf+'thewall':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case perf+'natural':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case perf+'carbon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case perf+'pencil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => JimbruOffical.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
 
case perf+'candy': case perf+'christmas': case perf+'3dchristmas': case perf+'sparklechristmas':
case perf+'deepsea': case perf+'scifi': case perf+'rainbow2': case perf+'waterpipe': case perf+'spooky': 
case perf+'pencil': case perf+'circuit': case perf+'discovery': case perf+'metalic': case perf+'fiction': case perf+'demon': 
case perf+'transformer': case perf+'berry': case perf+'thunder': case perf+'.': case perf+'3dstone2': 
case perf+'neonlight': case perf+'glitch': case perf+'harrypotter': case perf+'brokenglass': case perf+'papercut': 
case perf+'watercolor': case perf+'multicolor': case perf+'neondevil': case perf+'underwater': case perf+'graffitibike':
 case perf+'snow': case perf+'cloud': case perf+'honey': case perf+'ice': case perf+'fruitjuice': case perf+'biscuit': case perf+'wood': 
case perf+'chocolate': case perf+'strawberry': case perf+'matrix': case perf+'blood': case perf+'dropwater': case perf+'toxic': 
case perf+'lava': case perf+'rock': case perf+'bloodglas': case perf+'halloween': case perf+'darkgold': case perf+'joker': case perf+'wicker':
 case perf+'firework': case perf+'skeleton': case perf+'blackpink': case perf+'sand': case perf+'glue': case perf+'1917': case perf+'leaves': case perf+'demon': {
             if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                JimbruOffical.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case perf+'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`*Example :* ${prefix + command} 😇+😁`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await JimbruOffical.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case perf+'getcase perf+:
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (m.isGroup) reply(mess.private)
if (!isCreator) return reply(mess.owner)
const getcase perf+= (case perf+) => {
return "case perf++`'${case perf+}'`+fs.readFileSync("Jimbru.js").toString().split('case perf+\''+case perf++'\'')[1].split("break")[0]+"break"
}
replay(`${getcase perf+q)}`)
break
case perf+'textmaker2': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
JimbruOffical.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
JimbruOffical.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case perf+'emoji': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await JimbruOffical.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await JimbruOffical.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case perf+'areaoftriangle':
      if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
      reply(mess.wait)
      if (!q) return reply(`to find the result of the area of ​​a triangle\nUse ${prefix}areaoftriangle side1 side 2 side 3\nexample: ${prefix}areaoftriangle 1 2 7`)
      if (!isInventoryLimit){ addInventoriLimit(m.sender) }
      try {
      const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
      const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
      reply(`*Results:* ${luasseg}\n${caraluas}`)
      } catch (err) {
      reply('The format of the message is wrong')
}
break
case perf+'perimeteroftriangle':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (!q) return reply(`To find the result of the perimeter of a triangle\nUse ${prefix}perimeteroftriangle side1 side2 side3\nExample: ${prefix}perimeteroftriangle 32 10 8`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Your limit has run out ಥ╭╮ಥ, please buy by #buy limit _amount_")
     kurangLimit(m.sender, 1)
     reply(`One limit is used ಥ‿ಥ\nYour remaining limit : ${getLimit(m.sender)}`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
reply(`*Results:* ${kelsegitiga}\n*Formula:* ${carakel}`)
} catch (err) {
reply('The format of the message is wrong')
}
break
case perf+'areaofsquare':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (!q) return reply(`To find the result of the area of ​​a square\nUse ${prefix}areaofsquare number\nExample: ${prefix}areaofsquare 32`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
reply(`*Results:* ${luaspersegi}\n*Formula:* ${luaspersegis}`) 
} catch (err) {
reply('The format of the message is wrong') 
}
break
case perf+'pythagoras':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (!q) return reply(`To find the Pythagorean result\nUse ${prefix}pythagoras option number1 number2\nExample: ${prefix}pythagoras crooked 8 6`) 
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
reply(`*Results:* ${pytha}\n*Formula:* ${rumuspytha}`) 
} catch (err) {
reply('The format of the message is wrong') 
}
break
case perf+'multiply':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (!q) return reply(`To find the result of multiplication\nUse ${prefix}multiply multiplication number multiplication number\nExample: ${prefix}multiply 5 15`) 
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
reply(`*Results:* ${perkal}\n*Formula:* ${rumusperkal}`) 
} catch (err) {
reply('The format of the message is wrong') 
}
break
case perf+'perimeterofsquare':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (!q) return reply(`To find the result of the perimeter of a square\nUse ${prefix}perimeterofsquare number\nExample: ${prefix}perimeterofsquare 78`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
reply(`*Results:* ${persegi}\n*Formula:* ${caraPersegi}`) 
} catch (err) {
reply('The format of the message is wrong') 
}
break
case perf+'square':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (!q) return reply(`To find a Squared Result\nUse ${prefix}square number\nExample: ${prefix}square 6`) 
try {
const kuadrat = bdr.rdb.kuadrat(q)
reply(`*Results:* ${kuadrat}`) 
} catch (err) {
reply('The format of the message is wrong') 
}
break
case perf+'cubic':
if (!q) return reply(`Untuk mencari sebuah Hasil Kubik\nUse ${prefix}cubic number\nExample: ${prefix}cubic 9`) 
try {
const kubik = bdr.rdb.kubik(q)
reply(`*Results:* ${kubik}`) 
} catch (err) {
reply('The format of the message is wrong') 
}
break
case perf+'family100': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if ('family100'+m.chat in _family100) {
replay('There are still unfinished sessions!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await JimbruOffical.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case perf+'guess': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`)
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await JimbruOffical.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
JimbruOffical.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowercase perf+)
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'picture') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
JimbruOffical.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowercase perf+)
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'word') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
let result = anu[Math.floor(Math.random() * anu.length)]
JimbruOffical.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowercase perf+)
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'sentence') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
JimbruOffical.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowercase perf+)
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lyrics') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
JimbruOffical.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowercase perf+)
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'guess saying') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
JimbruOffical.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowercase perf+)
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
JimbruOffical.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
// tictactoe
case perf+'tictactoe': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay('You are still in the game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
replay('Partner found!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Waiting @${room.game.currentTurn.split('@')[0]}
Type *surrender* to surrender and admit defeat`
if (room.x !== room.o) await JimbruOffical.sendText(room.x, str, m, { mentions: parseMention(str) } )
await JimbruOffical.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
replay('Waiting for partner' + (args.join(" ") ? ` type the command below ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case perf+'delttc': case perf+'delttt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
JimbruOffical.sendText(m.chat, `Successfully deleted the TicTacToe session`, m)
} else if (!this.game) {
replay(`Session TicTacToe🎮 does not exist`)
} else throw '?'
} catch (e) {
replay('error!')
}
}
break
case perf+'kuismath': case perf+'math': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let { genMath, modes } = require('./src/math')
if (!args.join(" ")) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nUsage examples: ${prefix}math medium`)
let result = await genMath(text.toLowercase perf+))
JimbruOffical.sendText(m.chat, `*What is the result of: ${result.soal.toLowercase perf+)}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
replay("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break		
case perf+'delete': case perf+'del': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return replay('The message was not sent by a bot!')
JimbruOffical.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
/*		
case perf+'vote': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (m.chat in vote) return replay(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete vote sesssion`)
if (!args.join(" ")) return replay(`Enter Reason for Vote, Example: *${prefix + command} ${global.ownername} is handsome or not, vote!*`)
replay(`Voting starts!\n\n*${prefix}upvote* - to upvote\n*${prefix}devote* - for not\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
            await JimbruOffical.relayWAMessage(generateWAMessageFromContent(m.chat, {
                        "listMessage":  {
                        "title": ``,
                        "description": `${'```'}${teks1}${'```'}`,
                        "buttonText": `CHOOSE`,
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            { title: 'CHOOSE',
                                "rows": [
                                    {
                                        "title": teks2,
                                        "rowId": perf+`upvote`
                                    }, {
                                       "title": teks3,
                                       "rowId": perf+`devote`
                                    }
                                ]
                            }
                        ]
                    }
                 }, { quoted: false}),{waitForAck: true}
)
  
	    }
            break
               case perf+perf+'appvote': {
            if (!m.isGroup) throw hisoka.sendMessage(m.chat, { text : '```Try at Groups```'})
            if (!(m.chat in vote)) throw false
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw hisoka.sendMessage(m.chat, { text : '```Already Voted```'})
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            
            hisoka.sendMessage(m.chat, { text : `${await hisoka.getName(m.sender)} ${'```'}Voted${'```'}`})
	    }
             break
                case perf+perf+'dawnvote': {
            if (!m.isGroup) hisoka.sendMessage(m.chat, { text : '```Try at Groups```'})
            if (!(m.chat in vote)) throw false
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw hisoka.sendMessage(m.chat, { text : '```Already Voted```'})
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            hisoka.sendMessage(m.chat, { text : `${await hisoka.getName(m.sender)} ${'```'}Voted${'```'}`})
	}
            break
                 
case perf+perf+'voteresult':
if (!m.isGroup) throw hisoka.sendMessage(m.chat, { text : '```Try at Groups```'})
if (!(m.chat in vote)) hisoka.sendMessage(m.chat, { text : '```No Vote in this Chat\nTry ```'+ perf +'```Vote reason,yes,no```'})
teks_vote = `${vote[m.chat][0]}
${vote[m.chat][3]} => ${appvote.length}
${vote[m.chat][4]} => ${dawnvote.length}`
hisoka.sendMessage(m.chat, { text : teks_vote}, m)
break
		case perf+perf+'deletevote': case perf+perf+'delvote': {
            if (!m.isGroup) throw hisoka.sendMessage(m.chat, { text : '```Try at Groups```'})
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            hisoka.sendMessage(m.chat, { text : '```Done```'})
	    }
            break

*/
break
case perf+'listpc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
JimbruOffical.sendTextWithMentions(m.chat, teks, m)
}
break
case perf+'listgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await JimbruOffical.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
JimbruOffical.sendTextWithMentions(m.chat, teks, m)
}
break
case perf+'afk': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replay(`${m.pushName} has gone afk\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case perf+'addcmd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay('Reply Message!')
if (!m.quoted.fileSha256) return replay('SHA256 Hash Missing')
if (!args.join(" ")) return replay(`For What Command?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replay('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
replay(mess.success)
}
break
case perf+'delcmd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return replay(`No hashes`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replay('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
replay(mess.success)
}
break
case perf+'listcmd': {
      if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
JimbruOffical.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case perf+'lockcmd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!m.quoted) return replay('Reply Message!')
if (!m.quoted.fileSha256) return replay('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return replay('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
replay(mess.success)
}
break
case perf+'addmsg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay(`Reply message you want to save in database`)
if (!args.join(" ")) return replay(`Example : ${prefix + command} file name`)
let msgs = global.db.database
if (text.toLowercase perf+) in msgs) return replay(`'${args.join(" ")}' has been saved in the message list`)
msgs[text.toLowercase perf+)] = quoted.fakeObj
replay(`Successfully added message in message list as '${args.join(" ")}'
    
Access with ${prefix}getmsg ${args.join(" ")}
View list of messages with ${prefix}listmsg`)
}
break
case perf+'getmsg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat) 
if (!args.join(" ")) return replay(`Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowercase perf+) in msgs)) return replay(`'${args.join(" ")}' not listed in the message list`)
JimbruOffical.copyNForward(m.chat, msgs[text.toLowercase perf+)], true)
}
break
case perf+'listmsg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
replay(teks)
}
break		
case perf+'delmsg': case perf+'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        if (!(text.toLowercase perf+) in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowercase perf+)]
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
		reply(`Deleted successfully '${text}' from the message list`)
            }
	    break
case perf+'fliptext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case perf+'toletter': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break
	case perf+'github':
anu = await fetchJson(`https://api.github.com/users/${q}/following`)
teks = `*Following Github: ${q}\n\n`
buffer = await getBuffer(anu[0].avatar_url)
	teks = `*Username:* ${anu.login}\n*Link:* ${anu.html_url}\n                            \n`
JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break	
case perf+'welcome': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (welcm) return replay('Already activated')
wlcm.push(from)
replay('Success in turning on the welcome/left msg in this group')
} else if (args[0] === "off") {
if (!welcm) return replay('Already deactivated')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
replay('Success in turning off welcome/left msg in this group')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case perf+'autoreply': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (Autoreply) return replay('Already activated')
autorep.push(from)
replay('Success in turning on the autoreply in this group')
} else if (args[0] === "off") {
if (!Autoreply) return replay('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
replay('Success in turning off autoreply in this group')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'autorevoke': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (GcRvk) return replay('Already activated')
gcrevoke.push(from)
replay('Success in turning on autorevoke in this group')
} else if (args[0] === "off") {
if (!GcRvk) return replay('Already deactivated')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
replay('Success in turning off autorevoke in this group')
} else {
  let buttonsrvk = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsrvk, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'autosticker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
case perf+'autostickerpc':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return reply(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc deactivated')
}
break
case perf+'rentbot':
if (!q) return reply(`Use :\n*${prefix}sewa* add/del time`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
reply(`Success`)
} else if (args[0].toLowercase perf+) === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
reply(`Use :\n*${prefix}sewa* add/del time`)}
break
case perf+'rentlist': 
case perf+'rentallist':
let txtnyee = `Rental List\nAmount : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
reply(txtnyee)
break
case perf+'rentcheck':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isSewa) return reply(`This group is not listed on the rentbot list. Type ${prefix}rentbot for more information`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 RENT EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
reply(sewanya)
break
case perf+'antilinkgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay('Already activated')
ntilink.push(from)
replay('Success in turning on group chat antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('Already deactivated')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('Success in turning off group chat antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'antilinkyt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('Already activated')
ntilinkytvid.push(from)
replay('Success in turning on youtube video antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break	
   case perf+'antilinkytch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('Already activated')
ntilinkytch.push(from)
replay('Success in turning on youtube channel antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break	
case perf+'antilinkig': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('Already activated')
ntilinkig.push(from)
replay('Success in turning on instagram antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break	
   case perf+'antilinkfb': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('Already activated')
ntilinkfb.push(from)
replay('Success in turning on facebook antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case perf+'antilinktg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('Already activated')
ntilinktg.push(from)
replay('Success in turning on telegram antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break		
case perf+'antilinktiktok': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('Already activated')
ntilinktt.push(from)
replay('Success in turning on tiktok antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case perf+'antilinktwt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinktwt.push(from)
replay('Success in turning on twitter antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'alllinkban': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinkall.push(from)
replay('Success in turning on all antilink in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break			
case perf+'antivirus': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'antibadword': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replay('Already activated')
nttoxic.push(from)
replay('Success in turning on antitoxic in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxci = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'antiwame': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiWame) return replay('Already activated')
ntwame.push(from)
replay('Success in turning on antiwame in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case perf+'nsfw': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay('Already activated')
ntnsfw.push(from)
replay('Success in turning on nsfw in this group')
var groupe = await JimbruOffical.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruOffical.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await JimbruOffical.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case perf+'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
break
case perf+'online': case perf+'onlinelist: {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
JimbruOffical.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break	
case perf+'chat': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
if (!args.join(" ")) return reply(`Example :\n${prefix + command} 916909xxxxxx|Hi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT |*
Message from owner of bot
Number : @${m.sender.split("@")[0]}
Message : ${pesny}`
JimbruOffical.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await reply("Success")
break
case perf+'cowner': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Select add or delete`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return reply('The user is already the owner')
owner.push(orgnye)
reply(`Success in adding owner`)
} else if (args[0] === "del") {
if (!isCwner) return reply('User is not owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
reply(`Success in deleting owner`)
} else {
reply("Error")
}
}
break
case perf+'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
break
case perf+'request': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
JimbruOffical.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
JimbruOffical.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case perf+'report': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} hey dev this user is spamming`)
teks = `*| REPORT |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
JimbruOffical.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
JimbruOffical.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case perf+'mcpedl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: logo,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case perf+'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break	
case perf+'searchgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: logo,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
case perf+'antitag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`Successfully activated antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`Successfully deactivated antitag!`)
} else {
replay('Choose on or off')
}
}
break
case perf+'yts': case perf+'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
JimbruOffical.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case perf+'chatinfo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
JimbruOffical.sendTextWithMentions(m.chat, teks, m)
}
break
case perf+'setname': case perf+'setsubject': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (!text) return replay('Text ?')
await JimbruOffical.groupUpdateSubject(m.chat, text).then((res) => replay(mess.success)).catch((err) => replay(jsonformat(err)))
}
break
case perf+'block': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await JimbruOffical.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case perf+'unblock': {
        	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await JimbruOffical.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case perf+'setdesc' : {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (!text) return replay('Where is the text?')
await JimbruOffical.groupUpdateDescription(m.chat, text).then((res) => replay(mess.success)).catch((err) => replay(jsonformat(err)))
}
break
case perf+'pp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
await JimbruOffical.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}	
break
case perf+'setgrouppp': case perf+'setgruppp': case perf+'setgcpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
await JimbruOffical.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
case perf+'tag': case perf+'tagall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝

🌹 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${global.themeemoji} @${mem.id.split('@')[0]}\n`
}
JimbruOffical.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case perf+'hidetag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
JimbruOffical.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case perf+'virtex': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.admin)
JimbruOffical.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
JimbruOffical.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
JimbruOffical.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
JimbruOffical.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
JimbruOffical.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
}
break
	case perf+'autoreadstatus':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	if (!isCreator) return reply(mess.owner)
	if (args[0] == 'on') {
		if (autoreadsw) return reply('*Already activated!*')
		autoreadsw = true
		reply('*Successfully activate auto read status*')
	} else if (args[0] == 'off') {
		if (!autoreadsw) return reply('*Already deactivated!*')
		autoreadsw = false
		reply('*Successfully turn off auto read status*')
	} else {
		reply('Choose on or off!')
	}
	break
case perf+'grouplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
let response = await JimbruOffical.groupInviteCode(m.chat)
JimbruOffical.sendMessage(m.chat, {text:`${groupMetadata.subject} Group Link : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: `${global.ownername}`,
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${global.botname}`,
"body": `${global.watermark}`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": `${global.website}`
}}}, { quoted: m, detectLink: true })
}
break
case perf+'revoke':
case perf+'reset link':
case perf+'reset group link': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
JimbruOffical.groupRevokeInvite(m.chat)
}
break
	case perf+'ephemeral': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (!args[0]) return replay('Enter the enable/disable values')
if (args[0] === 'enable') {
await JimbruOffical.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'disable') {
await JimbruOffical.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
}
}
break
case perf+'editinfo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === 'open'){
await JimbruOffical.groupSettingUpdate(m.chat, 'unlocked').then((res) => replay(`Successful in enabling the group info edit`)).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'close'){
await JimbruOffical.groupSettingUpdate(m.chat, 'locked').then((res) => replay(`Successful in disabling the group info edit`)).catch((err) => replay(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: logo,
jpegThumbnail: thum,
caption: `*「 ${global.botname} 」*\n\nChange Info, Select Open Or Close`,
footer: `${botname}`,
buttons: buttons,
headerType: 4
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case perf+'group': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === 'close'){
await JimbruOffical.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Successful in closing the gc`)).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'open'){
await JimbruOffical.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Successful in opening the gc`)).catch((err) => replay(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: logo,
jpegThumbnail: thum,
caption: `*「 ${global.botname} 」*\n\nChange Group Setting, Select Open Or Close`,
footer: `${botname}`,
buttons: buttons,
headerType: 4
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
	case perf+'promote': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await JimbruOffical.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
}
break
case perf+'demote': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await JimbruOffical.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
}
break
case perf+'kick': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await JimbruOffical.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break
case perf+'addxxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await JimbruOffical.groupParticipantsUpdate(m.chat, [users], 'add')
}
break 
case perf+'add': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await JimbruOffical.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    const response = await JimbruOffical.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
        }))
    })
}

break
case perf+'inspect' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply("Where is the link?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
JimbruOffical.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
${themeemoji} ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
${themeemoji} Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
${themeemoji} Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
${themeemoji} Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Kolkata").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
${themeemoji} Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
${themeemoji} Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Kolkata").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
${themeemoji} Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
${themeemoji} Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
${themeemoji} Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Kolkata").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
${themeemoji} Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
${themeemoji} Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await JimbruOffical.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
JimbruOffical.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await JimbruOffical.parseMention(tekse) })
})
}
break
case perf+'inspect': case perf+'inspectgclink': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return replay("The link?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replay("Link Invalid")
JimbruOffical.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Kolkata").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create on : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Kolkata").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Kolkata").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await JimbruOffical.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
JimbruOffical.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await JimbruOffical.parseMention(tekse) })
})
}
break	
case perf+'join': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return replay(`Where's the link?`)
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return replay("Link invalid!")
if (isCreator) {
await JimbruOffical.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
replay("Succes!")
} else {
JimbruOffical.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Sorry, your group members are less than 50, at least for a bot to join you must have more than 50 members`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Media/theme/Jimbru.jpg'), `${global.watermark}`, `${global.botname}`, "919544846609@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await JimbruOffical.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
replay("Succes!")
} else {
replay("Error")
}
}).catch(_ => _)
}
}
break
case perf+'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await JimbruOffical.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
JimbruOffical.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
JimbruOffical.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
case perf+'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await JimbruOffical.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
JimbruOffical.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
JimbruOffical.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case perf+'bass': case perf+'blown': case perf+'deep': case perf+'earrape': case perf+'fast': case perf+'fat': case perf+'nightcore': case perf+'reverse': case perf+'robot': case perf+'slow': case perf+'smooth': case perf+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                JimbruOffical.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case perf+'write': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`Example :\n${prefix}nulis Aldi|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
const nls = args.join(" ")
const nams = "Name : " + nls.split("|")[0];
const kels = "Class : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await reply('Writing')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return reply("Maximum number of class texts 4")
if (nams.length > 34) return reply("The maximum number of text is 27")
if (codewarn.length > 7) return reply("Maximum number of color text 7")
console.log('「 WRITING 」is in process')
spawn('convert', [
'./Media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./Media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => reply('Error') )
.on('exit', () => {
JimbruOffical.sendMessage(from, {image:fs.readFileSync('./storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => reply('```「 FAIL 」An error occurred sending the file```'))
})
exec(`npm i marker`)
}
break
case perf+'calculator': case perf+'cal': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2 * 5\n\n*List of Numbers :*\n•> Time : *\n•> For : /\n•> Plus : +\n•> Not enough : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 Calculator 」\`\`\`\n\n*•> Count :* ${qsd}\n*•> Results :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case perf+'public': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
JimbruOffical.public = true
reply('Success In Chaing To Public Usage')
JimbruOffical.setStatus(`Mode : Public`)
}
break
case perf+'setbio':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#setbio text*')
JimbruOffical.setStatus(`${q}`)
reply(mess.success)
break
case perf+'self': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
JimbruOffical.public = false
reply('Successful Change To Self Usage')
JimbruOffical.setStatus(`Mode : Self`)
}
break	
     case perf+'ping': {
   if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   let { performance } = require('perf_hooks')
   let old = performance.now()
       await JimbruOffical.sendMessage(m.chat, { text : 'please wait...' }, {quoted : false})
       let neww = performance.now()
       let speed = neww - old
       mi = Math.ceil(speed)
       JimbruOffical.sendMessage(m.chat, { text : "```" + `${mi}` + " ms```" }, {quoted : false})
       }
break
case perf+'speedtest': {
	   if (isBan) return reply(mess.ban)	 			
           if (isBanChat) return reply(mess.banChat)
           reply('Testing Speed...')
           let cp = require('child_process')
           let { promisify } = require('util')
           let exec = promisify(cp.exec).bind(cp)
           let o
           try {
           o = await exec('python speed.py')
           } catch (e) {
           o = e
           } finally {
           let { stdout, stderr } = o
           if (stdout.trim()) reply(stdout)
           if (stderr.trim()) reply(stderr)
            }
            }
            break
case perf+'emojimix2': {
	   if (isBan) return reply(mess.ban)	 			
           if (isBanChat) return reply(mess.banChat)
	   if (!text) return reply(`Example : ${prefix + command} 😅`)
           let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
	   for (let res of anu.results) {
	   let encmedia = await JimbruOffical.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
           await fs.unlinkSync(encmedia)
		 }
	         }
	    break
case perf+'attp': case perf+'ttp': {
            if (isBan) return reply(mess.ban)	 			
            if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} text`)
            await JimbruOffical.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
            }
           break	
case perf+'image': case perf+'img': {
            if (isBan) return reply(mess.ban)	 			
            if (isBanChat) return reply(mess.banChat)
            if (!m.quoted) return reply('Reply Image')
            if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
            reply(mess.wait)
            let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) throw err
            let buffer = fs.readFileSync(ran)
            JimbruOffical.sendMessage(m.chat, { image: buffer }, { quoted: m})
            fs.unlinkSync(ran)
            })
            }
            break
case perf+'mp4': case perf+'video': {
           if (isBan) return reply(mess.ban)	 			
           if (isBanChat) return reply(mess.banChat)
           if (!m.quoted) return reply('Reply Image')
           if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
           reply(mess.wait)
           let { webp2mp4File } = require('./lib/uploader')
           let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
           let webpToMp4 = await webp2mp4File(media)
           await JimbruOffical.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
           await fs.unlinkSync(media)
          }
       break
case perf+'audio': {
      if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
      if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
      if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
      reply(mess.wait)
      let media = await quoted.download()
      let { toAudio } = require('./lib/converter')
      let audio = await toAudio(media, 'mp4')
      JimbruOffical.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
      }
  break
case perf+'mp3': {
      if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
      if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
      if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
      if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
      reply(mess.wait)
      let media = await quoted.download()
      let { toAudio } = require('./lib/converter')
      let audio = await toAudio(media, 'mp4')
      JimbruOffical.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${JimbruOffical.user.name} (${m.id}).mp3`}, { quoted : m })
      }
break
case perf+'tovn': case perf+'voice': {
      if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
      if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
      if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
      reply(mess.wait)
      let media = await quoted.download()
      let { toPTT } = require('./lib/converter')
      let audio = await toPTT(media, 'mp4')
      JimbruOffical.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
      }
      break
case perf+'gif': {
      if (isBan) return reply(mess.ban)	 			
      if (isBanChat) return reply(mess.banChat)
      if (!m.quoted) return reply('Reply Image')
      if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
      reply(mess.wait)
      let { webp2mp4File } = require('./lib/uploader')
      let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
      let webpToMp4 = await webp2mp4File(media)
      await JimbruOffical.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
      await fs.unlinkSync(media)
      }
      break	
case perf+'antiviewonce' : {
	      if (isBan) return reply(mess.ban)
	      if (isBanChat) return reply(mess.banChat)
              if (!m.key.fromMe && !isCreator) return reply(mess.owner)
              if (args[0] === "on") {
      	      if (global.db.data.chats[m.chat].antionce) return reply(`Already activated`)
              global.db.data.chats[m.chat].antionce = true
              reply(`${command} Successfully Activated !`)
              } else if (args[0] === "off") {
              if (!global.db.data.chats[m.chat].antionce) return reply(`Already deactivated`)
              global.db.data.chats[m.chat].antionce = false
              reply(`${command} Successfully Deactivated !`)
              } else {
              let buttonsntilink = [
              { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
              { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
              ]
              await JimbruOffical.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
              }
      break	
case perf+'lovesticker' :{
	         	if (isBan) return reply(mess.ban)
	             if (isBanChat) return reply(mess.banChat)
                 var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                 var wifegerak = ano.split('\n')
                 var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                 encmedia = await JimbruOffical.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                 await fs.unlinkSync(encmedia)
                 }
           break
case perf+'gurasticker' : {
	         	if (isBan) return reply(mess.ban)
	             if (isBanChat) return reply(mess.banChat)
                 var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                 var wifegerak = ano.split('\n')
                 var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                 encmedia = await JimbruOffical.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                 await fs.unlinkSync(encmedia)
                  }
          break
case perf+'dogesticker' : {
	         	if (isBan) return reply(mess.ban)
	             if (isBanChat) return reply(mess.banChat)
                 var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                 var wifegerak = ano.split('\n')
                 var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                 encmedia = await JimbruOffical.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                 await fs.unlinkSync(encmedia)
                 }
         break 
case perf+'patricksticker' : {
	         	if (isBan) return reply(mess.ban)
	             if (isBanChat) return reply(mess.banChat)
                 var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                 var wifegerak = ano.split('\n')
                 var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                 encmedia = await JimbruOffical.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                 await fs.unlinkSync(encmedia)
                 }
         break
case perf+'loveshortstory':{
	            if (isBan) return reply(mess.ban)	 			
                if (isBanChat) return reply(mess.banChat)
                let cerpe = await cerpen(`Cinta segitiga`)
                reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
                }
        break
case perf+'friendshipshortstory':{
	            if (isBan) return reply(mess.ban)	 			
                if (isBanChat) return reply(mess.banChat)
                let cerpe = await cerpen(`persahabatan`)
                reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
                }
        break
case perf+'url': {
                if (isBan) return reply(mess.ban)	 			
                if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                let anu = await TelegraPh(media)
                reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                let anu = await UploadFileUgu(media)
                reply(util.format(anu))
                }
                await fs.unlinkSync(media)
                }
       break
case perf+'quoted': {
                if (isBan) return reply(mess.ban)	 			
                if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return replay('Reply Message!!')
                let wokwol = await JimbruOffical.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
                await wokwol.quoted.copyNForward(m.chat, true)
                }
        break
case perf+'getname': {
                if (isBan) return reply(mess.ban)	 			
                if (isBanChat) return reply(mess.banChat)
                if (qtod === "true") {
                namenye = await JimbruOffical.getName(m.quoted.sender)
                replay(namenye)
                } else if (qtod === "false") {
               JimbruOffical.sendMessage(from, {text:"Reply person"}, {quoted:m})
               }
               }
       break
case perf+'getpp': {
               if (isBan) return reply(mess.ban)	 			
               if (isBanChat) return reply(mess.banChat)
               if (qtod === "true") {
               try {
               pporg = await JimbruOffical.profilePictureUrl(m.quoted.sender, 'image')
               } catch {
               pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
               }
              JimbruOffical.sendMessage(m.chat, { image : { url : pporg }, caption:`Done!` }, { quoted : m })
               } else if (qtod === "false") {
               try {
               pporgs = await JimbruOffical.profilePictureUrl(from, 'image')
               } catch {
               pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
               }
              JimbruOffical.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done!` }, { quoted : m })
               }
               }
       break
case perf+'owner' : {
              JimbruOffical.sendContact(m.chat, global.owner, m)
               }
       break
case perf+'translate': case perf+'trt': {
               if (isBan) return reply(mess.ban)
               if (!args.join(" ")) return replay("The text?")
               tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
               Infoo = tes.info
               Detek = tes.translate
               replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
               }
       break
case perf+'image': {
               if (isBan) return reply(mess.ban)	 			
               if (isBanChat) return reply(mess.banChat)
               if (!args[0]) return reply("What picture are you looking for??")
               let gis = require('g-i-s')
               gis(args.join(" "), async (error, result) => {
               n = result
               images = n[Math.floor(Math.random() * n.length)].url
               let buttons = [
               {buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
                ]
                let buttonMessage = {
                image: { url: images },
                caption: `*| MADE BY JIMBRU |*

                ${global.themeemoji} Query : ${text}
                ${global.themeemoji} Media Url : ${images}`,
                footer: `${global.botname}`,
                buttons: buttons,
                headerType: 4,
                contextInfo:{externalAdReply:{
                title:`${global.ownername}`,
                body:`${global.watermark}`,
                thumbnail: log0,
                mediaType:2,
                mediaUrl: `${global.website}`,
                sourceUrl: `{global.website}`
                }}
                }
               JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
         break
case perf+'google': {
               if (isBan) return reply(mess.ban)	 			
               if (isBanChat) return reply(mess.banChat)
               if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
               let google = require('google-it')
               google({'query': args.join(" ")}).then(res => {
               let teks = `Google Search From : ${text}\n\n`
               for (let g of res) {
               teks += `${global.themeemoji} *Title* : ${g.title}\n`
               teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
               teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
               } 
              reply(teks)
              })
              }
      break
case perf+'igstory' : {
             if (isBan) return reply(mess.ban)	 			
             if (isBanChat) return reply(mess.banChat)
             if (!args[0]) return reply(`Example :\n${prefix + command} josephxeon13`)
             try {
             hx.igstory(args[0]).then(async(resed) => {
             ini_anu = []
             anu_list = []
             textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
             urut = 1
             for (let i = 0; i < resed.medias.length; i++) {
             ini_anu.push({
           "type": resed.medias[i].fileType,
           "url": resed.medias[i].url
            })
            }
            ilod = 1
            for (let i of ini_anu) {
            anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
            }
           textbv += `\n\n_Select the media below to download_`
               let buttons = anu_list
               let buttonMessage = {
               image:logo,
               jpegThumbnail:thum,
              caption: textbv,
              footer: `${global.botname}`,
              buttons: buttons,
              headerType: 4
              }
            JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
             })
             } catch (err) {
             reply(String(err))
             }
             }
break
case perf+'igs2': case perf+'igstory2': case perf+'instagramstory2': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory josephxeon13`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            JimbruOffical.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                JimbruOffical.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  JimbruOffical.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
            }	
			break
			case perf+'ig2': case perf+'igdl2': case perf+'instagram2': {
               if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            JimbruOffical.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                JimbruOffical.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                JimbruOffical.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            }).catch((err) => reply(mess.error))
            }		
			break	
	
	
	
	case perf+'igreels': {
          if (isBan) return reply(mess.ban)	 			
          if (isBanChat) return reply(mess.banChat)
          if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
          try {
          hx.igdl(args[0]).then(async(resed) => {
          ini_anu = []
          anu_list = []
          textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
          urut = 1
          for (let i = 0; i < resed.medias.length; i++) {
          ini_anu.push({
          "type": resed.medias[i].fileType,
          "url": resed.medias[i].url
           })
           }
           ilod = 1
           for (let i of ini_anu) {
           anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
           }
           textbv += `\n\n_Select the media below to download_`
           let buttons = anu_list
           let buttonMessage = {
           image:logo,
           jpegThumbnail:thum,
           caption: textbv,
           footer: `${global.botname}`,
           buttons: buttons,
           headerType: 4
           }
           JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
           })
           } catch (err) {
           reply(String(err))
           }
           }
break
case perf+'ig': {
	   if (isBan) return reply(mess.ban)	 			
       if (isBanChat) return reply(mess.banChat)
       if (args[0] === "mp4") {
       JimbruOffical.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
       } else if (args[0] === "jpg") {
      JimbruOffical.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
       } else {
      reply("Error! ")
       }
       }
break
case perf+'mp4' : {
	   if (isBan) return reply(mess.ban)	 			
       if (isBanChat) return reply(mess.banChat)
       if (!args[0]) return reply(`Where's the link ?`)
       try {
      JimbruOffical.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
       title:`${global.botname}`,
       body:`${global.ownername}`,
       thumbnail: logo,
       mediaType:2,
       mediaUrl: `${global.website}`,
       sourceUrl: `${global.website}`
       }}}, {quoted:m})
       } catch {
       reply("Link error!")
       }
       }
break
case perf+'jpeg': {
       if (isBan) return reply(mess.ban)	 			
       if (isBanChat) return reply(mess.banChat)
       if (!args[0]) return reply(`Where's the link?`)
       try {
       JimbruOffical.sendMessage(from, {image:{url:args[0]}, caption:"Success", contextInfo:{externalAdReply:{
       title:`${global.botname}`,
       body:`${global.ownername}`,
       thumbnail: logo,
       mediaType:2,
       mediaUrl: `${global.website}`,
       sourceUrl: `${global.website}`
        }}}, {quoted:m})
        } catch {
        reply("Link error")
        }
        }
break
case perf+'igtv': {	            
                if (isBan) return reply(mess.ban)	 			
                if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link boss?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                JimbruOffical.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
         case perf+'twitter': case perf+'td': case perf+'twitterdl': {     
         if (isBan) return reply(mess.ban)	 			
         if (isBanChat) return reply(mess.banChat)	             
         if (!text) return reply(`Where is the link?`)
         if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
         xeonkey.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                    buf = await getBuffer(data.thumbnail)    
        JimbruOffical.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
        for (let i of data.medias) {
        JimbruOffical.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                   }
                   }).catch((err) => {
                   reply(mess.error)
                   })
                  }
            break
 case perf+'twittermp3': case perf+'twitteraudio': { 
                    if (isBan) return reply(mess.ban)	 			
                    if (isBanChat) return reply(mess.banChat)	             
                    if (!text) return reply(`Where is the link?`)
                    if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
                    xeonkey.Twitter(`${text}`).then(async (data) => {
                    JimbruOffical.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                    }).catch((err) => {
                    reply(mess.reply)
                    })
                    }
            break
case perf+'twmp4': {
                  if (isBan) return reply(mess.ban)	 			
                  if (isBanChat) return reply(mess.banChat)
                  if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
                  try {
                  let lotwit = await aiovideodl(args[0])
                  teks = `*| TWITTER DOWNLOADER |*
                  
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Error link!")
}
}
break
case perf+'twdd': {
          if (isBan) return reply(mess.ban)	 			
          if (isBanChat) return reply(mess.banChat)
          let buttons = [
               {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
                ]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: "Twitter Downloader",
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
}
break
case perf+'fb':  {     	    
            if (isBan) return reply(mess.ban)	 			
            if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
            let bocil = require('@bochilteam/scraper')  
                  bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                         let txt = `*FB DOWNLOADER*\n\n`
                         txt += `*${themeemoji}TITLE :* ${data.title}\n`
                         txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                         txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                         txt += `*${themeemoji}ID :* ${watermark}\n`
                         txt += `*${themeemoji}URL :* ${text}\n\n`
                         buf = await getBuffer(data.thumbnail)    
          JimbruOffical.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
           for (let i of data.result) {     
          JimbruOffical.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${themeemoji} Quality :* ${i.quality}`}, { quoted: m })
                      }          
                      }).catch((err) => {
                      reply(mess.error)
                      })
                      }
              break
case perf+'fbmp3' : {
          if (isBan) return reply(mess.ban)	 			
          if (isBanChat) return reply(mess.banChat)
          if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
          if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
          let noh = require('@bochilteam/scraper')                
          noh.savefrom(`${text}`).then(async (anu) => {  
          JimbruOffical.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
          }).catch((err) => {
          reply(mess.error)
          })
          }
            break
case perf+'fbmp4' : {
          if (isBan) return reply(mess.ban)	 			
          if (isBanChat) return reply(mess.banChat)
          if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
          try {
          let resd = await aiovideodl(args[0])
          teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}
_For HD quality you can click the button below_`
            let buttons = [
            {buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
             ]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:"Facebook Downloader",
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break
case perf+'fbd' : {
          if (isBan) return reply(mess.ban)	 			
          if (isBanChat) return reply(mess.banChat)
let buttons = [
          {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: " Facebook Downloader",
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
}
case perf+'song': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*
${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewers : ${anu.views}
${global.themeemoji} Uploaded : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: `${global.botname}`,
thumbnail: logo,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
JimbruOffical.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case perf+'ytmusic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*
${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}
_Select video or audio and wait a while_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
JimbruOffical.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Link error!")
}
}
break	
	case perf+'ytvd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
JimbruOffical.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: logo,
mediaType:2,
mediaUrl: `${global.website}`,
sourceUrl: `${global.website}`
}}}, {quoted:m})
}
break
case perf+'ytad': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
JimbruOffical.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: logo,
mediaType:2,
mediaUrl: `${global.website}`,
sourceUrl: `${global.website}`
}}}, {quoted:m})
}
break
case perf+'ytshorts': case perf+'shorts': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
  xeonkey.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*
*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
  buf = await getBuffer(data.thumbnail)
  JimbruOffical.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  JimbruOffical.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
                	    case perf+'couplepp': {
                	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                JimbruOffical.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                JimbruOffical.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
case perf+'ytmp3':  case perf+'ytmusic': {	    
	                	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
                let caption = `*YOUTUBE MUSIC*\n\n*${themeemoji}Title :* ${media.title}\n*${themeemoji}File size :* ${media.filesizeF}\n*${themeemoji}Url :* ${isUrl(text)}\n*${themeemoji}Ext :* MP3\n*${themeemoji}Resolution :* ${args[1] || '128kbps'}`
                buf = await getBuffer(media.thumb)
                JimbruOffical.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => reply(mess.error))                
                JimbruOffical.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{title:media.title,body:"YOUTUBE MP3",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}}).catch((err) => reply(mess.error))
                }
            break
           case perf+'ytmp4': case perf+'ytvideo': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=RNa4thokVJ4 360p`)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid!`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
                var capti = `*YOUTUBE VIDEO*\n\n*${themeemoji}Title* : ${media.title}\n*${themeemoji}File size* : ${media.filesizeF}\n*${themeemoji}Url* : ${isUrl(text)}\n*${themeemoji}Ext* : Mp4\n*${themeemoji}Resoultion* : ${args[1] || '360p'}`
                var buf = await getBuffer(media.thumb)
                JimbruOffical.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
                JimbruOffical.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Here you go!` }, { quoted: m }).catch((err) => reply(mess.error))
            }
            break	
	
	case perf+'ytdl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                JimbruOffical.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
                JimbruOffical.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
            }
            break
	case perf+'ytmp32':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
   reply(mess.wait)
  if (args.length < 1) return reply('Where is the link?')
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      JimbruOffical.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    reply(from, `Access denied, can't download!. Try using another link`, { quoted : m })
   }
  }
  break
  case perf+'ytmp42':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
   reply(mess.wait)
  if (args.length < 1) return reply('the link?')
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      JimbruOffical.sendMessage(from, { video: { url: dl_link }, caption: "By Aldi Store" }, { quoted: m })
      })
     
})
     } catch (e){
    reply(from, `Access denied, can't download!. Try using another link`, { quoted : m })
   }
  }
  break
case perf+'img2': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                JimbruOffical.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break  
	
case perf+'take': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
JimbruOffical.downloadAndSaveMediaMessage(quoted, "gifee")
JimbruOffical.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await JimbruOffical.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await JimbruOffical.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break	
// creater	
case perf+'invert':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (isBan) return reply(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGanss = await floNime(dwnld)
buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${fatGanss.result.url}`
JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
}
}
break
case perf+'stupid':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
		anu = `http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${q}`
		JimbruOffical.sendMessage(from, {image:{url:anu}, caption:"Here you go!"}, {quoted:m})
		break
case perf+'wasted' :{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (isBan) return reply(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGa = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${fatGa.result.url}`
JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
}
}
break
case perf+'jail':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
if (isBan) return reply(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/jail?apikey=${lolkey}&img=${fatGan.result.url}`
JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
}
}
break
case perf+'stickermeme' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await JimbruOffical.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await JimbruOffical.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case perf+'sticker' : {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await JimbruOffical.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await JimbruOffical.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case perf+'wiki':
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
JimbruOffical.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break	
case perf+'playstore': case perf+'apk':
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)	
	break
            case perf+'couple': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await JimbruOffical.sendButtonText(m.chat, buttons, jawab, JimbruOffical.user.name, m, {mentions: menst})
            }
            break
                        case perf+'mysoulmate': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await JimbruOffical.sendButtonText(m.chat, buttons, jawab, JimbruOffical.user.name, m, {mentions: ments})
            }
            break
            case perf+'is':
                        	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
JimbruOffical.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case perf+'what':
					            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
JimbruOffical.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case perf+'can':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
JimbruOffical.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case perf+'how':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
JimbruOffical.sendMessage(from, { text: `Question : How ${q}\nAnswer : How ${ya}` }, { quoted: m })
					break
case perf+'rate':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
JimbruOffical.sendMessage(from, { text: `Question : Rate ${q}\nAnswer : *${te}%*` }, { quoted: m })
					break
  case perf+'handsomecheck':
              	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
JimbruOffical.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case perf+'beautifulcheck':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
JimbruOffical.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
case perf+'awesomecheck':
  case perf+'greatcheck':
    case perf+'gaycheck':
      case perf+'cutecheck':
        case perf+'lesbicheck':
          case perf+'lesbiancheck':
             case perf+'hornycheck':
                 case perf+'prettycheck':
                    case perf+'lovelycheck':
                      case perf+'uglycheck':
                                  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
JimbruOffical.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
	case perf+'charactercheck':
					            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					JimbruOffical.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
	  case perf+'stupid':
      case perf+'foolish':
      case perf+'smart':
      case perf+'idiot':
      case perf+'gay':
      case perf+'lesbi':
      case perf+'bastard':
      case perf+'stubble':
      case perf+'dog':
      case perf+'fuck':
      case perf+'ape':
      case perf+'noob':
      case perf+'great':
      case perf+'horny':
      case perf+'wibu':
      case perf+'asshole':
      case perf+'handsome':
      case perf+'beautiful':
      case perf+'cute':
      case perf+'kind':
      case perf+'ugly':
      case perf+'pretty':
      case perf+'lesbian':
      case perf+'randi':
      case perf+'gandu':
      case perf+'madarchod':
      case perf+'kala':
      case perf+'gora':
      case perf+'chutiya':
      case perf+'nibba':
      case perf+'nibbi':
      case perf+'bhosdiwala':
      case perf+'chutmarika':
      case perf+'bokachoda':
      case perf+'suarerbaccha':
      case perf+'bolochoda':
      case perf+'muthal':
      case perf+'muthbaaz':
      case perf+'randibaaz':
      case perf+'topibaaz':
      case perf+'cunt':
      case perf+'nerd':
      case perf+'behenchod':
      case perf+'behnchoda':
      case perf+'bhosdika':
      case perf+'nerd':
      case perf+'mc':
      case perf+'bsdk':
      case perf+'bhosdk':
      case perf+'nigger':
      case perf+'loda':
      case perf+'laund':
      case perf+'nigga':
      case perf+'noobra':
      case perf+'tharki':
      case perf+'nibba':
      case perf+'nibbi':
      case perf+'mumu':
      case perf+'rascal':
      case perf+'scumbag':
      case perf+'nuts':
      case perf+'comrade':
      case perf+'fagot':
      case perf+'scoundrel':
      case perf+'ditch':
      case perf+'dope':
      case perf+'gucci':
      case perf+'lit':
      case perf+'dumbass':
      case perf+'sexy':
      case perf+'crackhead':
      case perf+'mf':
      case perf+'motherfucker':
      case perf+'dogla':
      case perf+'bewda':
      case perf+'boka':
      case perf+'khanki':
      case perf+'bal':
      case perf+'sucker':
      case perf+'fuckboy':
      case perf+'playboy':
      case perf+'fuckgirl':
      case perf+'playgirl':
      case perf+'bc':
      case perf+'hot': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await JimbruOffical.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case perf+'mobile': {
	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} realme`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/gsmarena?query=${text}&apikey=APIKEY`)
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `${themeemoji} Title: ${judul}
${themeemoji} Realease: ${rilis}
${themeemoji} Size: ${ukuran}
${themeemoji} Type: ${type}
${themeemoji} Storage: ${storage}
${themeemoji} Display: ${display}
${themeemoji} Inchi: ${inchi}
${themeemoji} Pixel: ${pixel}
${themeemoji} Video Pixel: ${videoPixel}
${themeemoji} Ram: ${ram}
${themeemoji} Chipset: ${chipset}
${themeemoji} Battery: ${batrai}
${themeemoji} Battery Brand: ${merek_batre}
${themeemoji} Detail: ${detail}`
            JimbruOffical.sendImage(m.chat, thumb, capt, m)
            }
            break	
//pack
case perf+'xxxbj':case perf+'exxxro':case perf+'cxxxum':case perf+'fexxxet':case perf+'yuxxxri':case perf+'traxxxp':case perf+'lewxxxd':case perf+'fexxxed':case perf+'erxxxon':case perf+'soxxxlo':case perf+'gaxxxsm':case perf+'pxxxoke':case perf+'axxxnal':case perf+'holxxxo':case perf+'titxxxs':case perf+'kxxxuni':case perf+'kixxxss':case perf+'erxxxok':case perf+'smxxxug':case perf+'baxxxka':case perf+'sxxxolog':case perf+'feexxxxtg':case perf+'lexxwdk':case perf+'puxxxssy':case perf+'fexxxmdom':case perf+'cudxxxdle':case perf+'erozzzyuri':case perf+'cum_xxxjpg':case perf+'bloxxxwjob':case perf+'erofezzzzet':case perf+'holzzoero':case perf+'erokezzzmo':case perf+'fox_zzzgirl':case perf+'futxxxanari':case perf+'lewdkezzmo':case perf+'pussy_jpzzzg':case perf+'kemonozzzmimi':case perf+'nsfw_azzzvatar': 
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
    break
case perf+'xxxcry':	anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'kisxxxs3':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'kixxxss2':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'crinxxxge':
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'daxxxnce':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'xxxkill':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'haxxxppy':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'bxxxonk':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'sxxxmug2':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'slaxxxp':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'waxxxve':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'smilexxx':	
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'bullyxxx':
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
reply(mess.wait)
JimbruOffical.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname })
break
case perf+'xxart':case perf+'btsxx':case perf+'exoxx':case perf+'elxxxf':case perf+'lolxxxi':case perf+'nekoxxx':case perf+'shotxxxa':case perf+'sagirixxx':case perf+'shinxxxobu':case perf+'mexxxgumin':case perf+'wallnixxxme':   
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  buffer = `http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
    break
case perf+'xxxblowjob':
case perf+'xxxyaoi':
case perf+'xxxecchi':
case perf+'xxxahegao':
case perf+'xxxhololewd':
case perf+'xxxsideoppai':
case perf+'xxxanimefeets':
case perf+'xxxanimebooty':
case perf+'xxxanimethighss':
case perf+'xxxanimearmpits':
case perf+'xxxlewdanimegirls':
case perf+'xxxbiganimetiddies':
case perf+'xxxanimebellybutton': 
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
 buffer = `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
JimbruOffical.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
break
case perf+'xxxnaruto':
case perf+'xxxminato':
case perf+'xxxboruto':
case perf+'xxxhinata':
case perf+'xxxsasuke':
case perf+'xxxsakura':
case perf+'xxxkaneki':
case perf+'xxxtoukachan':
case perf+'xxxrize':
case perf+'akira':
case perf+'xxxitori':
case perf+'xxkurumi':
case perf+'xxxmiku':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
JimbruOffical.sendMessage(from, {image:{url:nye}, caption:"Here you go!"}, {quoted:m})
break			
case perf+'xxxanjing':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=anjing`
reply(mess.wait)
JimbruOffical.sendMessage(from, {image:{url:nye}, caption:"Here you go!"}, {quoted:m})
break				
	
	case perf+'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
JimbruOffical.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            break
case perf+'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await JimbruOffical.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'hentai-neko' :
case perf+'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await JimbruOffical.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'hentai-waifu' :
case perf+'nwaifu' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await JimbruOffical.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'gasm':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case perf+'wallneon': case perf+'wallrandom': case perf+'wallcode': case perf+'wallpubg': case perf+'wallml': 	
try{
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
JimbruOffical.sendMessage(from, {image : nyz3, caption:`By ${global.botname}`}, {quoted:m}) 						
} catch (e) {
error("Error!")
}
break
case perf+'smug2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'foxgirl':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case perf+'animenom' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await JimbruOffical.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'waifu3':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'neko2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `.neko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await JimbruOffical.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case perf+'woof':
case perf+'8ball':
case perf+'goose':
case perf+'gecg':
case perf+'feed':
case perf+'avatar':
case perf+'lizard':
case perf+'meow':
case perf+'tickle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animecuddle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case perf+'animeslap':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animepat':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animeneko':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animehug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animekiss':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animewlp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animespank':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'shinobu2':  
 if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await JimbruOffical.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case perf+'megumin2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await JimbruOffical.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case perf+'awoo2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await JimbruOffical.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case perf+'animewall2': case perf+'animewallpaper2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await JimbruOffical.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//JimbruOffical.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break	
case perf+'cry':case perf+'kill':case perf+'hug':case perf+'pat':case perf+'lick':case perf+'kiss':case perf+'bite':case perf+'yeet':case perf+'neko':case perf+'bully':case perf+'bonk':case perf+'wink':case perf+'poke':case perf+'nom':case perf+'slap':case perf+'smile':case perf+'wave':case perf+'awoo':case perf+'blush':case perf+'smug':case perf+'glomp':case perf+'happy':case perf+'dance':case perf+'cringe':case perf+'cuddle':case perf+'highfive':case perf+'shinobu':case perf+'megumin':case perf+'handhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						JimbruOffical.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case perf+'waifu': case perf+'loli':
					   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					JimbruOffical.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case perf+'lyrics': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break	
case perf+'react': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
JimbruOffical.sendMessage(m.chat, reactionMessage)} 
break  	
case perf+'leavegc': case perf+'leavegroup': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
                if (!isCreator) return replay(`${mess.owner}`)
                await JimbruOffical.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break	
case perf+'bcgc': case perf+'bcgroup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await JimbruOffical.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube',
url: `${global.website}`
}
}, {
urlButton: {
displayText: 'Script',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Ping',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}
}]
let txt = `*「 ${global.ownername} Broadcast」*\n\n${text}`
JimbruOffical.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break	
case perf+'bc': case perf+'broadcast': case perf+'bcall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube',
url: `${global.website}`
}
}, {
urlButton: {
displayText: 'Scrip',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner 😈',
id: 'owner'
}
}]
let txt = `*「 ${global.ownername}'s Broadcast」*\n\n${text}`
JimbruOffical.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
}
replay('Broadcast Success')
}
break
	case perf+'setmenu': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!isCreator) return reply(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE BOT MENU",
                rows: [
                {title: "Image Menu", rowId: `setmenu templateImage`, description: `Tap to change bot menu to Image Menu`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Tap to change bot menu to Gif Menu`},
                {title: "Text Menu", rowId: `setmenu templateMessage`, description: `Tap to change bot menu to Text Menu`},
                {title: "Document Menu", rowId: `setmenu templateDocument`, description: `Tap to change bot menu to Document Menu`}
                ]
                },
                ]
                JimbruOffical.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, JimbruOffical.user.name, `Click Here`, sections, m)
                }
            }
            break
case perf+'command': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: `ʜᴇʏ ${pushname}`,
 description: `ᴘʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴛʜᴇ ᴍᴇɴᴜ\n\n`,
 buttonText: "ᴍᴇɴᴜ",
 footerText: `${global.botname}`,
 listType: "SINGLE_SELECT",
 sections: [{
             "title": "ғᴇᴀᴛᴜʀᴇs ᴏғ ʙᴏᴛ",
             "rows": [
                 {
             "title": "❤︎ ᴏᴛʜᴇʀs ❤︎",
             "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴏᴛʜᴇʀ ғᴇᴀᴛᴜʀᴇs",
             "rowId": `othermenu`
             }
              ]
              },
              {
             "title": "❤︎ ʙᴏᴛ ғᴇᴀᴛᴜʀᴇs ❤︎",
             "rows": [
                 {
             "title": "❤︎ ᴀʟʟ ᴍᴇɴᴜ ❤︎",
             "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴏᴛʜᴇʀ ғᴇᴀᴛᴜʀᴇs",
             "rowId": `allmenu`
                 },
                 {
             "title": "❤︎ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴏᴡɴᴇʀ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `ownermenu`
                     },
                 {
                     "title": "❤︎ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴍᴀɪɴ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `groupmenu`
                     },
                     {
                     "title": "❤︎  ʀᴘɢ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ʀᴘɢ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `rpgmenu`
                     },
                     {
                     "title": "❤︎ ᴍᴀᴋᴇʀ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ʟᴏɢᴏ ᴍᴀᴋɪɴɢ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `indomenu`
                 },
                 {
                     "title": "❤︎ sᴏᴜɴᴅ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ sᴏᴜɴᴅ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": ` soundmenu`
                 },
                 {
                     "title": "❤︎ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴅᴏᴡɴʟᴏᴀᴅ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `downloadmenu`
                 },
                 {
                     "title": "❤︎ sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ ❤︎",
                     "description": "Displays The List Of Sticker Features",
                     "rowId": `indomenu`
                 },
                 {
                     "title": "❤︎ sᴇᴀʀᴄʜ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ sᴇᴀʀᴄʜɪɴɢ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `searchmenu`
                 },
                 {
                     "title": "❤︎ ᴛᴏᴏʟ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴛᴏᴏʟ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `toolmenu`
                 },
                 {
                     "title": "❤︎  ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `randomimagemenu`
                 },
                     {
                         "title": "❤︎ ᴀɴɪᴍᴇ ᴍᴇɴᴜ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ʀᴀɴᴅᴏᴍ ᴀɴɪᴍᴇ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `animemenu`
                     },
                     {
                     "title": "❤︎ ᴀɴɪᴍᴇ sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴀɴɪᴍᴇ sᴛɪᴄᴋᴇʀ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `animestickermenu`
                      },
                 {
                     "title": "❤︎ ɴsғᴡ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ɴsғᴇ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `nsfwmenu`
                      },
                     {
                         "title": "❤︎ ғᴜɴ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ғᴜɴ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `funmenu`
                     },
                     {
                     "title": "❤︎ ɢᴀᴍᴇ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ɢᴀᴍᴇ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `indomenu`
                 },
                     {
                         "title": "❤︎ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴄᴏɴᴠᴇʀᴛ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `convertmenu`
                     },
                     {
                         "title": "❤︎ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴅᴀᴛᴀʙᴀsᴇ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `databasemenu`
                     },
                     {
                     "title": "❤︎ ɪɴᴅᴏ ᴍᴇɴᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ɪɴᴅᴏ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `indomenu`
                 },
                     {
                         "title": "❤︎ ʜᴏʀᴏsᴄᴏᴘᴇ ᴍᴇɴᴜ ❤︎",
                     "description": "❤︎ ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ʜᴏʀᴏsᴄᴏᴘᴇ ❤︎",
                     "rowId": `indohoroscopemenu`
                     }
             ]
         },
         /* 
             {
             "title": "❤︎ ᴄʜᴀᴛ ᴡɪᴛʜ ғᴇʟʟᴏᴡ ᴜsᴇʀs ❤︎",
             "rows": [
                 {
                     "title": "ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ ᴍᴇɴᴜ",
                     "description": "❤︎ ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ ғᴇᴀᴛᴜʀᴇs",
                     "rowId": `❥︎anonymousmenu`
                 }
             ]
         }, 
 */
         {
             "title": "❤︎ ᴄʀᴇᴅɪᴛ ❤︎",
             "rows": [
                 {
                     "title": "❤︎ ᴛʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ᴜsɪɴɢ ᴊɪᴍʙʀᴜ ❤︎",
                     "description": "ᴅɪsᴘʟᴀʏ ᴛʜᴇ ʟɪsᴛ ᴏғ ᴄʀᴇᴅɪᴛ ᴏғ ᴛʜᴇ ʙᴏᴛ",
                     "rowId": `tqtt`
                 }
             ]
         }
     ],
listType: 1
}
}), {})
JimbruOffical.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case perf+'allmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'All Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐎𝐖𝐍𝐄𝐑
│ ❥︎ sᴇʟғ
│ ❥︎ ᴘᴜʙʟɪᴄ
│ ❥︎ ᴀɴᴛɪ ᴛᴀɢ
│ ❥︎ ʙᴀɴ [ ᴀᴅᴅ / ᴅᴇʟ ]
│ ❥︎ ʙᴀɴᴄʜᴀᴛ [ ᴏɴ / ᴏғғ]
│ ❥︎ ᴊᴏɪɴ [ ʟɪɴᴋ ]
│ ❥︎ ʟᴇᴀᴠᴇɢᴄ
│ ❥︎ sᴇᴛʙɪᴏ
│ ❥︎ ʙʟᴏᴄᴋ [ ᴜsᴇʀ ]
│ ❥︎ ᴜɴʙʟᴏᴄᴋ [ ᴜsᴇʀ ]
│ ❥︎ ʙᴄɢʀᴏᴜᴘ [ ᴛᴇxᴛ ]
│ ❥︎ ʙᴄᴀʟʟ [ ᴛᴇxᴛ ]
│ ❥︎ sᴇᴛᴘᴘʙᴏᴛ [ ɪᴍᴀɢᴇ ]
│ ❥︎ ᴇᴛᴇxɪғs
│ ❥︎ ʙʟᴏᴄᴋ [ ᴛᴀɢ / ɴᴜᴍʙᴇʀ]
│ ❥︎ ᴜɴʙʟᴏᴄᴋ [ ᴛᴀɢ /ɴᴜᴍʙᴇʀ]
│ ❥︎ ᴄᴏᴏᴡɴᴇʀ [ ᴀᴅᴅ / ᴅᴇʟ]
╰────────────────❋ཻུ۪۪⸙

╭───➤  𝐆𝐑𝐎𝐔𝐏         
│ ❥︎ ɢʀᴏᴜᴘsᴇᴛᴛɪɴɢs
│ ❥︎ ɢʀᴏᴜᴘʟɪɴᴋ
│ ❥︎ ᴇᴘʜᴇᴍᴇʀᴀʟ [ ᴏᴘᴛɪᴏɴ ]
│ ❥︎ sᴇᴛɢᴄᴘᴘ [ ɪᴍɢ]
│ ❥︎ sᴇᴛɴᴀᴍᴇ [ ᴛᴇxᴛ ]
│ ❥︎ sᴇᴛᴅᴇsᴄs  [ ᴛᴇxᴛ ]
│ ❥︎ ɢʀᴏᴜᴘ
│ ❥︎ ʀᴇᴠᴏᴋᴇ
│ ❥︎ ᴇᴅɪᴛɪɴғᴏ [ ᴏᴘᴛɪᴏɴ ]
│ ❥︎ ᴀᴅᴅ [ ᴜsᴇʀ ]
│ ❥︎ ᴋɪᴄᴋ [ ʀᴇᴘʟʏ / ᴛᴀɢ ]
│ ❥︎ ʜɪᴅᴇᴛᴀɢ [ ᴛᴇxᴛ ]
│ ❥︎ ᴛᴀɢᴀʟʟ [ ᴛᴇxᴛ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋɢᴄ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋᴛɢ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋʏᴛ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋʏᴛᴠɪᴅ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋɪɢ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋғʙ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋᴀʟʟ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪᴠɪʀᴜs [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪᴛᴏxɪᴄ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪᴡᴀᴍᴇ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀᴜᴛᴏʀᴇᴠᴏᴋᴇ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀᴜᴛᴏʀᴇᴘʟʏ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ɴsғᴡ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴍᴜᴛᴇ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴘʀᴏᴍᴏᴛᴇ [ ʀᴇᴘʟʏ / ᴛᴀɢ ]
│ ❥︎ ᴅᴇᴍᴏᴛᴇ [ ʀᴇᴘʟʏ / ᴛᴀɢ ]
│ ❥︎ ʀᴇᴀᴄᴛ [ ʀᴇᴘʟʏ ᴇᴍᴏᴊɪ]
│ ❥︎ ᴠᴏᴛᴇ
│ ❥︎ ᴅᴇᴠᴏᴛᴇ
│ ❥︎ ᴜᴘᴠᴏᴛᴇ
│ ❥︎ ᴄʜᴇᴄᴋᴠᴏᴛᴇ
│ ❥︎ ᴅᴇʟᴠᴏᴛᴇ
│ ❥︎ ᴄʜᴇᴄᴋʀᴇɴᴛ
╰────────────────❋ཻུ۪۪⸙

╭───➤  𝐑𝐏𝐆
│ ❥︎ ʜᴜɴᴛ
│ ❥︎ ᴍɪɴᴇ
│ ❥︎ ғɪsʜ
│ ❥︎ ʜᴇᴀʟ
│ ❥︎ ʙʟᴏᴏᴅ
│ ❥︎ sᴛᴀʙ
│ ❥︎ ʙᴜʏ
│ ❥︎ sᴇʟʟ
│ ❥︎ ᴘʀᴏғɪʟᴇ
│ ❥︎ ɪɴᴠᴇɴᴛᴏʀʏ
│ ❥︎ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐌𝐀𝐊𝐄𝐑
│ ❥︎ ᴄᴀɴᴅʏ
│ ❥︎ ʙʟᴀᴄᴋᴘɪɴᴋɴᴇᴏɴ
│ ❥︎ ᴅᴇᴇᴘsᴇᴀ
│ ❥︎ sᴄɪғɪ
│ ❥︎ ғɪᴄᴛɪᴏɴ
│ ❥︎ ʙᴇʀʀʏ
│ ❥︎ ғʀᴜɪᴛᴊᴜɪᴄᴇ
│ ❥︎ ʙɪsᴄᴜɪᴛ
│ ❥︎ ᴡᴏᴏᴅ
│ ❥︎ ᴄʜᴏᴄᴏʟᴀᴛᴇ
│ ❥︎ ᴍᴀᴛʀɪx
│ ❥︎ ʙʟᴏᴏᴅ
│ ❥︎ ʜᴀʟʟᴏᴡᴇᴇɴ
│ ❥︎ ᴡɪᴄᴋᴇʀ 
│ ❥︎ ᴅᴀʀᴋɢᴏʟᴅ 
│ ❥︎ ғɪʀᴇᴡᴏʀᴋ 
│ ❥︎ sᴋᴇʟᴇᴛᴏɴ 
│ ❥︎ sᴀɴᴅ 
│ ❥︎ ɢʟᴜᴇ 
│ ❥︎ ʟᴇᴀᴠᴇs 
│ ❥︎ ᴍᴀɢᴍᴀ 
│ ❥︎ ʟᴀᴠᴀ 
│ ❥︎ ʀᴏᴄᴋ 
│ ❥︎ ʙʟᴏᴏᴅɢʟᴀs 
│ ❥︎ ᴜɴᴅᴇʀᴡᴀᴛᴇʀ 
│ ❥︎ ᴛᴇxᴛᴍᴀᴋᴇʀ 
│ ❥︎ ʜᴏɴᴇʏ 
│ ❥︎ ɪᴄᴇ 
│ ❥︎ ᴡᴀᴛᴇʀᴄᴏʟᴏᴜʀ
│ ❥︎ ᴍᴜʟᴛɪᴄᴏʟᴏʀ
│ ❥︎ sɴᴏᴡ
│ ❥︎ ʜᴀʀʀʏᴘᴏᴛ
│ ❥︎ ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
│ ❥︎ ʙʀᴏᴋᴇɴɢʟᴀss
│ ❥︎ ᴡᴀᴛᴡʀᴘɪᴘᴇ
│ ❥︎ sᴘᴏᴏᴋʏ
│ ❥︎ ᴄɪʀᴄᴜɪᴛ 
│ ❥︎ ᴍᴇᴛᴀʟʟɪᴄ
│ ❥︎ ᴅᴇᴍᴏɴ
│ ❥︎ sparklechristmas
│ ❥︎ christmas
│ ❥︎ 3dchristmas
│ ❥︎ 3dbox
│ ❥︎ waterdrop
│ ❥︎ lion2
│ ❥︎ papercut
│ ❥︎ transformer
│ ❥︎ neondevil
│ ❥︎ 3davengers
│ ❥︎ 3dstone
│ ❥︎ 3dstone2
│ ❥︎ summertime
│ ❥︎ thunder
│ ❥︎ window
│ ❥︎ graffiti
│ ❥︎ graffitibike
│ ❥︎ pornhub
│ ❥︎ glitch
│ ❥︎ blackpink
│ ❥︎ glitch2
│ ❥︎ glitch3
│ ❥︎ 3dspace
│ ❥︎ lion
│ ❥︎ 3dneon
│ ❥︎ greenneon
│ ❥︎ bokeh
│ ❥︎ holographic
│ ❥︎ bear
│ ❥︎ wolf
│ ❥︎ joker
│ ❥︎ dropwater
│ ❥︎ dropwater2
│ ❥︎ thewall
│ ❥︎ neonlight
│ ❥︎ natural
│ ❥︎ carbon
│ ❥︎ pencil
│ ❥︎ blackpink2
│ ❥︎ neon
│ ❥︎ neonlight2
│ ❥︎ toxic
│ ❥︎ strawberry
│ ❥︎ discovery
│ ❥︎ 1917
│ ❥︎ sci_fi
│ ❥︎ ancient
│ ❥︎ fabric
│ ❥︎ hoorror
│ ❥︎ whitebear
│ ❥︎ juice
│ ❥︎ batman
│ ❥︎ multicolor
│ ❥︎ collwall
│ ❥︎ wonderful
│ ❥︎ cool
│ ❥︎ sketch
│ ❥︎ marvel
│ ❥︎ foggy
│ ❥︎ writing
│ ❥︎ halloweenfire
│ ❥︎ halloween
│ ❥︎ watercolor
│ ❥︎ classic
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃	
│ ❥︎ instagram [url]
│ ❥︎ igtv [url]
│ ❥︎ igstory [username]
│ ❥︎ facebook [url]
│ ❥︎ fbmp3 [url]
│ ❥︎ twitter [url]
│ ❥︎ twittermp3 [url]
│ ❥︎ tiktok [url]
│ ❥︎ tiktokaudio[url]
│ ❥︎ tiktoknowm [url]
│ ❥︎ mediafire [url]
│ ❥︎ ytmp3 [url|quality]
│ ❥︎ ytmp4 [url|quality]
│ ❥︎ getmusic [yt link]
│ ❥︎ getvideo [yt link]
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐒𝐄𝐀𝐑𝐂𝐇
│ ❥︎ play [query]
│ ❥︎ song [query]
│ ❥︎ yts [query]
│ ❥︎ lyrics [query]
│ ❥︎ google [query]
│ ❥︎ playstore [query]
│ ❥︎ gimage [query]
│ ❥︎ pinterest [query]
│ ❥︎ image [query]
│ ❥︎ film [query]
│ ❥︎ wallpaper [query]
│ ❥︎ searchgc [query]
│ ❥︎ happymod [query]
│ ❥︎ servermc
│ ❥︎ mcpedl [query]
│ ❥︎ tvsearch [query]
│ ❥︎ wikimedia [query]
│ ❥︎ ytsearch [query]
│ ❥︎ ringtone [query]
│ ❥︎ webtoon [query]
│ ❥︎ anime [query]
│ ❥︎ animestory [query]
│ ❥︎ manga [query]
│ ❥︎ wattpad [query]
╰────────────────❋ཻུ۪۪⸙ 

╭───➤  𝐂𝐎𝐍𝐕𝐄𝐑𝐓
│ ❥︎ image [reply stick]
│ ❥︎ sticker [reply img|gif]
│ ❥︎ take [reply img|gif|stik]
│ ❥︎ smeme [reply img]
│ ❥︎ emojimix [moji+moji]
│ ❥︎ emoji [emoji]
│ ❥︎ video [reply img]
│ ❥︎ gif [reply stick]
│ ❥︎ url [reply img]
│ ❥︎ voice [reply aud]
│ ❥︎ mp3 [reply vn]
│ ❥︎ audio [reply vid]
│ ❥︎ ebinary [reply txt]
│ ❥︎ dbinary [reply txt]
│ ❥︎ styletext  [ ᴛᴇxᴛ ]
│ ❥︎ volume [reply aud]
│ ❥︎ tempo [reply aud]
│ ❥︎ bass [reply aud]
│ ❥︎ blown [reply aud]
│ ❥︎ deep [reply aud]
│ ❥︎ earrape [reply aud]
│ ❥︎ fast [reply aud]
│ ❥︎ fat [reply aud]
│ ❥︎ nightcore [reply aud]
│ ❥︎ reverse [reply aud]
│ ❥︎ robot [reply aud]
│ ❥︎ slow [reply aud]
│ ❥︎ squirrel [reply aud]
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐆
│ ❥︎ coffee
│ ❥︎ bts
│ ❥︎ woof
│ ❥︎ meow
│ ❥︎ lizard
│ ❥︎ wallneon
│ ❥︎ wallpubg
│ ❥︎ wallml
│ ❥︎ wallrandom
│ ❥︎ wallcode
│ ❥︎ animewall [query]
│ ❥︎ animewall2 [query]
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐀𝐍𝐈𝐌𝐄
│ ❥︎ neko2
│ ❥︎ waifu
│ ❥︎ waifu2
│ ❥︎ awoo2
│ ❥︎ shinobu
│ ❥︎ waifu3
│ ❥︎ foxgirl
│ ❥︎ megumin2
│ ❥︎ loli
│ ❥︎ 8ball
│ ❥︎ animenom
│ ❥︎ goose
│ ❥︎ avatar
│ ❥︎ tickle
│ ❥︎ gecg
│ ❥︎ feed
│ ❥︎ animeslap
│ ❥︎ animespank
│ ❥︎ animepat
│ ❥︎ animeneko
│ ❥︎ animekiss
│ ❥︎ animewlp
│ ❥︎ animecuddle
│ ❥︎ smug2
│ ❥︎ couplepp
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
│ ❥︎ patrick
│ ❥︎ emoji
│ ❥︎ emojimix
│ ❥︎ attp
│ ❥︎ doge
│ ❥︎ lovesticker
│ ❥︎ gura
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐀𝐍𝐈𝐌𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
│ ❥︎ loli
│ ❥︎ bully
│ ❥︎ cuddle
│ ❥︎ cry
│ ❥︎ hug
│ ❥︎ awoo
│ ❥︎ kiss
│ ❥︎ lick
│ ❥︎ pat
│ ❥︎ smug
│ ❥︎ bonk
│ ❥︎ yeet
│ ❥︎ blush
│ ❥︎ smile
│ ❥︎ wave
│ ❥︎ highfive
│ ❥︎ handhold
│ ❥︎ nom
│ ❥︎ glomp
│ ❥︎ bite
│ ❥︎ slap
│ ❥︎ kill
│ ❥︎ happy
│ ❥︎ wink
│ ❥︎ poke
│ ❥︎ dance
│ ❥︎ cringe
│ ❥︎ neko
│ ❥︎ gura
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐍𝐒𝐅𝐖
│ ❥︎ hentaivideo
│ ❥︎ yuri
│ ❥︎ masturbation
│ ❥︎ thighs
│ ❥︎ pussy
│ ❥︎ panties
│ ❥︎ orgy
│ ❥︎ ahegao
│ ❥︎ ass
│ ❥︎ bdsm
│ ❥︎ blowjob
│ ❥︎ cuckold
│ ❥︎ ero
│ ❥︎ gasm
│ ❥︎ cum
│ ❥︎ femdom
│ ❥︎ foot
│ ❥︎ gangbang
│ ❥︎ glasses
│ ❥︎ jahy
│ ❥︎ trap
│ ❥︎ blowjobgif
│ ❥︎ spank
│ ❥︎ hneko
│ ❥︎ nwaifu
╰────────────────❋ཻུ۪۪⸙ 
╭───➤ 𝐅𝐔𝐍
│ ❥︎ how [text
│ ❥︎ when  [ ᴛᴇxᴛ ]
│ ❥︎ where  [ ᴛᴇxᴛ ]
│ ❥︎ is  [ ᴛᴇxᴛ ]
│ ❥︎ what  [ ᴛᴇxᴛ ]
│ ❥︎ can  [ ᴛᴇxᴛ ]
│ ❥︎ rate  [ ᴛᴇxᴛ ]
│ ❥︎ wangy  [ ᴛᴇxᴛ ]
│ ❥︎ beautifulcheck [tag]
│ ❥︎ awesomecheck [tag]
│ ❥︎ prettycheck [tag]
│ ❥︎ lesbiancheck [tag]
│ ❥︎ gaycheck [tag]
│ ❥︎ cutecheck [tag]
│ ❥︎ uglycheck [tag]
│ ❥︎ hornycheck [tag]
│ ❥︎ charactercheck [tag]
│ ❥︎ lovelycheck [tag]
│ ❥︎ couple
│ ❥︎ mysoulmate
│ ❥︎ hot
│ ❥︎ sexy
│ ❥︎ kind
│ ❥︎ idiot
│ ❥︎ handsome
│ ❥︎ beautiful
│ ❥︎ cute
│ ❥︎ pretty
│ ❥︎ lesbian
│ ❥︎ noob
│ ❥︎ bastard
│ ❥︎ foolish
│ ❥︎ nerd
│ ❥︎ asshole
│ ❥︎ gay
│ ❥︎ smart
│ ❥︎ stubble
│ ❥︎ dog
│ ❥︎ horny
│ ❥︎ cunt
│ ❥︎ wibu
│ ❥︎ noobra
│ ❥︎ nibba
│ ❥︎ nibbi
│ ❥︎ comrade
│ ❥︎ mumu
│ ❥︎ rascal
│ ❥︎ scumbag
│ ❥︎ nuts
│ ❥︎ fagot
│ ❥︎ scoundrel
│ ❥︎ ditch
│ ❥︎ dope
│ ❥︎ gucci
│ ❥︎ lit
│ ❥︎ dumbass
│ ❥︎ crackhead
│ ❥︎ mf
│ ❥︎ motherfucker
│ ❥︎ sucker
│ ❥︎ fuckboy
│ ❥︎ playboy
│ ❥︎ fuckgirl
│ ❥︎ playgirl
╰────────────────❋ཻུ۪۪⸙ 
╭───➤ 𝐒𝐎𝐔𝐍𝐃
│ ❥︎ sound1
│ ❥︎ sound2
│ ❥︎ sound3
│ ❥︎ sound4
│ ❥︎ sound5
│ ❥︎ sound6
│ ❥︎ sound7
│ ❥︎ sound8
│ ❥︎ sound9
│ ❥︎ sound10
│ ❥︎ sound11
│ ❥︎ sound12
│ ❥︎ sound13
│ ❥︎ sound14
│ ❥︎ sound15
│ ❥︎ sound16
│ ❥︎ sound17
│ ❥︎ sound18
│ ❥︎ sound19
│ ❥︎ sound20
│ ❥︎ sound21
│ ❥︎ sound22
│ ❥︎ sound23
│ ❥︎ sound24
│ ❥︎ sound25
│ ❥︎ sound26
│ ❥︎ sound27
│ ❥︎ sound28
│ ❥︎ sound29
│ ❥︎ sound30
│ ❥︎ sound31
│ ❥︎ sound32
│ ❥︎ sound33
│ ❥︎ sound34
│ ❥︎ sound35
│ ❥︎ sound36
│ ❥︎ sound37
│ ❥︎ sound38
│ ❥︎ sound39
│ ❥︎ sound40
│ ❥︎ sound41
│ ❥︎ sound42
│ ❥︎ sound43
│ ❥︎ sound44
│ ❥︎ sound45
│ ❥︎ sound46
│ ❥︎ sound47
│ ❥︎ sound48
│ ❥︎ sound49
│ ❥︎ sound50
│ ❥︎ sound51
│ ❥︎ sound52
│ ❥︎ sound53
│ ❥︎ sound54
│ ❥︎ sound55
│ ❥︎ sound56
│ ❥︎ sound57
│ ❥︎ sound58
│ ❥︎ sound59
│ ❥︎ sound60
│ ❥︎ sound61
│ ❥︎ sound62
│ ❥︎ sound63
│ ❥︎ sound64
│ ❥︎ sound65
│ ❥︎ sound66
│ ❥︎ sound67
│ ❥︎ sound68
│ ❥︎ sound69
│ ❥︎ sound70
│ ❥︎ sound71
│ ❥︎ sound72
│ ❥︎ sound73
│ ❥︎ sound74
│ ❥︎ sound75
│ ❥︎ sound76
│ ❥︎ sound77
│ ❥︎ sound78
│ ❥︎ sound79
│ ❥︎ sound80
│ ❥︎ sound81
│ ❥︎ sound82
│ ❥︎ sound83
│ ❥︎ sound84
│ ❥︎ sound85
│ ❥︎ sound86
│ ❥︎ sound87
│ ❥︎ sound88
│ ❥︎ sound89
│ ❥︎ sound90
│ ❥︎ sound91
│ ❥︎ sound92
│ ❥︎ sound93
│ ❥︎ sound94
│ ❥︎ sound95
│ ❥︎ sound96
│ ❥︎ sound97
│ ❥︎ sound98
│ ❥︎ sound99
│ ❥︎ sound100
│ ❥︎ sound101
│ ❥︎ sound102
│ ❥︎ sound103
│ ❥︎ sound104
│ ❥︎ sound105
│ ❥︎ sound106
│ ❥︎ sound107
│ ❥︎ sound108
│ ❥︎ sound109
│ ❥︎ sound110
│ ❥︎ sound111
│ ❥︎ sound112
│ ❥︎ sound113
│ ❥︎ sound114
│ ❥︎ sound115
│ ❥︎ sound116
│ ❥︎ sound117
│ ❥︎ sound118
│ ❥︎ sound119
│ ❥︎ sound120
│ ❥︎ sound121
│ ❥︎ sound122
│ ❥︎ sound123
│ ❥︎ sound124
│ ❥︎ sound125
│ ❥︎ sound126
│ ❥︎ sound127
│ ❥︎ sound128
│ ❥︎ sound129
│ ❥︎ sound130
│ ❥︎ sound131
│ ❥︎ sound132
│ ❥︎ sound133
│ ❥︎ sound134
│ ❥︎ sound135
│ ❥︎ sound136
│ ❥︎ sound137
│ ❥︎ sound138
│ ❥︎ sound139
│ ❥︎ sound140
│ ❥︎ sound141
│ ❥︎ sound142
│ ❥︎ sound143
│ ❥︎ sound144
│ ❥︎ sound145
│ ❥︎ sound146
│ ❥︎ sound147
│ ❥︎ sound148
│ ❥︎ sound149
│ ❥︎ sound150
│ ❥︎ sound151
│ ❥︎ sound152
│ ❥︎ sound153
│ ❥︎ sound154
│ ❥︎ sound155
│ ❥︎ sound156
│ ❥︎ sound157
│ ❥︎ sound158
│ ❥︎ sound159
│ ❥︎ sound160
│ ❥︎ sound161
╰────────────────❋ཻུ۪۪⸙ 

╭───➤  𝐆𝐀𝐌𝐄 
│ ❥︎ truth
│ ❥︎ dare
│ ❥︎ tictactoe
│ ❥︎ delttt
│ ❥︎ guess [ ᴏᴘᴛɪᴏɴ ]
│ ❥︎ math [mode]
│ ❥︎ suitpvp [tag]
╰────────────────❋ཻུ۪۪⸙ 

╭───➤  𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓
│ ❥︎ anonymous
│ ❥︎ start
│ ❥︎ next
│ ❥︎ leave
╰────────────────❋ཻུ۪۪⸙ 

╭───➤ 𝐓𝐎𝐎𝐋
│ ❥︎ translate  [ ᴛᴇxᴛ ]
│ ❥︎ fliptext  [ ᴛᴇxᴛ ]
│ ❥︎ toletter [number]
╰────────────────❋ཻུ۪۪⸙ 

╭───➤  𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄
│ ❥︎ setcmd
│ ❥︎ listcmd
│ ❥︎ delcmd
│ ❥︎ lockcmd
│ ❥︎ addmsg
│ ❥︎ listmsg
│ ❥︎ getmsg
│ ❥︎ delmsg
╰────────────────❋ཻུ۪۪⸙ 

╭───➤  𝐈𝐍𝐃𝐎
│ ❥︎ darkjoke
│ ❥︎ quotes
│ ❥︎ animequotes
│ ❥︎ friendshipshortstory
│ ❥︎ loveshortstory
│ ❥︎ sacrificeshortstory
│ ❥︎ disturbingshortstory
│ ❥︎ amino
│ ❥︎ wiki
│ ❥︎ covidindo
│ ❥︎ earthquake
│ ❥︎ tvschedule
╰────────────────❋ཻུ۪۪⸙ 
 
╭───➤ 𝐎𝐓𝐇𝐄𝐑
│ ❥︎ ${prefix}afk
│ ❥︎ ${prefix}chatinfo
│ ❥︎ ${prefix}alive
│ ❥︎ ${prefix}script
│ ❥︎ ${prefix}ping
│ ❥︎ ${prefix}owner
│ ❥︎ ${prefix}menu
│ ❥︎ ${prefix}delete
│ ❥︎ ${prefix}chatinfo
│ ❥︎ ${prefix}quoted
│ ❥︎ ${prefix}listpc
│ ❥︎ ${prefix}listgc
│ ❥︎ ${prefix}donate
│ ❥︎ ${prefix}request
│ ❥︎ ${prefix}report [bug]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "Script","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case perf+'ownermenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Owner Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐎𝐖𝐍𝐄𝐑
│ ❥︎ sᴇʟғ
│ ❥︎ ᴘᴜʙʟɪᴄ
│ ❥︎ ᴀɴᴛɪ ᴛᴀɢ
│ ❥︎ ʙᴀɴ [ ᴀᴅᴅ / ᴅᴇʟ ]
│ ❥︎ ʙᴀɴᴄʜᴀᴛ [ ᴏɴ / ᴏғғ]
│ ❥︎ ᴊᴏɪɴ [ ʟɪɴᴋ ]
│ ❥︎ ʟᴇᴀᴠᴇɢᴄ
│ ❥︎ sᴇᴛʙɪᴏ
│ ❥︎ ʙʟᴏᴄᴋ [ ᴜsᴇʀ ]
│ ❥︎ ᴜɴʙʟᴏᴄᴋ [ ᴜsᴇʀ ]
│ ❥︎ ʙᴄɢʀᴏᴜᴘ [ ᴛᴇxᴛ ]
│ ❥︎ ʙᴄᴀʟʟ [ ᴛᴇxᴛ ]
│ ❥︎ sᴇᴛᴘᴘʙᴏᴛ [ ɪᴍᴀɢᴇ ]
│ ❥︎ ᴇᴛᴇxɪғs
│ ❥︎ ʙʟᴏᴄᴋ [ ᴛᴀɢ / ɴᴜᴍʙᴇʀ]
│ ❥︎ ᴜɴʙʟᴏᴄᴋ [ ᴛᴀɢ /ɴᴜᴍʙᴇʀ]
│ ❥︎ ᴄᴏᴏᴡɴᴇʀ [ ᴀᴅᴅ / ᴅᴇʟ]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "Script","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case perf+'groupmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Group Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐆𝐑𝐎𝐔𝐏         
│ ❥︎ ɢʀᴏᴜᴘsᴇᴛᴛɪɴɢs
│ ❥︎ ɢʀᴏᴜᴘʟɪɴᴋ
│ ❥︎ ᴇᴘʜᴇᴍᴇʀᴀʟ [ ᴏᴘᴛɪᴏɴ ]
│ ❥︎ sᴇᴛɢᴄᴘᴘ [ ɪᴍɢ]
│ ❥︎ sᴇᴛɴᴀᴍᴇ [ ᴛᴇxᴛ ]
│ ❥︎ sᴇᴛᴅᴇsᴄs  [ ᴛᴇxᴛ ]
│ ❥︎ ɢʀᴏᴜᴘ
│ ❥︎ ʀᴇᴠᴏᴋᴇ
│ ❥︎ ᴇᴅɪᴛɪɴғᴏ [ ᴏᴘᴛɪᴏɴ ]
│ ❥︎ ᴀᴅᴅ [ ᴜsᴇʀ ]
│ ❥︎ ᴋɪᴄᴋ [ ʀᴇᴘʟʏ / ᴛᴀɢ ]
│ ❥︎ ʜɪᴅᴇᴛᴀɢ [ ᴛᴇxᴛ ]
│ ❥︎ ᴛᴀɢᴀʟʟ [ ᴛᴇxᴛ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋɢᴄ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋᴛɢ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋʏᴛ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋʏᴛᴠɪᴅ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋɪɢ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋғʙ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪʟɪɴᴋᴀʟʟ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪᴠɪʀᴜs [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪᴛᴏxɪᴄ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀɴᴛɪᴡᴀᴍᴇ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀᴜᴛᴏʀᴇᴠᴏᴋᴇ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴀᴜᴛᴏʀᴇᴘʟʏ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ɴsғᴡ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴍᴜᴛᴇ [ ᴏɴ / ᴏғғ ]
│ ❥︎ ᴘʀᴏᴍᴏᴛᴇ [ ʀᴇᴘʟʏ / ᴛᴀɢ ]
│ ❥︎ ᴅᴇᴍᴏᴛᴇ [ ʀᴇᴘʟʏ / ᴛᴀɢ ]
│ ❥︎ ʀᴇᴀᴄᴛ [ ʀᴇᴘʟʏ ᴇᴍᴏᴊɪ]
│ ❥︎ ᴠᴏᴛᴇ
│ ❥︎ ᴅᴇᴠᴏᴛᴇ
│ ❥︎ ᴜᴘᴠᴏᴛᴇ
│ ❥︎ ᴄʜᴇᴄᴋᴠᴏᴛᴇ
│ ❥︎ ᴅᴇʟᴠᴏᴛᴇ
│ ❥︎ ᴄʜᴇᴄᴋʀᴇɴᴛ
╰────────────────❋ཻུ۪۪⸙` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'rpgmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Rpg Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐑𝐏𝐆
│ ❥︎ ʜᴜɴᴛ
│ ❥︎ ᴍɪɴᴇ
│ ❥︎ ғɪsʜ
│ ❥︎ ʜᴇᴀʟ
│ ❥︎ ʙʟᴏᴏᴅ
│ ❥︎ sᴛᴀʙ
│ ❥︎ ʙᴜʏ
│ ❥︎ sᴇʟʟ
│ ❥︎ ᴘʀᴏғɪʟᴇ
│ ❥︎ ɪɴᴠᴇɴᴛᴏʀʏ
│ ❥︎ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'makermenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Maker Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐌𝐀𝐊𝐄𝐑
│ ❥︎ ᴄᴀɴᴅʏ
│ ❥︎ ʙʟᴀᴄᴋᴘɪɴᴋɴᴇᴏɴ
│ ❥︎ ᴅᴇᴇᴘsᴇᴀ
│ ❥︎ sᴄɪғɪ
│ ❥︎ ғɪᴄᴛɪᴏɴ
│ ❥︎ ʙᴇʀʀʏ
│ ❥︎ ғʀᴜɪᴛᴊᴜɪᴄᴇ
│ ❥︎ ʙɪsᴄᴜɪᴛ
│ ❥︎ ᴡᴏᴏᴅ
│ ❥︎ ᴄʜᴏᴄᴏʟᴀᴛᴇ
│ ❥︎ ᴍᴀᴛʀɪx
│ ❥︎ ʙʟᴏᴏᴅ
│ ❥︎ ʜᴀʟʟᴏᴡᴇᴇɴ
│ ❥︎ ᴡɪᴄᴋᴇʀ 
│ ❥︎ ᴅᴀʀᴋɢᴏʟᴅ 
│ ❥︎ ғɪʀᴇᴡᴏʀᴋ 
│ ❥︎ sᴋᴇʟᴇᴛᴏɴ 
│ ❥︎ sᴀɴᴅ 
│ ❥︎ ɢʟᴜᴇ 
│ ❥︎ ʟᴇᴀᴠᴇs 
│ ❥︎ ᴍᴀɢᴍᴀ 
│ ❥︎ ʟᴀᴠᴀ 
│ ❥︎ ʀᴏᴄᴋ 
│ ❥︎ ʙʟᴏᴏᴅɢʟᴀs 
│ ❥︎ ᴜɴᴅᴇʀᴡᴀᴛᴇʀ 
│ ❥︎ ᴛᴇxᴛᴍᴀᴋᴇʀ 
│ ❥︎ ʜᴏɴᴇʏ 
│ ❥︎ ɪᴄᴇ 
│ ❥︎ ᴡᴀᴛᴇʀᴄᴏʟᴏᴜʀ
│ ❥︎ ᴍᴜʟᴛɪᴄᴏʟᴏʀ
│ ❥︎ sɴᴏᴡ
│ ❥︎ ʜᴀʀʀʏᴘᴏᴛ
│ ❥︎ ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
│ ❥︎ ʙʀᴏᴋᴇɴɢʟᴀss
│ ❥︎ ᴡᴀᴛᴡʀᴘɪᴘᴇ
│ ❥︎ sᴘᴏᴏᴋʏ
│ ❥︎ ᴄɪʀᴄᴜɪᴛ 
│ ❥︎ ᴍᴇᴛᴀʟʟɪᴄ
│ ❥︎ ᴅᴇᴍᴏɴ
│ ❥︎ sparklechristmas
│ ❥︎ christmas
│ ❥︎ 3dchristmas
│ ❥︎ 3dbox
│ ❥︎ waterdrop
│ ❥︎ lion2
│ ❥︎ papercut
│ ❥︎ transformer
│ ❥︎ neondevil
│ ❥︎ 3davengers
│ ❥︎ 3dstone
│ ❥︎ 3dstone2
│ ❥︎ summertime
│ ❥︎ thunder
│ ❥︎ window
│ ❥︎ graffiti
│ ❥︎ graffitibike
│ ❥︎ pornhub
│ ❥︎ glitch
│ ❥︎ blackpink
│ ❥︎ glitch2
│ ❥︎ glitch3
│ ❥︎ 3dspace
│ ❥︎ lion
│ ❥︎ 3dneon
│ ❥︎ greenneon
│ ❥︎ bokeh
│ ❥︎ holographic
│ ❥︎ bear
│ ❥︎ wolf
│ ❥︎ joker
│ ❥︎ dropwater
│ ❥︎ dropwater2
│ ❥︎ thewall
│ ❥︎ neonlight
│ ❥︎ natural
│ ❥︎ carbon
│ ❥︎ pencil
│ ❥︎ blackpink2
│ ❥︎ neon
│ ❥︎ neonlight2
│ ❥︎ toxic
│ ❥︎ strawberry
│ ❥︎ discovery
│ ❥︎ 1917
│ ❥︎ sci_fi
│ ❥︎ ancient
│ ❥︎ fabric
│ ❥︎ hoorror
│ ❥︎ whitebear
│ ❥︎ juice
│ ❥︎ batman
│ ❥︎ multicolor
│ ❥︎ collwall
│ ❥︎ wonderful
│ ❥︎ cool
│ ❥︎ sketch
│ ❥︎ marvel
│ ❥︎ foggy
│ ❥︎ writing
│ ❥︎ halloweenfire
│ ❥︎ halloween
│ ❥︎ watercolor
│ ❥︎ classic
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${website}`}},{"urlButton": {"displayText": "Script","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case perf+'downloadmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Download Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃	
│ ❥︎ instagram [url]
│ ❥︎ igtv [url]
│ ❥︎ igstory [username]
│ ❥︎ facebook [url]
│ ❥︎ fbmp3 [url]
│ ❥︎ twitter [url]
│ ❥︎ twittermp3 [url]
│ ❥︎ tiktok [url]
│ ❥︎ tiktokaudio[url]
│ ❥︎ tiktoknowm [url]
│ ❥︎ mediafire [url]
│ ❥︎ ytmp3 [url|quality]
│ ❥︎ ytmp4 [url|quality]
│ ❥︎ getmusic [yt link]
│ ❥︎ getvideo [yt link]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${website}`}},{"urlButton": {"displayText": "Script","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'searchmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Search Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐒𝐄𝐀𝐑𝐂𝐇
│ ❥︎ play [query]
│ ❥︎ song [query]
│ ❥︎ yts [query]
│ ❥︎ lyrics [query]
│ ❥︎ google [query]
│ ❥︎ playstore [query]
│ ❥︎ gimage [query]
│ ❥︎ pinterest [query]
│ ❥︎ image [query]
│ ❥︎ film [query]
│ ❥︎ wallpaper [query]
│ ❥︎ searchgc [query]
│ ❥︎ happymod [query]
│ ❥︎ servermc
│ ❥︎ mcpedl [query]
│ ❥︎ tvsearch [query]
│ ❥︎ wikimedia [query]
│ ❥︎ ytsearch [query]
│ ❥︎ ringtone [query]
│ ❥︎ webtoon [query]
│ ❥︎ anime [query]
│ ❥︎ animestory [query]
│ ❥︎ manga [query]
│ ❥︎ wattpad [query]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'convertmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Convert Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐂𝐎𝐍𝐕𝐄𝐑𝐓
│ ❥︎ image [reply stick]
│ ❥︎ sticker [reply img|gif]
│ ❥︎ take [reply img|gif|stik]
│ ❥︎ smeme [reply img]
│ ❥︎ emojimix [moji+moji]
│ ❥︎ emoji [emoji]
│ ❥︎ video [reply img]
│ ❥︎ gif [reply stick]
│ ❥︎ url [reply img]
│ ❥︎ voice [reply aud]
│ ❥︎ mp3 [reply vn]
│ ❥︎ audio [reply vid]
│ ❥︎ ebinary [reply txt]
│ ❥︎ dbinary [reply txt]
│ ❥︎ styletext  [ ᴛᴇxᴛ ]
│ ❥︎ volume [reply aud]
│ ❥︎ tempo [reply aud]
│ ❥︎ bass [reply aud]
│ ❥︎ blown [reply aud]
│ ❥︎ deep [reply aud]
│ ❥︎ earrape [reply aud]
│ ❥︎ fast [reply aud]
│ ❥︎ fat [reply aud]
│ ❥︎ nightcore [reply aud]
│ ❥︎ reverse [reply aud]
│ ❥︎ robot [reply aud]
│ ❥︎ slow [reply aud]
│ ❥︎ squirrel [reply aud]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'randomimagemenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Random Image Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐆
│ ❥︎ coffee
│ ❥︎ bts
│ ❥︎ woof
│ ❥︎ meow
│ ❥︎ lizard
│ ❥︎ wallneon
│ ❥︎ wallpubg
│ ❥︎ wallml
│ ❥︎ wallrandom
│ ❥︎ wallcode
│ ❥︎ animewall [query]
│ ❥︎ animewall2 [query]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'animemenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anime Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐀𝐍𝐈𝐌𝐄
│ ❥︎ neko2
│ ❥︎ waifu
│ ❥︎ waifu2
│ ❥︎ awoo2
│ ❥︎ shinobu
│ ❥︎ waifu3
│ ❥︎ foxgirl
│ ❥︎ megumin2
│ ❥︎ loli
│ ❥︎ 8ball
│ ❥︎ animenom
│ ❥︎ goose
│ ❥︎ avatar
│ ❥︎ tickle
│ ❥︎ gecg
│ ❥︎ feed
│ ❥︎ animeslap
│ ❥︎ animespank
│ ❥︎ animepat
│ ❥︎ animeneko
│ ❥︎ animekiss
│ ❥︎ animewlp
│ ❥︎ animecuddle
│ ❥︎ smug2
│ ❥︎ couplepp
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'stickermenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Sticker Menu')
await JimbruOffical.send5ButImg(from, `╔═══════✪「 STICKER 」	
│ ❥︎patrick
│ ❥︎emoji
│ ❥︎emojimix
│ ❥︎attp
│ ❥︎doge
│ ❥︎lovesticker
│ ❥︎gura
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'animestickermenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anime Sticker Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
│ ❥︎ patrick
│ ❥︎ emoji
│ ❥︎ emojimix
│ ❥︎ attp
│ ❥︎ doge
│ ❥︎ lovesticker
│ ❥︎ gura
╭───➤ 𝐀𝐍𝐈𝐌𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
│ ❥︎ loli
│ ❥︎ bully
│ ❥︎ cuddle
│ ❥︎ cry
│ ❥︎ hug
│ ❥︎ awoo
│ ❥︎ kiss
│ ❥︎ lick
│ ❥︎ pat
│ ❥︎ smug
│ ❥︎ bonk
│ ❥︎ yeet
│ ❥︎ blush
│ ❥︎ smile
│ ❥︎ wave
│ ❥︎ highfive
│ ❥︎ handhold
│ ❥︎ nom
│ ❥︎ glomp
│ ❥︎ bite
│ ❥︎ slap
│ ❥︎ kill
│ ❥︎ happy
│ ❥︎ wink
│ ❥︎ poke
│ ❥︎ dance
│ ❥︎ cringe
│ ❥︎ neko
│ ❥︎ gura
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'nsfwmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Nsfw Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐍𝐒𝐅𝐖
│ ❥︎ hentaivideo
│ ❥︎ yuri
│ ❥︎ masturbation
│ ❥︎ thighs
│ ❥︎ pussy
│ ❥︎ panties
│ ❥︎ orgy
│ ❥︎ ahegao
│ ❥︎ ass
│ ❥︎ bdsm
│ ❥︎ blowjob
│ ❥︎ cuckold
│ ❥︎ ero
│ ❥︎ gasm
│ ❥︎ cum
│ ❥︎ femdom
│ ❥︎ foot
│ ❥︎ gangbang
│ ❥︎ glasses
│ ❥︎ jahy
│ ❥︎ trap
│ ❥︎ blowjobgif
│ ❥︎ spank
│ ❥︎ hneko
│ ❥︎ nwaifu
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'funmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Fun Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐅𝐔𝐍
│ ❥︎ how [text
│ ❥︎ when  [ ᴛᴇxᴛ ]
│ ❥︎ where  [ ᴛᴇxᴛ ]
│ ❥︎ is  [ ᴛᴇxᴛ ]
│ ❥︎ what  [ ᴛᴇxᴛ ]
│ ❥︎ can  [ ᴛᴇxᴛ ]
│ ❥︎ rate  [ ᴛᴇxᴛ ]
│ ❥︎ wangy  [ ᴛᴇxᴛ ]
│ ❥︎ beautifulcheck [tag]
│ ❥︎ awesomecheck [tag]
│ ❥︎ prettycheck [tag]
│ ❥︎ lesbiancheck [tag]
│ ❥︎ gaycheck [tag]
│ ❥︎ cutecheck [tag]
│ ❥︎ uglycheck [tag]
│ ❥︎ hornycheck [tag]
│ ❥︎ charactercheck [tag]
│ ❥︎ lovelycheck [tag]
│ ❥︎ couple
│ ❥︎ mysoulmate
│ ❥︎ hot
│ ❥︎ sexy
│ ❥︎ kind
│ ❥︎ idiot
│ ❥︎ handsome
│ ❥︎ beautiful
│ ❥︎ cute
│ ❥︎ pretty
│ ❥︎ lesbian
│ ❥︎ noob
│ ❥︎ bastard
│ ❥︎ foolish
│ ❥︎ nerd
│ ❥︎ asshole
│ ❥︎ gay
│ ❥︎ smart
│ ❥︎ stubble
│ ❥︎ dog
│ ❥︎ horny
│ ❥︎ cunt
│ ❥︎ wibu
│ ❥︎ noobra
│ ❥︎ nibba
│ ❥︎ nibbi
│ ❥︎ comrade
│ ❥︎ mumu
│ ❥︎ rascal
│ ❥︎ scumbag
│ ❥︎ nuts
│ ❥︎ fagot
│ ❥︎ scoundrel
│ ❥︎ ditch
│ ❥︎ dope
│ ❥︎ gucci
│ ❥︎ lit
│ ❥︎ dumbass
│ ❥︎ crackhead
│ ❥︎ mf
│ ❥︎ motherfucker
│ ❥︎ sucker
│ ❥︎ fuckboy
│ ❥︎ playboy
│ ❥︎ fuckgirl
│ ❥︎ playgirl
╰────────────────❋ཻུ۪۪⸙  ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+' soundmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+' sound Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐒𝐎𝐔𝐍𝐃	
│ ❥︎ sound1
│ ❥︎ sound2
│ ❥︎ sound3
│ ❥︎ sound4
│ ❥︎ sound5
│ ❥︎ sound6
│ ❥︎ sound7
│ ❥︎ sound8
│ ❥︎ sound9
│ ❥︎ sound10
│ ❥︎ sound11
│ ❥︎ sound12
│ ❥︎ sound13
│ ❥︎ sound14
│ ❥︎ sound15
│ ❥︎ sound16
│ ❥︎ sound17
│ ❥︎ sound18
│ ❥︎ sound19
│ ❥︎ sound20
│ ❥︎ sound21
│ ❥︎ sound22
│ ❥︎ sound23
│ ❥︎ sound24
│ ❥︎ sound25
│ ❥︎ sound26
│ ❥︎ sound27
│ ❥︎ sound28
│ ❥︎ sound29
│ ❥︎ sound30
│ ❥︎ sound31
│ ❥︎ sound32
│ ❥︎ sound33
│ ❥︎ sound34
│ ❥︎ sound35
│ ❥︎ sound36
│ ❥︎ sound37
│ ❥︎ sound38
│ ❥︎ sound39
│ ❥︎ sound40
│ ❥︎ sound41
│ ❥︎ sound42
│ ❥︎ sound43
│ ❥︎ sound44
│ ❥︎ sound45
│ ❥︎ sound46
│ ❥︎ sound47
│ ❥︎ sound48
│ ❥︎ sound49
│ ❥︎ sound50
│ ❥︎ sound51
│ ❥︎ sound52
│ ❥︎ sound53
│ ❥︎ sound54
│ ❥︎ sound55
│ ❥︎ sound56
│ ❥︎ sound57
│ ❥︎ sound58
│ ❥︎ sound59
│ ❥︎ sound60
│ ❥︎ sound61
│ ❥︎ sound62
│ ❥︎ sound63
│ ❥︎ sound64
│ ❥︎ sound65
│ ❥︎ sound66
│ ❥︎ sound67
│ ❥︎ sound68
│ ❥︎ sound69
│ ❥︎ sound70
│ ❥︎ sound71
│ ❥︎ sound72
│ ❥︎ sound73
│ ❥︎ sound74
│ ❥︎ sound75
│ ❥︎ sound76
│ ❥︎ sound77
│ ❥︎ sound78
│ ❥︎ sound79
│ ❥︎ sound80
│ ❥︎ sound81
│ ❥︎ sound82
│ ❥︎ sound83
│ ❥︎ sound84
│ ❥︎ sound85
│ ❥︎ sound86
│ ❥︎ sound87
│ ❥︎ sound88
│ ❥︎ sound89
│ ❥︎ sound90
│ ❥︎ sound91
│ ❥︎ sound92
│ ❥︎ sound93
│ ❥︎ sound94
│ ❥︎ sound95
│ ❥︎ sound96
│ ❥︎ sound97
│ ❥︎ sound98
│ ❥︎ sound99
│ ❥︎ sound100
│ ❥︎ sound101
│ ❥︎ sound102
│ ❥︎ sound103
│ ❥︎ sound104
│ ❥︎ sound105
│ ❥︎ sound106
│ ❥︎ sound107
│ ❥︎ sound108
│ ❥︎ sound109
│ ❥︎ sound110
│ ❥︎ sound111
│ ❥︎ sound112
│ ❥︎ sound113
│ ❥︎ sound114
│ ❥︎ sound115
│ ❥︎ sound116
│ ❥︎ sound117
│ ❥︎ sound118
│ ❥︎ sound119
│ ❥︎ sound120
│ ❥︎ sound121
│ ❥︎ sound122
│ ❥︎ sound123
│ ❥︎ sound124
│ ❥︎ sound125
│ ❥︎ sound126
│ ❥︎ sound127
│ ❥︎ sound128
│ ❥︎ sound129
│ ❥︎ sound130
│ ❥︎ sound131
│ ❥︎ sound132
│ ❥︎ sound133
│ ❥︎ sound134
│ ❥︎ sound135
│ ❥︎ sound136
│ ❥︎ sound137
│ ❥︎ sound138
│ ❥︎ sound139
│ ❥︎ sound140
│ ❥︎ sound141
│ ❥︎ sound142
│ ❥︎ sound143
│ ❥︎ sound144
│ ❥︎ sound145
│ ❥︎ sound146
│ ❥︎ sound147
│ ❥︎ sound148
│ ❥︎ sound149
│ ❥︎ sound150
│ ❥︎ sound151
│ ❥︎ sound152
│ ❥︎ sound153
│ ❥︎ sound154
│ ❥︎ sound155
│ ❥︎ sound156
│ ❥︎ sound157
│ ❥︎ sound158
│ ❥︎ sound159
│ ❥︎ sound160
│ ❥︎ sound161
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'gamemenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Game Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐆𝐀𝐌𝐄 	
│ ❥︎truth
│ ❥︎dare
│ ❥︎tictactoe
│ ❥︎delttt
│ ❥︎guess [ ᴏᴘᴛɪᴏɴ ]
│ ❥︎math [mode]
│ ❥︎suitpvp [tag]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'anonymousmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anonymous Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓	
│ ❥︎ anonymous
│ ❥︎ start
│ ❥︎ next
│ ❥︎ leave
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'toolmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Tool Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐓𝐎𝐎𝐋	
│ ❥︎ translate  [ ᴛᴇxᴛ ]
│ ❥︎ fliptext  [ ᴛᴇxᴛ ]
│ ❥︎ toletter [number]
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'databasemenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Database Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄	
│ ❥︎setcmd
│ ❥︎listcmd
│ ❥︎delcmd
│ ❥︎lockcmd
│ ❥︎addmsg
│ ❥︎listmsg
│ ❥︎getmsg
│ ❥︎delmsg
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'islamicmenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Islamic Menu')
await JimbruOffical.send5ButImg(from, `╔═══✪「 ISLAMIC 」	
│ ❥︎ juzamma
╰────────────────❋ཻུ۪۪⸙ ` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'indomenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Indo Menu')
await JimbruOffical.send5ButImg(from, `╭───➤  𝐈𝐍𝐃𝐎
│ ❥︎ darkjoke
│ ❥︎ quotes
│ ❥︎ animequotes
│ ❥︎ friendshipshortstory
│ ❥︎ loveshortstory
│ ❥︎ sacrificeshortstory
│ ❥︎ disturbingshortstory
│ ❥︎ amino
│ ❥︎ wiki
│ ❥︎ covidindo
│ ❥︎ earthquake
│ ❥︎ tvschedule
╰────────────────❋ཻུ۪۪` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'othermenu':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Other Menu')
await JimbruOffical.send5ButImg(from, `╭───➤ 𝐎𝐓𝐇𝐄𝐑
│ ❥︎ ${prefix}afk
│ ❥︎ ${prefix}chatinfo
│ ❥︎ ${prefix}alive
│ ❥︎ ${prefix}script
│ ❥︎ ${prefix}ping
│ ❥︎ ${prefix}owner
│ ❥︎ ${prefix}menu
│ ❥︎ ${prefix}delete
│ ❥︎ ${prefix}chatinfo
│ ❥︎ ${prefix}quoted
│ ❥︎ ${prefix}listpc
│ ❥︎ ${prefix}listgc
│ ❥︎ ${prefix}donate
│ ❥︎ ${prefix}request
│ ❥︎ ${prefix}report [bug]
╰────────────────❋ཻུ۪۪⸙` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YOUTUBE","url": `${website}`}},{"urlButton": {"displayText": "SCRIPT","url": `${botscript}`}},{"quickReplyButton": {"displayText": "DONATE","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case perf+'tqtt': 
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
reply(`╭➤ ᴍᴀᴅᴇ ᴡɪᴛʜ ʟᴏᴠᴇ 🥰   
│❖  ᴊɪᴍʙʀᴏᴏᴛᴀɴ ᴏғғɪᴄᴀʟ ❖
╰────────────────❋ཻུ۪۪⸙
╭➤
│ ᴛʜᴀɴᴋs ᴛᴏ ʟᴏʀᴅ . ᴍʏ ғᴀᴍɪʟʏ.
│ ᴀɴᴅ ᴀʟʟ ғʀɪᴇɴᴅs ᴡʜᴏ ʜᴇʟᴘᴇᴅ
│ ᴀssᴇᴍʙʟᴇ ᴛʜɪs sᴄʀɪᴘᴛ 🤗
╰────────────────❋ཻུ۪۪⸙ 
  𝐗𝐗𝐈𝐗 . 𝐗𝐈𝐈 . 𝐌𝐂𝐌𝐗𝐂𝐕𝐈𝐈𝐈
   ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
╭◪ ᴄᴏᴅᴇᴅ ʙʏ ᴍɪᴋʜᴀɪᴇʟ
│         ᴠᴇʀsɪᴏɴ 5.0
╰────────────────❋ཻུ۪۪⸙`)
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
JimbruOffical.sendMessage(from, {image:err4r, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await JimbruOffical.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
}
}
//anonymous msg forwarder
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
 this.anonymous = this.anonymous ? this.anonymous : {}
 let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
 if (room) {
     if (/^.*(next|leave|start)/.test(m.text)) return
     if (['.next', '.leave', '.stop', '.start', 'Find Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
     let other = [room.a, room.b].find(user => user !== m.sender)
     m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
         contextInfo: {
             ...m.msg.contextInfo,
             forwardingScore: 0,
             isForwarded: true,
             participant: other
         }
     } : {})
 }
 return !0
}

if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return JimbruOffical.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}
//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./Media/theme/yourtag.webp')
JimbruOffical.sendReadReceipt(m.chat, m.sender, [m.key.id])
JimbruOffical.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./Media/theme/yourtag.webp')
JimbruOffical.sendReadReceipt(m.chat, m.sender, [m.key.id])
JimbruOffical.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
if (isCmd && budy.toLowercase perf+) != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowercase perf+) in msgs)) return
JimbruOffical.copyNForward(m.chat, msgs[budy.toLowercase perf+)], true)
}
}
} catch (err) {
JimbruOffical.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update '${__filename}'`))
delete require.cache[file]
require(file)
})
