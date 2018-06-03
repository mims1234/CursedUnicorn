const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {

    // //message.channel.send(`line 1 \nline 2`);
    // let boticon = bot.user.avatarURL;
    // let QuakeHelpEmbed = new Discord.RichEmbed()
    // .setDescription("Help")
    // .setColor("#f20202")
    // .addField("Prefix :","x")
    // .addField("Commands :",`
    // `);

    //return message.channel.send(QuakeHelpEmbed);

    //Commands :
    //1.members
    //2.quake
    user = message.member
    user.send(`**COMMANDS**
---------------
#1 **xaddrole <@mention> <Role-Name>** -> *Adds Role*
#2 **xremoverole <@mention> <Role-Name>** -> *Removes Role*
#3 **xbotinfo** -> *Displays Bot-Info*
#4 **xserverinfo** -> *Displays Server-Info*
#5 **xwarn <@mention> <Reason>** -> *Warns the member*
#6 **xwarnlevel <@mention>** -> *Checks Warn-Level*
#7 **xsay <anything>** -> *Replies back what ever you type*
#8 **xkick <@mention> <Reason>** -> Kicks the mentioned member
#9 **xban <@mention> <Reason>** -> Bans the mentioned member
#10 **xtempmute <@mention> <time>** -> *Temporarly Mutes the person* 
***NOTE : xtempmute needs certain MUTED role permissions***
`)
}

module.exports.help = {
    name : "help"
}