"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {BlogPost, BlogCategory } = require('../models/blogModel')

/* ------------------------------------------------------- */

// BlogCategory Controller:

module.exports.blogCategory = {

    create: async (req,res) => {

        // res.send('create method')

        const data = await BlogCategory.create(req.body)
        // console.log(data)

        res.status(201).send({
            error: false,
            result: data
        })

    }

}



/* ------------------------------------------------------- */
// BlogPost Controller:

module.exports.blogPost = {
    
}



/* ------------------------------------------------------- */