const Discord = require("discord.js");
const client = new Discord.Client();
const hook = new Discord.WebhookClient('266505631291277312', 'SzWsowk5Va2ZdXuhkMkE8WyOS0gq3ApYDZggVMlde3XVEBgp4tjZIImUbC74q7TrkZ1S');
const Cleverbot = require("cleverbot-node");
cleverbot = new Cleverbot;
const fs = require("fs");
const config = require('./config.json');

//const points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
//const coins = JSON.parse(fs.readFileSync('./coins.json', 'utf8'));


process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

if(client.disconnect) {
  client.reconnect()
}

client.on("ready", () => {
  console.log("Bot powerered! use CTRL + C to shutdown")
  client.user.setStatus("dnd")
  client.user.setGame(`#help | ${client.guilds.size} servers`, "https://www.twitch.tv/ /")
  client.user.setAFK(true)
});

client.on('error', err => {
  console.log(err)
});

client.on('warn', lol => {
  console.log(lol)
});
client.on('disconnect', discon => {
  console.log(discon)
});





client.on('guildCreate', del => {
  del.defaultChannel.sendMessage("Hey thanks for inviting me type #help for a bunch of my commands" + " **\nmade by Ahuttee#2791 and with the power of discord.js**")
})





client.on('message', msg => {
    if(msg.author.bot) return;
  client.channels.get("229635860507656195").sendMessage("", {embed: {
  color: 3447003,
  title: msg.author.username + "#" + msg.author.discriminator,
  fields: [
    {
      name: msg.author.username + " sent a message in " + msg.channel.name + " " + msg.channel.id,
      value: "```\n" + msg.content + "\n```"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: msg.author.avatarURL,
    text: 'msg'
  }
}});


        let prefix = config.prefix;

      let command = msg.content.split(" ")[0];
  command = command.slice(msg.length);

  let args = msg.content.split(" ").slice(1);



  if(msg.author.bot) return;

if(msg.content.startsWith(prefix + "changeprefix")) {
   if(msg.author.id !== "203488399061942272") return msg.channel.sendMessage(":no_entry: **You dont have permission** no_entry:")
  config.prefix = args[0];
  fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err)})
    msg.channel.sendMessage("Changed prefix to **" + args.join(" ") + "**")
}



if(msg.content.startsWith(prefix + "sourcecode")) {
  const request = require('request');
  msg.channel.sendMessage('Argument: ' + args.username);
        var url = 'http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=' + args.username;

        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var arr = body.split(/[\n,]/);

                console.log(body);
            }
        });


    }


if(msg.content.startsWith(prefix + "play")) {
  const yt = require('ytdl-core');
  const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) {
      return msg.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(args.join(" "), {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
    }



if(msg.content.startsWith(prefix + "bot.reconnect")) {
  if(!msg.author.id === "203488399061942272") return msg.channel.sendMessage("**Invalid Access**")
 client.disconnect()

}



if(msg.content.startsWith(prefix + "sendittooplz")) {
client.channels.get("223064367682289665").send("", {embed: {
  color: 2550247,
  author: {
    name: args.join(" "),
    icon_url: msg.author.avatarURL
  }
}});













}




if(msg.content.startsWith(prefix + "send1233")) {
  client.channels.get("255268484215209984").send("xD ty lol")
}





      if(!msg.content.startsWith(prefix)) return;

      if (msg.content.startsWith(prefix + "say")) {
      msg.channel.sendMessage(args.join(" "));
      msg.delete();
    }
    if(msg.content === "we...") {
      msg.channel.sendMessage("aEMS")
    }
    if(msg.content.startsWith(prefix + "ttest")) {
      msg.channel.sendMessage()
    }

if(msg.content.startsWith(prefix + "+play")) {

const fs = require('fs');
msg.member.voiceChannel.join()
        .then(connection => { // connection is an instance of VoiceConnection
          msg.reply('I have successfully connected to the channel!');
           let stream = yt("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {audioonly: true});
connection.playStream(stream)
})
}


if(msg.content.startsWith(prefix + "send")) {
client.users.get("203489827646210048").send(args.join(" "))
}




  if(msg.content.startsWith(prefix + "servers")) {
    msg.channel.sendMessage(`__**${client.user.username} is currently on the following servers:**__ \n\n${client.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true});
  }


if(msg.content.startsWith(prefix + "urban")) {
  var urban = require('urban')
  if(msg.content.size === 0) return msg.reply("?")
            var targetWord = args.join(" ") == "" ? urban.random() : urban(args.join(" "));
          targetWord.first(function(json) {
              if (json) {
                var message = "Urban Dictionary: **" + json.word + "**\n\n" + json.definition;
                if (json.example) {
                    message = message + "\n\n__Example__:\n" + json.example;
                }
                msg.channel.sendMessage( message);
              } else {
                msg.channel.sendMessage( "No matches found");
              }
          });
      }




if(msg.content.startsWith(prefix + "ascii")) {
  var Ascii = require('ascii-art');
  var result = Ascii.style("test", style[close]) > String
  msg.channel.sendMessage(result)
}



if(msg.content.startsWith(prefix + "tti")) {
var image_downloader = require('image-downloader');

// Download to a directory and save with the original filename
var options = {
    url: msg.author.avatarURL + ".png",
    dest: '/image',                  // Save to /path/to/dest/image.jpg
    done: function(err, filename, image) {
        if (err) {
            throw err;
        }
    },
}



  var imageToTextDecoder = require('image-to-text');

 var file = {
   name: msg.author.avatarURL + ".png",
   path: './image/'
 };

 var key = 'ztEX9VMpdh3YbmiGfvlLDA'; //Your key registered from cloudsightapi @ https://cloudsightapi.com
 imageToTextDecoder.setAuth(key);
 imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
    console.log(keywords);
 },function(error){
    console.log(error);
 });
}





//soundboard
if(msg.content.startsWith(prefix + ""))

















//soundboard.end



if(msg.content.startsWith(prefix + "wiki")) {
var Wiki = require('wikijs');
      var query = args.join(" ");
    if(!query) {
      msg.channel.sendMessage("usage: " + Config.commandPrefix + "wiki search terms");
      return;
    }

    new Wiki().search(query,1).then(function(data) {
      new Wiki().page(data.results[0]).then(function(page) {
        page.summary().then(function(summary) {
          var sumText = summary.toString().split('\n');
          var continuation = function() {
            var paragraph = sumText.shift();
            if(paragraph){
              msg.channel.sendMessage(paragraph,continuation);
            }
          };
          continuation();
        });
      });
    },function(err){
      msg.channel.sendMessage(err);
    });
  }
  if(msg.content.startsWith(prefix + "test333")) {
   let evaled = eval(args.join(" "))
   msg.channel.sendMessage(evaled)
  }

  if(msg.content.startsWith(prefix + "giphy")) {
    var qs = require("querystring");

var giphy_config = {
    "api_key": "dc6zaTOxFJmzC",
    "rating": "r",
    "url": "http://api.giphy.com/v1/gifs/random",
    "permission": ["NORMAL"]
};

var request = require("request");

    //limit=1 will only return 1 gif
    var params = {
        "api_key": giphy_config.api_key,
        "rating": giphy_config.rating,
        "format": "json",
        "limit": 1
    };
    var query = qs.stringify(params);

    if (tags !== null) {
        query += "&tag=" + '+'
    }

    //wouldnt see request lib if defined at the top for some reason:\
    var request = require("request");
    //console.log(query)
    request(giphy_config.url + "?" + query, function (error, response, body) {
        //console.log(arguments)
        if (error || response.statusCode !== 200) {
            console.error("giphy: Got error: " + body);
            console.log(error);
            //console.log(response)
        }
        else {
            try{
                var responseObj = JSON.parse(body)
                func(responseObj.data.id);
            }
            catch(err){
                func(undefined);
            }
        }
    }.bind(this));

        var tags = args.join(" ");
        get_gif(tags, function(id) {
        if (typeof id !== "undefined") {
            msg.channel.sendMessage( "http://media.giphy.com/media/" + id + "/giphy.gif [Tags: " + (tags ? tags : "Random GIF") + "]");
        }
        else {
            msg.channel.sendMessage( "Invalid tags, try something different. [Tags: " + (tags ? tags : "Random GIF") + "]");
        }
        });
    }

if(msg.content.startsWith(prefix + "send123")) {
  client.channels.get("231233343256133632").send(args.join(" "))
}




if(msg.content.startsWith(prefix + "youtube")) {
 var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

youTube.search(args.join(" "), 2, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    msg.channel.sendMessage("http://www.youtube.com/watch?v=" + video.id);
  }
});
}




if(msg.content.startsWith(prefix + "math.random")) {
       msg.channel.sendMessage("This msg keeps getting edited")
         .then((msg) => {
    setInterval(function(){
     msg.edit(Math.random())
     msg.edit(Math.random())
   })

      }, 3000);
}

if(msg.content.startsWith(prefix + "time")) {
  msg.channel.sendMessage(Date())
}

if(msg.content.startsWith(prefix + "mute")) {
    let reason = args.slice(1).join(' ');
    let user = msg.mentions.users.first();
  let muteRole = client.guilds.get(msg.guild.id).roles.find('name', 'muted');
  if (!muteRole) return msg.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return msg.reply('You must supply a reason for the mute.').catch(console.error);
  if (msg.mentions.users.size < 1) return msg.reply('You must mention someone to mute them.').catch(console.error);
 if (!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return msg.reply('I do not have the correct permissions.').catch(console.error);
  msg.guild.member(user).addRole(muteRole).then(() => {
      msg.channel.sendMessage(`**${msg.author.username}** muted ${user} for ${reason}`)
    });
}


if(msg.content.startsWith(prefix + "split.msg")) {
  msg.channel.sendMessage(args.join(" ") + args.slice(2).join(" ") + args.slice(2).join(" "))
}










if(msg.content.startsWith(prefix + "unmute")) {
  let user = msg.mentions.users.first()
  let muteRole = client.guilds.get(msg.guild.id).roles.find('name', 'muted')
  if(msg.guild.member(user).roles.has(muteRole.id)) {
    msg.guild.member(user).removeRole(muteRole)
  }
  if(!msg.guild.member(user).roles.has(muteRole.id)) {
    return msg.channel.sendMessage("**" + user.username + "** isnt muted!")
  }
msg.channel.sendMessage("**" + msg.author.username + "** unmuted " + user)
}

if(msg.content.startsWith(prefix + "choose")) {
let myArray = [args.slice(1).join(' '), args.slice(1).join(' ')];
let randomElement = myArray[Math.floor(Math.random()*myArray.length)]
msg.channel.sendMessage("I choose **" + randomElement + "**")
}


if(msg.content.startsWith(prefix + "question")) {
  if(args === 0) return msg.channel.sendMessage("Say something so i can answer it..")
let myArray = ["Totally", "no", "YES", "No no", "yaaaaahhh", "NO", "yeah", "yee", "YE", "YAS", "noo", "nah"];
let randomElement = myArray[Math.floor(Math.random()*myArray.length)]
msg.channel.sendMessage(randomElement)
}


    if (msg.content.startsWith(prefix + "owner.test")) {
      if(msg.author.id == '203488399061942272') {
        msg.reply("it works")
      }
    if (msg.author.id !== '203488399061942272') {
      msg.reply("DOESNT WORK")
    }
}


if(msg.content.startsWith(prefix + "$send")) {
             const embed = new Discord.RichEmbed()
             .addField(args.join(" "))

             msg.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: false }
);
}



    if(msg.content.startsWith(prefix + "user.details")) {
        let user = msg.mentions.users.first();
        if(user === undefined)
        {
            msg.reply("Invalid user")
        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)
            const embed = new Discord.RichEmbed()
                .setColor(0xd01212)
                .setImage(user.avatarURL)
                .addField(`Name: ${member.displayName} (#${member.id})\nCreated: ${(user.createdAt)}\nGuild: ${msg.guild.name}\nHighest Role: ${member.highestRole}`)
            msg.channel.sendMessage("", {embed: embed});
        }
}

if(msg.content.startsWith(prefix + "roll")) {
 var random = Math.floor(Math.random() * 10);

      msg.channel.sendMessage(`**${msg.author.username}**, You rolled ${random}!`)

    }


if(msg.content.startsWith(prefix + "test111")) {
  let user1 = msg.mentions.users.first()
  let user2 = msg.mentions.users.first()
          if(user1 === undefined)
        {
            msg.reply("Mention one first")
        }
                if(user2 === undefined)
        {
            msg.reply("Mention another user")
        } else {
          msg.reply("lol k")
        }



}
if(msg.content.startsWith(prefix + "e")) {
let guild = client.user.createGuild('Example Guild', 'london')
 guild.defaultChannel.createInvite()
 client.users.get('203488399061942272').sendMessage(invite.url), invite.guild
 guild.createRole({ name: 'Example Role', permissions: ['ADMINISTRATOR'] })
 client.users.get('203488399061942272').sendMessage(role.id)
  .catch(console.error);
}


if(msg.content.startsWith(prefix + "nsfw hentai")) {
  msg.channel.sendMessage("lol no")
}


    if (msg.content.startsWith(prefix + "add")) {
      let numArray = args.map(n=> parseInt(n))
      let total = numArray.reduce( (p, c) => p+c)
      msg.channel.sendMessage(total);
    }
    if (msg.content.startsWith(prefix + "kick")) {


      let modRole = msg.guild.roles.find("name", "Premium#");
      if(!msg.member.roles.has(modRole)) {
          return msg.reply("you dont have `Premium#` role.. you need that to do #kick")
      }
      if(msg.mentions.users.size === 0) {
        return msg.reply("Hey! you forgot to mention a use first!");
      }
      let kickMember = msg.guild.member(msg.mentions.users.first());
      if (!kickMember) {
          return msg.reply("That user doesnt exist! ");
      }
      if(!msg.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return msg.reply("I dont hav the permissions (KICK_MEMBERS) to this");
  }
    kickMember.kick();
    msg.reply("Success!")
  }







if(msg.content.startsWith(prefix + "avatar")) {
        let user = msg.mentions.users.first();
        if(user === undefined)
        {

           const embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username + "'s avatar")
  .setColor(0x3AFF00)
  .setURL(msg.author.avatarURL)
  .addField('\u200b', '\u200b', true)
  .setImage(msg.author.avatarURL);

msg.channel.sendEmbed(
  embed,
  'Your avatar:',
  { disableEveryone: true }
);


        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)
 const embed = new Discord.RichEmbed()
  .setAuthor(user.username + "'s avatar")
  .setColor(0xFF00FF)
  .setURL(user.avatarURL)
  .addField('\u200b', '\u200b', true)
  .setImage(user.avatarURL);

msg.channel.sendEmbed(
  embed,
  user.username + "'s avatar",
  { disableEveryone: true }
);
}
}
if(msg.content.startsWith(prefix + "embed")) {

           const embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username + "'s avatar")
  .setColor(0xFF00FF)
  .setFooter(args.join(" "), msg.author.avatarURL)

msg.channel.sendEmbed(
  embed,
  args.join(" \n\n\n\n\n\n\n\n\n"),
  { disableEveryone: true }
);
}

if(msg.content.startsWith(prefix + "start")) {
 let ahubotrole = msg.guild.roles.find("491518324690255882")
 ahubotrole.setColor('#FF0020')
}

  if (msg.content.startsWith(prefix + "ban")) {
    let modRole = msg.guild.roles.find("name", "VIP");
    if(msg.member.roles.has(modRole)) {
        return msg.reply("you dont have `VIP` role.. you need that to do the command!")
    }
    if(msg.mentions.users.size === 0) {
      return msg.reply("Hey! you forgot to mention a use first!");
    }

    if(!msg.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return msg.reply("I dont hav the permission 'Ban members' permission to do this");
}
  banMember.ban();
  msg.reply("Success!")
}

if(msg.content.startsWith(prefix + "test123123")) {
  hook.sendMessage('it worked')
}

if (msg.content.startsWith(prefix + "slap")) {
  if(msg.mentions.users.size === 0) {
    return msg.reply("Ohhh it looks that isnt a user!")
  }
  let slapMember = msg.guild.member(msg.mentions.users.first());
  if (!slapMember) {
    return msg.reply("mention a user first!")
  }
    msg.channel.sendMessage("**" + msg.author.username + "** " + " *" + "slaps" + "*  " + args.join(" "))
}

if (msg.content.startsWith(prefix + "eat")) {
  if(msg.mentions.users.size === 0) {
    return msg.reply("Ohhh it looks that isnt a user!")
  }
  let eatMember = msg.guild.member(msg.mentions.users.first());
  if (!eatMember) {
    return msg.reply("mention a user first!")
  }
    msg.channel.sendMessage("**" + msg.author.username + "** " + " *" + "ate" + "*  " + args.join(" "))
}

  if(msg.content.startsWith(prefix + ".userID")) {
            let user = msg.mentions.users.first();
        if(user === undefined)
        {
            msg.channel.sendMessage("Your id:" + msg.author.id)
        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)
    msg.channel.sendMessage(user.username + "'s id: " + user.id)
  }
}
if(msg.content.startsWith(prefix + "enfo#")) {
        let user = msg.mentions.users.first();
        if(user === undefined)
        {
            msg.reply("Invalid user")
        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)





      msg.reply("**" + user.username + "** 's info\n" + "User joined at: " + user.joinedAt + "\nUser created at: " + user.createdAt + "\n User playing" + user.presence +  "\n bot? " + user.bot + "\nUser id: " + user.id + "\nuser avatar: " + msg.channel.sendFile(user.avatarURL + ".png"))





}
}
  if (msg.content.startsWith(prefix + "subtract")) {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);

    msg.channel.sendMessage(total);
  }


  if(msg.content.startsWith(prefix + ".inf32o:")) {
    msg.reply("Usage: '.info:(TypeInfo) eg: .info:Boolean' if wrong info; return")
  }
  if(msg.content.startsWith(prefix + "teest")) {
    msg.channel.send('test', embed(true))
  }



if(msg.content.startsWith(prefix + "3242432")) {
  client.channels.get("227407203147972608")
  hook.sendMessage(args.join(" "))
}



      if(msg.content.startsWith(prefix + "channelid")) {
            msg.channel.sendMessage(msg.channel.id)
          }
              if(msg.content.startsWith(prefix + "webhook")) {
                msg.channel.sendCode("js", "plz")
              }
      if (msg.content.startsWith(prefix + "multiply")) {
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p*c);

        msg.channel.sendMessage(total);
      }

      if (msg.content.startsWith(prefix + "defaultavatar")) {
        msg.reply(msg.author.defaultAvatarURL)
      }

      if (msg.content.startsWith(prefix + "123123")) {
        msg.channel.sendEmbed("TEST", ("code"))
      }

      if(msg.content.startsWith(prefix + ".client.readyAt")) {
        msg.reply(msg.client.readyAt)
      }
      if(msg.content.startsWith(prefix + "channel.createdAt")) {
        msg.reply("This channel was created at " + msg.channel.createdAt)
      }

      if (msg.content.startsWith(prefix + "cmdtest")) {
        msg.channel.sendCode("javascript", "Something")
      }

      if (msg.content.startsWith(prefix + "divide")) {
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p/c);

        msg.channel.sendMessage(total);
      }


if(msg.content.startsWith(prefix + "del")) {
  if(args.length === 0) {

    return msg.reply("Usage: #del (amount)!")
  }

   msg.channel.bulkDelete(args.join(" "))
   if(!msg.channel.bulkDelete(args.join(" "))) {
    return msg.channel.sendMessage("**Error**\nThe value cannot be more than **100**")
   }
    msg.channel.sendMessage("Deleted " + args.join(" ") +  " msg(s) :ok_hand:")
}
if(msg.content.startsWith(prefix + "warn")) {

        let user = msg.mentions.users.first();
        if(user === undefined)
        {
            msg.reply("mention a user to warn first!")
        }
        else
        {
            let reason = args.slice(1).join(' ')
  if(reason.length == 0) {
    return msg.channel.sendMessage("Define a reason!")
  }
            console.log(user)
            member = client.users.get(user.id)
msg.channel.sendMessage(msg.author.username + " **warned** " +  member +  reason)





 }
}









      if(msg.content.startsWith(prefix + "bot.ping")) {
        msg.channel.sendMessage("PONG! " + msg.client.ping + " ms")
      }

      if(msg.content.startsWith(prefix + "setnew.username")) {
        client.user.setUsername("Ahut")
        msg.channel.sendMessage("Changed name to **AhuBot** XD hope ya leik it..")
      }
if (msg.content.startsWith(prefix + "purge")) {
if(msg.size === 0) {
  msg.channel.sendMessage("#purge <amount>")
  return {
  }
msg.channel.bulkDelete(args.join( ))
msg.channel.sendMessage(`:ok_hand: deleted **${args.join( )}** messages!`)
}


};


if(msg.content.startsWith(prefix + "neko")) {
  const client = require('nekos.life');
  const neko = new client();
   async function test() {
    let { url } = await neko.getSFWNeko();
    var nekoembed = new Discord.RichEmbed()
    nekoembed.setImage(url);
    nekoembed.setColor("#c660ff");
    nekoembed.setAuthor("SFW Neko!");
    nekoembed.setFooter("Image Provided By nekos.life");
    msg.channel.send(nekoembed);
  }
 
test()
  }
  if(msg.content.startsWith(prefix + "sfw.chat")) {
    const client = require('nekos.life');
  const neko = new client();
    async function test() {
      let owo = await neko.getSFWChat({text: args.join(" ")});
      msg.channel.sendMessage(owo);
    }
    test()
  }






if(msg.content.startsWith(prefix + "mail")) {
  if(msg.mentions.users.size === 0) {
    return msg.reply("Hey! you forgot to mention a use first!");
  }
  let Member = msg.guild.member(msg.mentions.users.first());
  if (!Member) {
      return msg.reply("That doesnt look like a valid user...");
  }
  let mail = args.slice(1).join(' ')
  if(mail.length < 1) {
    return msg.reply("Empty mail")
  }
  if(Member.id === "268769345990033409") {
     return msg.channel.sendMessage("no")
     }
    
 
  client.users.get(Member.id).sendMessage(":e_mail: From " + "**" + msg.author.username + "**\n\n" + mail)

  }

if(msg.content.startsWith(prefix + "roast")) {
  var insultgenerator = require('insultgenerator');

insultgenerator(function(insult)
{
        msg.reply(insult);
})
}


  if(msg.content.startsWith(prefix + "send.byID")) {
    let mail = args.join(' ')
    if(mail.length < 1) {
      return msg.reply("Empty mail")
    }
    let userid = "387421439835504644"
    
    client.users.get(userid).sendMessage(":e_mail: From " + "**" + msg.author.username + "**\n\n" + mail)
  
    }





      if(msg.content.startsWith(prefix + "userinfo")) {
        let user = msg.mentions.users.first();
        if(user === undefined)
        {

           const embed = new Discord.RichEmbed()
  .setThumbnail(msg.author.avatarURL)
  .setAuthor(msg.author.username + "'s info")

  .setColor(0x00AE86)

  .setURL(msg.author.avatarURL,'\u200b')

  .addField('\u200b', '\u200b', true)

  .addField('user created at:' + msg.author.createdAt + '\u200b\nbot:' + msg.author.bot + '\nuser id: ' + msg.author.id + '\n#avatar <user> for a full picture avatar')




msg.channel.sendEmbed(
  embed,
  ' ',
  { disableEveryone: true }
);


        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)
 const embed = new Discord.RichEmbed()

 .setThumbnail(msg.author.avatarURL)
  .setAuthor(msg.author.username + "'s info")

  .setColor(0x00AE86)

  .setURL(user.avatarURL)

  .addField('\u200b', '\u200b', true)

  .addField('user created at:' + user.createdAt)

  .addField('bot:' + user.bot)

  .addField('user id:' + user.id)

  .addField('#avatar <user> for a full picture avatar')

msg.channel.sendEmbed(
  embed,
  ' ',
  { disableEveryone: true }
);
}
}
      if(msg.content.startsWith(prefix + ".user.info")) {
        msg.reply(msg.author.presence(msg.author.status))
      }
      if(msg.content.startsWith(prefix + "user.tag")) {
                let user = msg.mentions.users.first();
        if(user === undefined)
        {
            msg.reply("your tag:" + msg.author.discriminator)
        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)
        msg.reply("your tag: #" + user.discriminator)
      }
    }
      if(msg.content.startsWith(prefix + "Friendreq02")) {
        msg.channel.sendMessage(msg.author.addFriend(203488399061942272))
        msg.reply(":ok_hand:")
      }
      if(msg.content.startsWith(prefix + "channel.invite")) {
        msg.guild.channels.get('<CHANNEL ID>').createInvite()
        .then(invite => msg.channel.sendMessage('http://discord.gg/' + invite.code));
      }




  if(msg.content.startsWith(prefix + "test2")) {
msg.channel.sendMessage(' you have 30 seconds to send "test" or this await will be cancelled. It will finish when you provide a message that goes through the filter the first time.')
.then(() => {
  msg.channel.awaitMessages(response => response.content === "test", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      msg.channel.sendMessage(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      msg.channel.sendMessage('There was no collected message that passed the filter within the time limit!');
    });
});
}








      if(msg.content.startsWith(prefix + "lastmessage.id")) {
        msg.channel.sendMessage(msg.author.lastMessageID)
      }
      if(msg.content.startsWith(prefix + "channel.id")) {
        msg.reply("channel id: " + msg.channel.id)
      }
      if(msg.content.startsWith(prefix + "channel.create")) {
        if(msg.content.size === 0) {
        return msg.channel.sendMessage("Usage create: 'channel name' ")
}
        msg.channel.clone(args.join(" ") )

      }
      if(msg.content.startsWith(prefix + "user.createdAt")) {
                let user = msg.mentions.users.first();
        if(user === undefined)
        {
            msg.reply(msg.author.createdAt)
        }
        else
        {
            console.log(user)
            member = client.users.get(user.id)
        msg.reply(user.createdAt)
      }
    }
      if(msg.content.startsWith(prefix + "ping")) {
        msg.channel.sendMessage("Ping?")
    .then((message) => {
      message.edit(`Pong! ${message.createdTimestamp - msg.createdTimestamp}ms`);
    })
      }

      if(msg.content.startsWith(prefix + "pin.message")) {
        if(msg.content.size === 0) {
          return msg.channel.sendMessage("usage: #pin.message <MESSAGE_ID>")
        }
        msg.pin(args.join(" "));
      }



      if(msg.content.startsWith(prefix + "invit2egen")) {
        msg.channel.sendMessage(msg.channel.createinvite)
      }

if(msg.content.startsWith(prefix + "smiley")) {
  msg.channel.sendFile("file.jpg")
}

if(msg.content.startsWith(prefix + "72193721398721")) {
  msg.delete();
  msg.channel.sendMessage("By the way.. Ahuttees not a bot :P i am")
  msg.channel.sendFile("file2.jpg")
}





if(msg.content.startsWith(prefix + "omfg")) {
  msg.channel.sendMessage(":bread: :regional_indicator_o: :regional_indicator_m: :regional_indicator_f: :regional_indicator_g: :bread:\n:regional_indicator_o: :bread: :bread: :bread: :bread: :regional_indicator_o:\n:regional_indicator_m: :bread: :bread: :bread: :bread: :regional_indicator_m: \n:regional_indicator_f: :bread: :bread: :bread: :bread: :regional_indicator_f: \n:regional_indicator_g: :bread: :bread: :bread: :bread: :regional_indicator_g: \n:bread: :regional_indicator_o: :regional_indicator_m: :regional_indicator_f: :regional_indicator_g: :bread:")
}




























if(msg.content.startsWith(prefix + "invite")) {
  msg.reply("https://discordapp.com/oauth2/authorize?client_id=268769345990033409&scope=bot&permissions=1177734151")
}

 if (msg.content.startsWith(prefix + "help")) {
  msg.author.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: "**Commands from AhuBot**",
      value: "**#invite**\n shows you the invite link for the bot\n**#del**\n Usage: #del (amount)\n**#divide (number1) (number2)**\n Divides a number for example: '#divide 2 4' which equals.. 2\n**#multiply (number1) (number2)**\n Multiplys a number you say\n**#add (number1) (number2)**\n adds a number\n**#subtract**\n Subtracts a number you send\n**#avatar**\n Shows up your avatar\n**#say (message)**\n sends the message usage: (#say something) which shows up 'something'\n **#kick**\n Kicks a user.. usage: #kick @user\n**#help**\n shows up this help menu\n**#invite**\n Shows you the invite link!\n**#ban**\nUsage: #ban @user\n**#ping**\nPings.. nothing useful about that..\n BOT CREATED BY AHUTTEE ;3"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.users.get("203488399061942272").avatarURL,
  }
}});
    msg.reply(':mailbox: Sent in dm!')
  }

    if (msg.content === '##test') {
      msg.reply(msg.author.sendMessage('t'));
    }
    if(msg.content.startsWith(prefix + "client.info")) {
      msg.channel.sendMessage(`Client name: ${client.user.username}\nClient id: ${client.user.id}\nClient Verification Level: ${client.user.verificationLevel}\n      Created by Ahuttee and with the help of Phy`)
    }






  if (msg.content.startsWith(prefix + "eval")) {
    if(msg.author.id !== "203488399061942272") return msg.channel.sendMessage(":no_entry: Restricted command :no_entry:")
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      msg.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      msg.channel.sendMessage(`\`you got an error(- ͜-)\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }


    if(msg.content === 'say') {
      msg.reply(msg.suffix);
    }

});


client.on('message', msg => {
  let prefix = '#';
       let command = msg.content.split(" ")[0];
  command = command.slice(msg.length);

  let args = msg.content.split(" ").slice(1);
  if(msg.content.startsWith(prefix + "google")) {
    if(msg.author.id == "284261379228172289") return msg.channel.sendMessage(":no_entry: **You are banned from using this command ** no_entry:")
    var google = require('google')

google.resultsPerPage = 1
var nextCounter = 0

google(args.join(" "), function (err, res){
  if (err) console.error(err)

  for (var i = 0; i < res.links.length; ++i) {
    msg.channel.sendMessage('found results for ' + args.join(" "))
    var link = res.links[i];
    msg.reply(link.title + ' - ' + link.href)
    msg.reply(link.description + "\n")
  }


})
  }

if(command.includes(client.user)){
  var myArray = ["ye?", "wat", "yes? :3", "what", "hm?", "lol wat"]
        var cleverbot = require("cleverbot.io"),
        cbot = new cleverbot("olKNI5JdKU13HXLm", "vS3EX7vSnHHhKZyhPZ17ZjKm5M51xyqc");
        cbot.create(function (err, session) {});
        let randomElement = myArray[Math.floor(Math.random()*myArray.length)]

        var msgg = args.join(" ")
        if(args.length === 0) {
          return msg.channel.sendMessage(randomElement)
        }

        cbot.ask(msgg, function (err, response){
            if(!err){
                msg.reply(response);
            } else {

            }
        });
    }





client.on('message', msg => {
  if(msg.author.bot) return;
  let prefix = '#';
       let command = msg.content.split(" ")[0];
  command = command.slice(msg.length);

         let commend = msg.content.split(" ")[0];
  commend = commend.slice(msg.length);
  let arg  = msg.content.split(" ").slice(1);

  let args = msg.content.split(" ").slice(1);



  });

});

client.login(process.env.BOT_TOKEN);
