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
        to: req.body.email,
        subject: 'Thanks for contacting Scrypt Spider',
        text: `The Clover Accessories`,
        html: `<body>
              <div>
                  <p>
                  Hi ${req.body.name},
                  </p>
                  <p>
                  Thank you for your message.</p>
                  <p>
                  We have received your message and we'll get back to you shortly.
                  </p>
                  <a href="https://www.scryptspider.com" target="_blank">
                    Scrypt Spider
                  </a>
              </div>
          </body>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: 'Sent!',
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
