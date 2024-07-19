"use strict";
/* ------------------------------------------------------- */

const { User } = require('../models/userModel')


const passwordEncrypt = require('../helpers/passwordEncrypt')

/* ------------------------------------------------------- */
//Auth Controller:

module.exports.auth = {

    login: async (req, res) => {

        const { email, password } = req.body

        if (email && password) {
            const user = await User.findOne({ email })
            if (user) {

                if (user.password == passwordEncrypt(password)) {
                    console.log(user)
                    // req.session.email = email
                    req.session._id = user._id
                    req.session.password = user.password

                    /* SESSION */

                    /* COOKIE */
                    if (req?.body.remindMe == true) {
                        req.session.remindMe = true
                        // set MaxAge to 3 days
                        req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3
                    }
                    /* COOKIE */

                    res.status(200).send({
                        error: false,
                        message: 'Logion OK',
                        user
                    })
                } else {
                    res.errorStatusCode = 401
                    throw new Error('Login parameters are not true')
                }
            } else {
                res.errorStatusCode = 401
                throw new Error('This user not found')
            }
        } else {
            res.errorStatusCode = 401
            throw new Error('Email and password are required')
        }

    },

    logout: async (req, res) => {
        req.session = null

        res.status(200).send({
            error: false,
            message: 'Logout OK'
        })

    }
}


/* ------------------------------------------------------- */