require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email_user,
    pass: process.env.Email_password,
  },
});

const mailOptions = {
  from: process.env.Email_user,
  to: process.env.send_,
  subject: "Sending Email using Node.js",
  Text :"Hello , this is a test email sent using Node.js",
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`Error occured:`, error);
}
console.log(`Email sent Successfully:`, info.response);
});
