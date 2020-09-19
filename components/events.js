module.exports = {
    'ready' : () => {
        console.log(`Successfully started`);
        bot.user.setActivity('Monitors the situation on the server', { type: 'LISTENING' }).catch(e => console.log(e));
    },

    'guildMemberAdd' : member => {
        let embed = {
            color: 0xF5AA38,
            title: `Welcome new user - ${member.displayName}!`,
            description: `Total member count on the discord server - ${member.guild.memberCount}.`,
            thumbnail: {
                url: member.user.displayAvatarURL({dynamic: true}),
            },

            timestamp: new Date(),

            footer: {
                text: 'Olympic Role Play',
                icon_url: 'https://olympic.dus.ee/assets/images/olympic128.png',
            }
        };

        member.guild.channels.cache.get( discord.config['welcomeChannel'] )
            .send( {embed: embed} )
            .catch( e => console.log(e) );
    },

    'message' : msg => {
        if ( msg.author.bot || !msg.content.startsWith(discord.config.prefix) || msg.channel.type === 'dm' ) return;

        const args = msg.content.slice(discord.config.prefix.length).trim().split(/ +/);
        const command = args.shift();

        if ( discord.commands[command] ) {
            discord.commands[command](msg);

            msg.react(':okay:743449326843461693').then(() => {
                msg.delete({timeout: 4000}).catch(e => console.log(e));
            }).catch( e => console.log(e));
        }
    }
}