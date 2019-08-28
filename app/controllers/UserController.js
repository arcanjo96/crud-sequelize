const { User } = require('../models');

module.exports = {
    async index(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });
        //res.json(users);
        res.render('users', { data: users });
    },

    async create(req, res) {
        console.log(req.body);
        const user = await User.create(req.body);
        //res.json(user);

        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });

        res.render('users.ejs', { data: users });
    },

    async update(req, res) {
        const user = await User.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, {
                where: {
                    id: req.params.id
                }
            });

        //res.json(user);
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });

        res.render('users.ejs', { data: users });
    },

    async destroy(req, res) {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });
        //res.json(user);

        res.render('users', { data: users });
    },

    async find(req, res) {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        //res.json(user);
        res.render('showUser', { data: user });
    },

    async edit(req, res) {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        //res.json(user);
        res.render('editUser', { data: user });
    }
}