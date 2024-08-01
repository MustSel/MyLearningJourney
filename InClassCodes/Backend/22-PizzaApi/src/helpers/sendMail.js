"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const nodemailer = require('nodemailer')

//sendMail(to, subject, message)
module.exports = (to, subject, message) => {

    // GoogleMail:

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mustafa.selcuk.tls@gmail.com',
            pass: 'bjiw nsgg xsco bgxx'
        }
    })

    // SendMail:
    transporter.sendMail({
        from: 'mustafa.selcuk.tls@gmail.com',
        to: to,
        subject: subject,
        text: message,
        html: message
    }, (err, success) => {
        success ? console.log("success:", success) : console.log(err)
    })
}