const { User } = require('../models');

module.exports = {
    async index(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email']
        });
        res.json(users);
    },

    async create(req, res) {
        console.log(req.body);
        const user = await User.create(req.body);
        res.json(user);
    },

    async update(req, res) {
        console.log(req.body);
        const data = req.body;
        const user = await User.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, {
                where: {
                    id: req.params.id
                }
            });

        res.json(user);
    },

    async destroy(req, res) {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        res.json(user);
    },

    async find(req, res) {
        const user = await User.findAll({
            attributes: ['name', 'email']
        }, {
                where: {
                    id: req.params.id
                }
            });

        res.json(user);
    }
}