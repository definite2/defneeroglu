export default async function sendEmail(req, res) {
  const { name, email, message } = req.body;
  const domain = process.env.MAILGUN_DOMAIN;
  const auth = Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString("base64");

  const form = new URLSearchParams();
  form.append("from", `${name} <mailgun@${domain}>`);
  form.append("to", process.env.CONTACT_EMAIL);
  form.append("subject", `Message from ${name}`);
  form.append("html", `<div>${message}</div><p>Sent from: ${email}</p>`);

  try {
    const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      let message;
      try {
        message = JSON.parse(text).message;
      } catch {
        message = text;
      }
      return res.status(response.status).json({ error: message });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
