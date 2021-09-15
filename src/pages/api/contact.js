import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
export default async function sendEmail(req, res) {
  const { name, email, message } = req.body;
  try {
    await sendgrid.send({
      to: process.env.CONTACT_EMAIL, 
      from: process.env.CONTACT_EMAIL,
      subject: `Message from ${name}`,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    });
  } catch (error) {
console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
