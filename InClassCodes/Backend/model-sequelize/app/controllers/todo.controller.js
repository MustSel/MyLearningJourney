"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

//Model:
const Todo = require('../models/todo.model')

module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll() // sayısıyla birlikte tüm kayıtları getirir. 
    
        res.status(200).send({
            error: false,
            result: data
        })
    },
    create: async (req, res) => {

        const receivedData = req.body
        console.log(receivedData)
    
        // const data = await Todo.create({
        //     title: receivedData.title,
        //     description: receivedData.description,
        //     priority: receivedData.priority,
        //     isdone: receivedData.isDone
        // })
    
        const data = await Todo.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data.dataValues
        })
    },

    read: async (req, res) => {
        // const data = await Todo.findOne({where: {id:req.params.id}})
        const data = await Todo.findByPk(req.params.id)
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        const data = await Todo.update(req.body, {where: {id:req.params.id}} )
        // console.log(data)
    
        res.status(202).send({
            error: false,
            result: data,
            message: (data[0] ? 'updated' : 'Can not updated'),
            new: await Todo.findByPk(req.params.id) // Güncellenmiş kaydı göster
        })
    },
    delete: async (req, res) => {

        // const data= await Todo.destroy({...filter})
        const data = await Todo.destroy({where: {id:req.params.id}})
    
        // res.status(204).send({
        //     error: false,
        //     result: data,
        //     message: data ? 'Deleted' : 'Can not deleted'
        // })
    
        if(data>=1) {
            // veri var ve silecek
            res.sendStatus(200)
        } else {
            // res.status(404).send({
            //     error: true,
            //     result: data,
            //     message: 'Can not deleted'
            // })
    
            // send to ErrorHandler
            res.errorStatusCode = 404
            throw new Error('Can not deleted. Maybe already deleted')
            
        }
    }

}