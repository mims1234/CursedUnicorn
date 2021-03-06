
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const automod = require("./automod.json");
const fs = require("fs");
const bot =  new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err,files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.lenglth <= 0)
    {
        console.log("Couldn't find commands");
        return;
    }

    jsfile.forEach((f,i) => {
            let props = require(`./commands/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);
    })

});

bot.on("ready" , async () => {
    console.log(`${bot.user.username} is online !`);
    if(!bot.on) return console.log("nodemon index.js")
    bot.user.setActivity("Pirate#8298", {type :"LISTENING"});
});


bot.on("message" , async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd[0] === prefix)
    {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);
    }
    
    var keys = Object.keys(automod)
    for(i=0;i<keys.length;i++)
    {
        if(cmd === keys[i])
        {
            message.delete().catch();
            message.channel.send('No Swearing Please!!')
            .then(msg => msg.delete(2000));
        }
    }
 
})

bot.login(process.env.token); 
