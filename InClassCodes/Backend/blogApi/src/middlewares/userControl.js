"use strict";

const {User} = require('../models/userModel')

module.exports = async (req, res, next) => {

    req.user = null

    if(req?.session?._id) {
        const user = await User.findOne()
    }
}