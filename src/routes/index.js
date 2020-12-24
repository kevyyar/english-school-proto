const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async (req, res) => {
  const { name, email, phone } = req.body;

  contentHTML = `
    <h1>${name}</h1>
    <p>${email}</p>
    <p>${phone}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: "mail.wh754800.ispot.cc",
    port: 587,
    secure: false,
    auth: {
      user: "testing@wh754800.ispot.cc",
      pass: "Contraseña",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: "'KevDev Server' <test@iamkev.xyz>",
    to: "kevyyar@gmail.com",
    subject: "Website Contact Form",
    text: "Hello World",
  });

  console.log("Message sent", info.messageId);

  // res.send("Received");
  res.redirect("../public/success.html");
});

module.exports = router;
