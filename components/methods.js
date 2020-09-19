class Methods {
    checkRole( message, roleId ) {
        return message.member.roles.cache.find(r => r.id === roleId);
    }
}

module.exports = new Methods();