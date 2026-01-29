import { NextResponse } from 'next/server';
import { TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

export const runtime = 'nodejs';

const getRequiredEnv = (key: string) => {
    const value = process.env[key]?.trim();
    if (!value) {
        throw new Error(`${key} is not defined`);
    }
    return value;
};

export async function POST(request: Request) {
    try {
        const { name, email, message, phone, service, budget } = await request.json();

        const brevoClient = new TransactionalEmailsApi();
        const brevoApiKey = getRequiredEnv('BREVO_API_KEY');
        const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() || 'kumawatlakshya@gmail.com';
        const senderName = process.env.BREVO_SENDER_NAME?.trim() || 'Contact Form';
        const adminEmail = process.env.ADMIN_EMAIL?.trim() || senderEmail;
        brevoClient.setApiKey(TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

        const adminEmailData = {
            sender: { email: senderEmail, name: senderName },
            to: [{ email: adminEmail }],
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
        const statusCode = typeof error === 'object' && error && 'statusCode' in error ? (error as { statusCode?: number }).statusCode : undefined;
        const baseMessage = error instanceof Error ? error.message : '';
        const message = statusCode === 401
            ? 'Brevo authentication failed. Check BREVO_API_KEY.'
            : baseMessage || 'Failed to send emails';
        console.error("Email sending error:", error);
        return NextResponse.json({ success: false, message }, { status: statusCode ?? 500 });
    }
}
