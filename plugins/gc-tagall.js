let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*➽𝑴𝒆𝒏𝒔𝒂𝒋𝒆:* ${pesan}`
  let teks = `*⺀☁️𝐁𝐎𝐓𝐒 𝐋𝐎𝐒 𝐈𝐍𝐕𝐎𝐂𝐎☁️⺀*\n\n❏ ${oi}\n\n❏ *➽𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝒈𝒆𝒏𝒆𝒓𝒂𝒍:*\n`
  for (let mem of participants) {
  teks += `┣➵ᐕ @${mem.id.split('@')[0]}\n`}
  teks += `└⇻⇻☁️𝐍𝐢𝐯𝐯𝐢 𝐌𝐨☁️`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler