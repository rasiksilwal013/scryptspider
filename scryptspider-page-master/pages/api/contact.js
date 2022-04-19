// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const transporter = nodemailer.createTransport({
        service: 'zoho',
        host: 'smtp.zoho.com',
        port: 465,
        auth: {
          user: process.env.ZOHO_USERNAME,
          pass: process.env.ZOHO_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.ZOHO_USERNAME,
        to: 'info@scryptspider.com',
        subject: req.body.subject,
        text: `Scrypt Spider`,
        html: `<body>
              <div>
                  <p>
                  Name: ${req.body.firstName} ${req.body.lastName} <br>
                  Email: ${req.body.email} <br>
                  Message: ${req.body.message}
                  </p>
              </div>
          </body>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: 'Thank you for your message.',
          });
        }
      });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  } else {
    // Handle any other HTTP method
  }
}
