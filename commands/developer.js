module.exports = {
    'dropRules' : msg => {
        if ( !discord.methods.checkRole( msg, discord.config["rolesId"]["developer"] ) ) return;

        let embeds = [];

        embeds[0] = new discord.module.MessageEmbed()
            .setColor('#F5AA38')
            .setTitle('You agree to comply with the rules described below when you connect to the Discord server, ignorance of the rules does not exempt you from liability.');

        embeds[1] = new discord.module.MessageEmbed()
            .setColor('#F5AA38')
            .setTitle('1. General')
            .setDescription('1.1 Offending the project and the Discord server participants is prohibited. \n ' +
                '1.2 It is forbidden to send the same type and messages without a meaningful load. \n' +
                '1.3 No destructive actions are allowed in relation to the project. \n' +
                '1.4 Threats of reprisal or any damage are prohibited. \n' +
                '1.5 Deception or impersonation of the administration is forbidden. \n' +
                '1.6 Extortion or begging in all possible forms is prohibited. \n' +
                '1.7 It is forbidden to have more than one account per person on this Discord server. \n' +
                '1.8 Posting any NSFW content outside the NSFW channel is forbidden. \n' +
                '1.9 Inducing/toxic behavior is forbidden. \n' +
                '1.10 Content from other projects as well as from third-party resources not related to the project may not be posted. \n' +
                '1.11 Nicknames, statuses, avatars of a racist, fascist, nationalist character and other forms of humiliation of human dignity on religious, sexual or any other grounds, attempts to stir up interethnic and interracial discord, calls for violence and terrorism are prohibited. \n' +
                '1.12 It is forbidden to discuss, offer or demand the sale of services or any game property for real (non-game) values or services. \n' +
                '1.13 It is forbidden to mention the administration (via @) without good reason.');

        embeds[2] = new discord.module.MessageEmbed()
            .setColor('#F5AA38')
            .setTitle('2. Voice channels')
            .setDescription( '2.1 The use of Soundpad and other audio and voice change software is prohibited (exception: if all participants in a voice chat agree to the use). \n' +
                '2.2 It is forbidden to demonstrate NSFW content or play games on other projects. \n' +
                '2.3 Noises/noises that may interfere with other participants in the channel are prohibited.');

        embeds[3] = new discord.module.MessageEmbed()
            .setColor('#F5AA38')
            .setTitle('3. Penalties')
            .setDescription('3.1 It is forbidden to discuss the issued punishment in any of the Discord channels. \n' +
                '3.2 Every participant has the right to appeal the punishment through the project forum. \n' +
                '3.3 Existing types of punishment:\n' +
                '⠀⠀⠀3.3.1 A time limit on the ability to leave messages. \n' +
                '⠀⠀⠀3.3.2 Compulsory exclusion from Discord - server. \n' +
                '⠀⠀⠀3.3.3 Temporary or permanent blocking. \n' +
                '⠀⠀⠀3.3.4 Included in the project blacklist.');

        embeds.forEach( el => {
            msg.channel.send(el).catch( e => console.log(e) );
        });
    },

    "dropNav" : msg => {
        if ( !discord.methods.checkRole( msg, discord.config["rolesId"]["developer"] ) ) return;

        const embed = new discord.module.MessageEmbed()
            .setColor('#F5AA38')
            .setTitle("Navigation")
            .setDescription( 'In this channel you can find all the necessary resources for a comfortable game on our project. \n \n \n' +
                `<:olympic:734421835747164311>⠀[Web Page](https://olympic-rp.com)\n ` +
                `<:olympic:734421835747164311>⠀[Forum](https://forum.olympic-rp.com)\n ` +
                `<:olympic_yt:743125574871941260>⠀[YouTube channel](https://www.youtube.com/channel/UCTBNh99n6sO8B08bBvSgTxw)`)
            .setThumbnail(`https://olympic.dus.ee/assets/images/olympic1000.png`)

        msg.channel.send(embed).catch(e => console.log(e));
    }
}