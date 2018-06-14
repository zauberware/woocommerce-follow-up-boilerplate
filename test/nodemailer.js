'use strict'

require('dotenv').config()
const nodemailer = require('nodemailer')
const fs = require('fs')

function sendMail(htmlData) {
    const transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    const mailOptions = {
        from: '"Follo-Up Tester" <test@followuptester.com>',
        to: process.env.MAIL_TO,
        subject: 'FollowUp - Testing',
        text: '', // plain text body
        html: htmlData
    }

    // Verify connection configuration
    transporter.verify(function(error, success) {
       if (error) console.log(error)
       else console.log('Server is ready to take our messages')
    })

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error)
        console.log('Message sent: %s', info.messageId)
        transporter.close()
    })
}


fs.readFile(__dirname + '/../dist/index.html', 'utf8', function (err, data) {
    if (err) {
        console.error(err)
        process.exit()
    }

    sendMail(data)
})
