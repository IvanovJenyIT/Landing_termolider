const expess = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = expess();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/form',(req)=>{
    nodemailer.createTestAccount(()=>{

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ivanovjenyit@gmail.com', // generated ethereal user
                pass: 'Gungrave12' // generated ethereal password
            }
        });

        let infoo = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "ivanovjenyit@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: req.body.telephon
        };

        transporter.sendMail(infoo, (err, info)=> {
            if(err){
                return console.log(err)
            }

            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        })
    })
});

const  PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(PORT)
});