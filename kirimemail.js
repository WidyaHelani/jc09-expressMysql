const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport(

    {
        service: 'gmail',
        auth: {
            type : 'Oauth2',
            user : 'widyahelani@gmail.com',
            clientId:'605852477513-3ivd2ncdve51nmsmsevru20pb2hc43ek.apps.googleusercontent.com',
            clientSecret: 'kQTWsdvuIJpSIBANwArk-TQg',
            refreshToken: '1/QN5hpIEbF3iygtUYTK5NG8399ygfOdhofnbS0otmtH4'

        }
    }
)

const mail = {
    from: 'Widya <widyahelani@gmail.com>',
    to: 'triwidyahelani@gmail.com',
    subject: 'Assalamualaikum',
    html: `<h1>Ahlan Wah Sahlan</h1>`
}

transporter.sendMail(mail, (err, result) =>{
    if(err) return console.log(err.message)
    console.log('Hmm...')
})