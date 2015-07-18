UserHelpers = {
    usernameForUserId(userId) {
        const user = Meteor.users.findOne({_id: userId}, {fields: {username: 1}});
        return user && user.username || "[not found]";
    },
    avatarForUserId(userId) {
        const user = Meteor.users.findOne({_id: userId}, {fields: {'profile.avatar': 1}});
        return user && user.profile && user.profile.avatar || "/images/logo128.png";
    },
    colorForUserId(userId) {
        const user = Meteor.users.findOne({_id: userId}, {fields: {'profile.color': 1}});
        return user && user.profile && user.profile.color || "transparent";
    },
    userFromId(userId) {
        return Meteor.users.findOne({_id: userId});
    },
    otherUserId(users) {
        const otherUsersId = _(users).without(Meteor.userId());
        return otherUsersId && otherUsersId[0] || "";
    }
};
Template.registerHelper('usernameForUserId', UserHelpers.usernameForUserId);
Template.registerHelper('avatarForUserId', UserHelpers.avatarForUserId);
Template.registerHelper('colorForUserId', UserHelpers.colorForUserId);
Template.registerHelper('userFromId', UserHelpers.userFromId);
Template.registerHelper('otherUserId', UserHelpers.otherUserId);
