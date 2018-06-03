const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let rmember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!rmember) return message.reply("Couldn't find that user ");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role");
    let gRole = message.guild.roles.find(`name`,role);
    if(!gRole) return message.reply("Couldn't find that role");

    if(rmember.roles.has(gRole.id)) return message.channel.send("They have that Role.");
    await(rmember.addRole(gRole.id));

    // try
    // {
    //     await rmember.send(`Congrats, you have been given the role ${gRole.name}`);
    // }
    // catch(e)
    {       
         message.channel.send(`Congrats, you have been given the role ${gRole.name} .`);
    }
}

module.exports.help = {
    name : "addrole"
}