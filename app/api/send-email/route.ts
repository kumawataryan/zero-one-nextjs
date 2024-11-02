import { NextResponse } from 'next/server';
import { TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

const brevoClient = new TransactionalEmailsApi();
if (!process.env.BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY is not defined');
}
brevoClient.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message, phone, service, budget } = await request.json();

        const adminEmailData = {
            sender: { email: "kumawatlakshya@gmail.com", name: "Contact Form" },
            to: [{ email: process.env.ADMIN_EMAIL || '' }],
            subject: "New Contact Form Submission",
            htmlContent: `
                <div style="font-family: Arial, sans-serif;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</p>
                </div>
            `,
        };

        await brevoClient.sendTransacEmail(adminEmailData);
        return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ success: false, message: 'Failed to send emails' }, { status: 500 });
    }
}
