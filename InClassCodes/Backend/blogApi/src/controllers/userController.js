'use strict';

const {User} = require('../models/userModel')

module.exports.user = {

    list: async (req, res) => {

        const data = await User.find()

        res.status(200).send({
            error: false,
            result: data
        })

    },

    // CRUD ->

    create: async (req, res) => {

        const data = await User.create(req.body)
        // console.log(data)

        res.status(201).send({
            error: false,
            result: data
        })

    },

    read: async (req, res) => {

        // const userId = req.params.userId
        // const data = await User.findOne({ _id: userId })

        // const data = await User.findOne({ ...filter })
        const data = await User.findOne({ _id: req.params.userId })
        // const data = await User.findById( req.params.userId )

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        // const data = await User.updateOne({ ...filter }, { ...data })
        const data = await User.updateOne({ _id: req.params.userId }, req.body, {runValidators: true})
        // const data = await User.findByIdAndUpdate(req.params.userId, req.body)

        res.status(202).send({
            error: false,
            result: data, // Güncelleme işleminin sayısal değerleri.
            new: await User.findOne({ _id: req.params.userId }) // Güncellenmiş datayı göster.
        })

    },

    delete: async (req, res) => {

        // const data = await User.deleteOne({ ...filter })
        const data = await User.deleteOne({ _id: req.params.userId })
        // console.log(data)

        // res.status(204).send({
        //     error: false,
        //     result: data
        // })

        if (data.deletedCount >= 1) {

            res.sendStatus(204)
            // error: false

        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found.')
            // error: true

        }
    }
}