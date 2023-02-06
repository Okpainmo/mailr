const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.port || 3000;

// express middleware used for serving static client-side files.
app.use(express.static('./public'));

// middleware for handling json in post requests.
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'okpainmoandrew@gmail.com',
    pass: 'wsqlfonxwwcbbons',
  },
});

app.post('/submit-email', async (req, res) => {
  // const data = await req.body;
  // const email = data.userEmail;
  // const mailOptions = {
  //   from: 'okpainmoandrew@gmail.com',
  //   to: email,
  //   subject: 'Testing e-mailing app - showcasing to bro emmanuel',
  //   text: 'developing an emailing app - just testing - email automated + showcasing to bro Emmanuel',
  // };
  // // console.log(email);
  // transporter.sendMail(mailOptions, (err, success) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Email sent successfully');
  //     res.send(result);
  //   }
  // });
});

app.listen(port, (req, res) => {
  console.log(`server is listening on port: ${port}...`);
});
