var fs = require('fs');
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fileName = './waifus.json'
var waifus = require(fileName);

var waifuVoteCooldownXrd;
var waifuVoteCooldownBb

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

    waifuVoteCooldownXrd = false;
    waifuVoteCooldownBb = false;    
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
            case 'abi':
            case 'Abi':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Abigail's most consistent punishes for LP Blanka Ball: \n-*Cr.HK*\n-*Critical Art*"
                });
            break;

            // Akuma
            case 'akuma':
            case 'Akuma':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Akuma's most consistent punishes for LP Blanka Ball: \n-*Critical Art*\n-*Raging Demon (while in VT1)*"
                });
            break;

            // Alex
            case 'alex':
            case 'Alex':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Alex's most consistent punishes for LP Blanka Ball: \n-*MK Slash Elbow*\n-*Sledge Hammer (while in VT1)*"
                });
            break;   
            
            //Boxer
            case 'balrog':
            case 'Balrog':
            case 'boxer':
            case 'Boxer':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Boxer's most consistent punishes for LP Blanka Ball: \n-*Dash Straight (any)*\n-*Dash Low (any)*\n-*LK/MK/EX Screw Smash*\n-*Critical Art*"
                });
            break;
            
            // Birdie
            case 'birdie':
            case 'Birdie':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Birdie's most consistent punishes for LP Blanka Ball: \n-*MP/EX Bull Head*\n-*EX Bull Horn*\n-*Critical Art*"
                });
            break; 

            // Blanka
            case 'blanka':
            case 'Blanka':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Blanka's most consistent punishes for LP Blanka Ball: \n-*HP/EX Blanka Ball*\n-*Blanka Ball (while in VT1)*\n-*Critical Art*"
                });
            break;
            
            // Cammy
            case 'cammy':
            case 'Cammy':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Cammy's most consistent punishes for LP Blanka Ball: \n-*MK/HK/EX Spiral Arrow*\n-*Spiral Arrow (while in VT1)*\n-*Critical Art*"
                });
            break; 

            // Chun-Li
            case 'chun-li':
            case 'Chun-Li':
            case 'chun':
            case 'Chun':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Chun-Li's most consistent punishes for LP Blanka Ball: \n-*Dash > LK/EX Legs*\n-*Critical Art*"
                });
            break;

            // Claw
            case 'vega':
            case 'Vega':
            case 'claw':
            case 'Claw':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Claw's most consistent punishes for LP Blanka Ball: \n-*Buster Claw (f+HP w/ claw on)*\n-*Cr.HK*\n-*Dash > Cr.LP*\n-*V-Trigger 1 Activation*\n-*Critical Art*"
                });
            break;

             // Dhalsim
            case 'dhalsim':
            case 'Dhalsim':
            case 'sim':
            case 'Sim':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Dhalsim's most consistent punishes for LP Blanka Ball: \n-*St.MP*\n-*St.MK*\n-*St.HP*\n-*St.HK*"
                });
            break;

            // Ed
            case 'ed':
            case 'Ed':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Ed's most consistent punishes for LP Blanka Ball: \n-*Dash > St.LP*\n-*V-Reversal > St.MP*\n-*Critical Art*"
                });
            break;
            
            // F.A.N.G
            case 'fang':
            case 'Fang':
            case 'f.a.n.g':
            case 'F.A.N.G':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are F.A.N.G's most consistent punishes for LP Blanka Ball: \n-*EX Sotoja*\n-*V-Reversal > St.HK*"
                });
            break;

            // Guile
            case 'guile':
            case 'Guile':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Guile's most consistent punishes for LP Blanka Ball: \n-*Critical Art*"
                });
            break;

            // Ibuki
            case 'ibuki':
            case 'Ibuki':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Ibuki's most consistent punishes for LP Blanka Ball: \n-*HP/EX(MP+HP) Kunai*\n-*V-Trigger 2 Activation*\n-*Critical Art*"
                });
            break;

            //Juri
            case 'juri':
            case 'Juri':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Juri's most consistent punishes for LP Blanka Ball: \n-*MK Ryodansatsu*\n-*V-Skill (pre-charged)*\n-*Critical Art*"
                });
            break;

            //Karin
            case 'karin':
            case 'Karin':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Karin's most consistent punishes for LP Blanka Ball: \n-*HK/EX Kanzuki-Ryu Hokojutsu Seppo > Late Tenko*\n-*HK/EX Kanzuki-Ryu Hokojutsu Seppo > Orochi*\n-*V-Skill (Hold)*\n-*Critical Art*"
                });
            break;

            //Ken
            case 'ken':
            case 'Ken':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Ken's most consistent punishes for LP Blanka Ball: \n-*EX Tatsu (while in VT1)*"
                });
            break;

            //Kolin
            case 'kolin':
            case 'Kolin':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Kolin's most consistent punishes for LP Blanka Ball: \n-*Frost Edge (while in VT2)*\n-*V-Reversal > St.HP*\n-*Critical Art*"
                });
            break;

            //Laura
            case 'laura':
            case 'Laura':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Laura's most consistent punishes for LP Blanka Ball: \n-*MP/EX Bolt Charge*"
                });
            break;

            //Dictator
            case 'bison':
            case 'Bison':
            case 'm.bison':
            case 'M.Bison':
            case 'dictator':
            case 'Dictator':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Dictator's most consistent punishes for LP Blanka Ball: \n-*Cr.HK*\n-*MK/HK/EX Double Knee Press*\n-*Psycho Crusher (while in VT2)*"
                });
            break;

            //Menat
            case 'menat':
            case 'Menat':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Menat's most consistent punishes for LP Blanka Ball: \n-*Nothing ¯\\_(ツ)_/¯*\n-*Soul Spark (w/ Orb near Blanka)*"
                });
            break;

            //Nash
            case 'nash':
            case 'Nash':
            case 'charlie':
            case 'Charlie':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Nash's most consistent punishes for LP Blanka Ball: \n-*V-Trigger 1 Activation (no direction) > Cr.HP*\n-*Critical Art*"
                });
            break;

            //Necalli
            case 'necalli':
            case 'Necalli':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Necalli's most consistent punishes for LP Blanka Ball: \n-*MP The Disc's Guidance*\n-*Dash > st.LP (while in VT)*\n-*V-Skill (neutral/forward) (while in VT)*"
                });
            break;

            //Rashid
            case 'rashid':
            case 'Rashid':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Rashid's most consistent punishes for LP Blanka Ball: \n-*EX Eagle Spike*\n-*Eagle Spike (while in VT2)*\n-*V-Reversal > St.MP/St.HP*"
                });
            break;

            //R.Mika
            case 'mika':
            case 'Mika':
            case 'r.mika':
            case 'R.Mika':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Rainbow Mika's most consistent punishes for LP Blanka Ball: \n-*Nothing ¯\\_(ツ)_/¯*"
                });
            break;

            //Ryu
            case 'ryu':
            case 'Ryu':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Rüdiger's most consistent punishes for LP Blanka Ball: \n-*Dash > St.LK*\n-*EX Hadouken (while in VT1)*\n-*Critical Art (MP/HP)*"
                });
            break;

            //Sakura
            case 'sakura':
            case 'Sakura':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Sakura's most consistent punishes for LP Blanka Ball: \n-*Dash > St.LK*"
                });
            break;

            //Urien
            case 'urien':
            case 'Urien':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Urien's most consistent punishes for LP Blanka Ball: \n-*HK/EX Chariot Tackle*\n-*V-Trigger 1 Activation (neutral)*"
                });
            break;

            //Zangief
            case 'zangief':
            case 'Zangief':
            case 'gief':
            case 'Gief':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Zangief's most consistent punishes for LP Blanka Ball: \n-*Nothing ¯\\_(ツ)_/¯*"
                });
            break;

            //Zeku
            case 'zeku':
            case 'Zeku':

                bot.sendMessage({
                    to: channelID,
                    message: "Here are Zeku's most consistent punishes for LP Blanka Ball: \n-*EX Bushin Gram - Koku [Old Zeku]*\n-*(EX)Hayagake > Ashikari [Young Zeku]*\n-*EX Hozanto [Young Zeku]*\n-*Idaten (while in VT1) [Old/Young Zeku]*"
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

                if (waifuVoteCooldownXrd == false){

                msg = voteForWaifu('xrd', args[2]);

                if (msg != ""){

                    waifuVoteCooldownXrd = true;

                    bot.sendMessage({
                        to: channelID,
                        message: 'Thank you! Your vote for ' + msg + ' has been cast.'
                       });

                    setTimeout(function () {
                        waifuVoteCooldownXrd = false;
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
         
        // BB
        case 'blazblue':
        case 'bb':
           
            if (args[1] == 'vote' || args[1] == 'Vote'){

                if (waifuVoteCooldownBb == false){

                msg = voteForWaifu('bb', args[2]);

                if (msg != ""){

                    waifuVoteCooldownBb = true;

                    bot.sendMessage({
                        to: channelID,
                        message: 'Thank you! Your vote for ' + msg + ' has been cast.'
                       });

                    setTimeout(function () {
                        waifuVoteCooldownBb = false;
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

            winner = determineWaifu("bb");
       
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
            
            //raffle
            case 'raffle':

                var raf = Math.floor(Math.random() * 101);   

                bot.sendMessage({
                    to: channelID,
                    message: '*You deal* ***' + raf + '*** *damage!* (Maximum: 100)'
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

    else if (message.substring(0, 7) == 'bad bot' || message.substring(0, 8) == 'bad Bot' || message.substring(0, 8) == 'Bad bot' || message.substring(0, 8) == 'Bad Bot'){

        bot.sendMessage({
            to: channelID,
            message: '( ︶︿︶)_╭∩╮'
        }); 
    }

    else if (message.substring(0, 25) == 'Sag gute Nacht, BlankaBot'){

    bot.sendMessage({
        to: channelID,
        message: 'Gute Nacht, BlankaBot!'
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

    if (game == "bb"){

        var topname = null;
        var topvotes = 0;

        for (var i = 0, len = waifus.bb.length; i < len; i++) {
            

            if (waifus.bb[i].Votes > topvotes){
                topname = waifus.bb[i].Name;
                topvotes = waifus.bb[i].Votes;
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

    if (game == "bb"){

        for (var i = 0, len = waifus.bb.length; i < len; i++) {
            

            if (waifus.bb[i].Name == userVote){

                waifus.bb[i].Votes = waifus.bb[i].Votes + 1;

                AcceptedVote = userVote;
            }

          }

        fs.writeFile(fileName, JSON.stringify(waifus, null, 2), function (err) {
            if (err) return console.log(err);
        });

    }

    return [AcceptedVote];
}