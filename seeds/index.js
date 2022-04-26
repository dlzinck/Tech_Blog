const sequelize = require('../config/connection.js');
const seedUser = require('./userdata');
const seedPost = require('./postdata');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedPost();
    process.exit(0);
};

seedAll();