const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'rathoreraj725@gmail.com',
        subject:'Thanks For Joining In!',
        text:`Welcome To The App, ${name}. Let Me know How To Get Along With The App`
    })
} 

const sendcancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'rathoreraj725@gmail.com',
        subject:'Sorry To See You Go😢',
        text:`Goodbye,${name}.I Hope To See You Back Sometime Soon`
    })

}

module.exports ={
    sendwelcomeEmail,
    sendcancelationEmail
}