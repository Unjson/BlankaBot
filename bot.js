var fs = require('fs');
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fileName = './waifus.json'
var waifus = require(fileName);

var waifuVoteCooldown;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

    waifuVoteCooldown = false;    
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.substring(0, 6) == '!ball ') {
        var args = message.substring(6).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            // Abi
            case 'abigail':
            case 'Abigail':

                bot.sendMessage({
                    to: channelID,
                    message: 'Abigail can punish LP Blanka Ball on Block with: \n-*Sweep* {2HK}'
                });
            break;

            // Akuma
            case 'akuma':
            case 'Akuma':

                bot.sendMessage({
                    to: channelID,
                    message: "Akuma can punish LP Blanka Ball on Block with: \n-*Super* {236236P}'\n-*Raging Demon* {5LP, 5LP, 6, 5LK, 5HP}'\n-*(Dash-up LP works in the corner)*"
                });
            break;

            // Alex
            case 'alex':
            case 'Alex':

                bot.sendMessage({
                    to: channelID,
                    message: 'Alex can punish LP Blanka Ball on Block with: \n-*MK Elbow* {[4]6MK}\n-*EX Elbow* {[4]6KK}'
                });
            break;   
            
            case 'balrog':
            case 'Balrog':
            case 'boxer':
            case 'Boxer':

                bot.sendMessage({
                    to: channelID,
                    message: 'Boxer can punish LP Blanka Ball on Block with: \n-*Dash Straight* {[4]6P}\n-*EX Dash Straight* {[4]6PP}\n-*Dash Low* {[4]6K}\n-*EX Dash Low* {[4]6KK}\n-*LK/MK Smash* {623LK/MK}\n-*EX Smash* {623KK}\n-*Super* {236236P}'
                });
            break; 
            
            // Claw
            case 'vega':
            case 'Vega':
            case 'claw':
            case 'Claw':

                bot.sendMessage({
                    to: channelID,
                    message: 'Claw can punish LP Blanka Ball on Block with: \n-*Buster Claw* [6HP]\n-*Slide* [2HK]\n-*EX Flying Barcelona* [623/421+KK]'
                });
            break;

            default:
            bot.sendMessage({
                to: channelID,
                message: 'u wot m8?'
            });
            break;
            
         }
    }    
    else if (message.substring(0, 7) == '!waifu ') {
        var args = message.substring(7).split(' ');
        var cmd = args[0];
       
        //args = args.splice(3);
        switch(cmd) {

        // GG Xrd
        case 'guilty':
        case 'xrd':
           
            if (args[1] == 'vote' || args[1] == 'Vote'){

                if (waifuVoteCooldown == false){

                msg = voteForWaifu('xrd', args[2]);

                if (msg != ""){

                    waifuVoteCooldown = true;

                    bot.sendMessage({
                        to: channelID,
                        message: 'Thank you! Your vote for ' + msg + ' has been cast.'
                       });

                    setTimeout(function () {
                        waifuVoteCooldown = false;
                    }, 300000)

                }

                else{

                    bot.sendMessage({
                        to: channelID,
                        message: "I'm Sorry. I don't know who that is. Did you make a typo?"
                       });

                }     

            }

             else{

                bot.sendMessage({
                    to: channelID,
                    message: "Sorry. I'm still on cooldown (Only one vote allowed every 5 minutes)."
                   });

             }

         }
           else{ 

            winner = determineWaifu("xrd");
       
              bot.sendMessage({
                 to: channelID,
                 message: '**' + winner[0] + '** is the best Waifu! (*' + winner[1] + ' Votes*)'
                });
            }
        

         break;           
         }
    }
    else if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            // !taunt
            case 'taunt':
                bot.sendMessage({
                    to: channelID,
                    message: '*You attract flies!*'
                });
            break;


         }
    }
    else if (message.substring(0, 8) == 'good bot' || message.substring(0, 8) == 'good Bot' || message.substring(0, 8) == 'Good bot' || message.substring(0, 8) == 'Good Bot'){

        bot.sendMessage({
            to: channelID,
            message: 'o(〃＾▽＾〃)o'
        }); 
    }

    });

function determineWaifu(game){

    if (game == "xrd"){

        var topname = null;
        var topvotes = 0;

        for (var i = 0, len = waifus.xrd.length; i < len; i++) {
            

            if (waifus.xrd[i].Votes > topvotes){
                topname = waifus.xrd[i].Name;
                topvotes = waifus.xrd[i].Votes;
            }

          }
    }

    return [topname, topvotes];
}

function voteForWaifu(game, userVote){

    AcceptedVote = null;

    if (game == "xrd"){

        for (var i = 0, len = waifus.xrd.length; i < len; i++) {
            

            if (waifus.xrd[i].Name == userVote){

                waifus.xrd[i].Votes = waifus.xrd[i].Votes + 1;

                AcceptedVote = userVote;
            }

          }

        fs.writeFile(fileName, JSON.stringify(waifus, null, 2), function (err) {
            if (err) return console.log(err);
        });

    }

    return [AcceptedVote];
}