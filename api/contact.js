import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Create transporter using environment variables securely
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // Add your app password in Vercel settings / .env
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER, // The authenticated sender
            to: 'baralsamip4@gmail.com', // Your receiving email address
            replyTo: email,              // User's email to reply back directly
            subject: `Portfolio Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #333; margin-bottom: 20px;">New Message from Portfolio</h2>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
                    </div>
                    <p style="color: #555; line-height: 1.6;"><strong>Message:</strong></p>
                    <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
                    <p style="color: #999; font-size: 12px; text-align: center;">Sent via Nodemailer API from your Vercel deployment.</p>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ message: 'Failed to send email. Ensure SMTP credentials are correct.' });
    }
}
