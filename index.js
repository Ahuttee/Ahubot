const Discord = require("discord.js");
const client = new Discord.Client();
const hook = new Discord.WebhookClient('1232137812367812637816', 'ab23b42b4m23b4b324b32.324b23432');
const yt = require('ytdl-core');

// send a message using the webhook
hook.sendMessage('i suck at webhooks tbh');

client.on("ready", () =>  {
  console.log("Bot powerered! use CTRL + C to shutdown")
  client.user.setStatus("dnd")
  client.user.setGame("#help", "https://www.twitch.tv/roblox")
  client.user.setAFK(true)
});
client.on('voicechannel', stream => {
  voiceChannel.join()
   .then(connection => {
     const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', {filter : 'audioonly'});
     const dispatcher = connection.playStream(stream, streamOptions);
   })
   .catch(console.error);

});


client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Hello  and welcome ${member.user} to this server HAVE A NICE DAY BRUH`)

});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`BUH BYE!! ${member.user}`)
});

client.on('message', msg => {
    let prefix = "#";
  if(!msg.content.startsWith(prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);

      if (msg.content.startsWith(prefix + "say")) {
      msg.channel.sendMessage(args.join(" "));
      msg.delete();
    }

    if(msg.content.startsWith(prefix + "ttest")) {
      msg.channel.sendMessage()
    }

    if (msg.content.startsWith(prefix + "add")) {
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p+c);

      msg.channel.sendMessage(total);
    } else {

    }
    if (msg.content.startsWith(prefix + "kick")) {
      let modRole = msg.guild.roles.find("name", "Ahutbot");
      if(!msg.member.roles.has(modRole.id)) {
          return msg.reply("LOL! you dont have `Mods` role.. you need that to do that command!")
      }
      if(msg.mentions.users.size === 0) {
        return msg.reply("Hey! you forgot to mention a use first!");
      }
      let kickMember = msg.guild.member(msg.mentions.users.first());
      if (!kickMember) {
          return msg.reply("That user doesnt exist! ");
      }
      if(!msg.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return message.reply("I dont hav the permissions (KICK_MEMBERS) to this");
  }
    kickMember.kick();
    msg.reply("Success!")
  }



  if (msg.content.startsWith(prefix + "ban")) {
    let modRole = msg.guild.roles.find("name", "Premium#");
    if(!msg.member.roles.has(modRole.id)) {
        return msg.reply("LOL! you dont have `Premium#` role.. you need that to do that command!")
    }
    if(msg.mentions.users.size === 0) {
      return msg.reply("Hey! you forgot to mention a use first!");
    }
    let banMember = msg.guild.member(msg.mentions.users.first());
    if (!banMember) {
        return msg.reply("That user doesnt exist! ");
    }
    if(!msg.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return msg.reply("I dont hav the permissions (BAN_MEMBERS) to this");
}
  banMember.ban();
  msg.reply("Success!")
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
if(msg.content.startsWith(prefix + "eat")) {
  return;
  msg.channel.sendMessage("**" + msg.author.username + "**" + "ate" + "** " + args.join(" "))
}

  if(msg.content.startsWith(prefix + ".userID")) {
    msg.channel.sendMessage("Your id: " + msg.author.id)
  }

  if (msg.content.startsWith(prefix + "subtract")) {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);

    msg.channel.sendMessage(total);
  }

  if(msg.content.startsWith(prefix + ".inf32o:")) {
    msg.reply("Usage: '.info:(TypeInfo) eg: .info:Boolean' if wrong info; return")
  }
  if(msg.content.startsWith(prefix + ".inf23o")) {
    msg.reply("Usage: '.info:(TypeInfo) eg: .info:Boolean' if wrong info; return")
  }
  if(msg.content.startsWith(prefix + ".info:Boolean")) {
    msg.reply("javascrding any object or the string false, create an object with an initial value of true.Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true: var x = new Boolean('false');if (x) This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:var x = false;if (x) {this code is not executed}Do not use a Boolean object to convert a non-boolean value to a boolean value. Instead, use Boolean as a function to perform this task:var x = Boolean(expression);     // preferredvar x = new Boolean(expression); // don't useIf you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.var myFalse = new Boolean(false);   // initial value of falsevar g = new Boolean(myFalse);       // initial value of truevar myString = new String('Hello'); // string objectvar s = new Boolean(myString);      // initial value of trueDo not use a Boolean object in place of a Boolean primitive.PropertiesEDITBoolean.lengthLength property whose value is 1.Boolean.prototypeRepresents the prototype for the Boolean constructor.MethodsEDITThe global Boolean object contains no methods of its own, however, it does inherit some methods through the prototype chain:Boolean instancesEDIBoolean instances inherit from Boolean.prototype. As with all constructors, the prototype object dictates instances' inherited properties and methods.PropertiesBoolean.prototype.constructorReturns the function that created an instance's prototype. This is the Boolean function by default.MethodsBoolean.prototype.toSource() Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object. Overrides the Object.prototype.toSource() method.Boolean.prototype.toString()Returns a string of either true or false depending upon the value of the object. Overrides the Object.prototype.toString() method.Boolean.prototype.valueOf()Returns the primitive value of the Boolean object. Overrides the Object.prototype.valueOf() method.Examples")
}
  if(msg.content.startsWith(prefix + "info")) {
        msg.channel.sendMessage(msg.author.createdTimestamp)
      }

      if(msg.content.startsWith(prefix + "channelid")) {
            msg.channel.sendMessage(msg.channel.id)
          }
          if(msg.content.startsWith(prefix + "avatar")) {
                msg.channel.sendFile(msg.author.avatarURL + ".png")
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


if(msg.content.startsWith(prefix + "bulkdel")) {
  msg.channel.bulkDelete(100)
    msg.channel.sendMessage("Deleted 100 msgs :ok_hand:")
}

      if(msg.content.startsWith(prefix + "bot.ping")) {
        msg.channel.sendMessage("PONG! " + msg.client.ping + " ms")
      }

      if(msg.content.startsWith(prefix + "setnew.username")) {
        client.user.setUsername("Ahut")
        msg.channel.sendMessage("Changed name to **AhuBot** XD hope ya leik it..")
      }

if (msg.content.startsWith(prefix + "purge")) {
    let messagecount = parseInt(params[0]);
    msg.channel.fetchMessages({limit: messagecount})
        .then(messages => msg.channel.bulkDelete(messages));
}


if (msg.content.startsWith(prefix + "play")) {
const voiceChannel = msg.member.voiceChannel;
if (!voiceChannel) {
return msg.reply(`Please be in a voice channel first!`);
}
voiceChannel.join()
.then(connnection => {
  let stream = yt("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {audioonly: true});
  const dispatcher = connnection.playStream(stream);
  dispatcher.on('end', () => {
    voiceChannel.leave();
  });
});
}

      if(msg.content.startsWith(prefix + "bulkINF")) {
        msg.channel.bulkDelete(9999)
        msg.channel.sendMessage("Deleted almost every messages on the server! :ok_hand:")
      }
      if(msg.content.startsWith(prefix + "nsfw")) {
        msg.reply("Error please define name")
      }
      if(msg.content.startsWith(prefix + "fetchmessage")) {
        msg.channel.sendMessage(msg.channel.fetchMessage(1))
      }
      if(msg.content.startsWith(prefix + ".user.info")) {
        msg.reply(msg.author.presence(msg.author.status))
      }
      if(msg.content.startsWith(prefix + "user.tag")) {
        msg.reply("your tag: #" + msg.author.discriminator)
      }

      if(msg.content.startsWith(prefix + "lastmessage.id")) {
        msg.channel.sendMessage(msg.author.lastMessageID)
      }
      if(msg.content.startsWith(prefix + "channel.id")) {
        msg.reply("channel id: " + msg.channel.id)
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

if(msg.content.startsWith(prefix + "invite")) {
  msg.reply("Add me to your server!, https://discordapp.com/oauth2/authorize?client_id=268769345990033409&scope=bot&permissions=2080898175 ")
}


  if (msg.content.startsWith(prefix + "help")) {
    msg.author.sendMessage(" ```#lastmessage.id - Displays the id of the last message anyone sent``` ")
    msg.author.sendMessage(" ```#smiley - Sends a smiley face! :) ``` ")
    msg.author.sendMessage(" ```#bulkdel -- deletes 1000 messages! WARNING!(this doesnt show any warn just instantly deleted 1000 messages!)``` ")
    msg.author.sendMessage(" ```#divide (number) (number) - divides a number for example: '#divide 2 4' which equals.. 2``` ")
    msg.author.sendMessage(" ```#multiply (number) (number) - multiplys a number you say ``` ")
    msg.author.sendMessage(" ```#add (number) (number) - adds a number you say``` ")
    msg.author.sendMessage(" ```#subtract - subtracts a number you say.. like``` ")
    msg.author.sendMessage(" ```#avatar - Shows up your avatar``` ")
    msg.author.sendMessage(" ```#say (message) -- displays the message usage: (#say something) which shows up 'something' ``` ")
    msg.author.sendMessage(" ```#defaultavatar - shows up your default avatar``` ")
    msg.author.sendMessage(" **WARNING:** `DO NOT USE #kick COMMAND! ITS NOT COMPLETED!` ")
    msg.author.sendMessage(" ```#help - shows you this text``` ")
    msg.author.sendMessage(" ```#invite - shows you the invite link!``` ")
    msg.reply(':mailbox: Sent in dm!')
  }

    if (msg.content === '##test') {
      msg.reply(msg.author.sendMessage('t'));
    }
    if (msg.content.startsWith(prefix + "del")) {
      msg.reply("Error", "Cannot perform command")
}

    if(msg.content === 'say') {
      msg.reply(msg.suffix);
    }

});

client.on('webhooks', webhooks =>{
    // send a slack message
webhook.sendSlackMessage({
  'username': 'Wumpus',
  'attachments': [{
    'pretext': 'this looks pretty cool',
    'color': '#F0F',
    'footer_icon': 'httpg',
    'footer': 'Powered by sneks',
    'ts': Date.now() / 1000
  }]
}).catch(console.error);
});

client.on('message', msg => {

  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


  if(msg.content === "eat") {
    msg.channel.sendMessage("**" + msg.author.username + "**" + "ate" + "** " + args.join(" "))
  }
});

client.on('message', msg => {

        if(msg.content === '##test') {
      msg.channel.sendMessage(msg.author.sendMessage)
    }

    if(msg.content === 'ham') {
      msg.channel.sendMessage("Stars")
    }

      if (msg.content === 'ping') {
    msg.reply('removed LOL')
  }
});

client.login(process.env.BOT_TOKEN);
