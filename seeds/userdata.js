const { User } = require('../models');

const userdata =
[
    {
        "username": "PotatoeMan77",
        "password": "password"
    },
    {
        "username": "TechMaster99",
        "password": "password"
    },
    {
        "username": "NodeCoder",
        "password": "password"
    }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;