const Event = require('./event');
const User = require('./user');

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Event.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    Event,
    User,
};