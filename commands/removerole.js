const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let rmember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!rmember) return message.reply("Couldn't find that user ");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role");
    let gRole = message.guild.roles.find(`name`,role);
    if(!gRole) return message.reply("Couldn't find that role");

    if(rmember.roles.has(gRole.id)); 
    await(rmember.removeRole(gRole.id));

    // try
    // {
    //     await rmember.send(`Role ${gRole.name} has been removed`);
    // }
    // catch(e)
    {       
         message.channel.send(`Role ${gRole.name} has been removed . `);
    }
}

module.exports.help = {
    name : "removerole"
}