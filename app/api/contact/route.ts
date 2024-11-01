import { NextResponse } from 'next/server';
import Brevo from '@getbrevo/brevo';
import dotenv from 'dotenv';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

dotenv.config();

// Initialize Brevo client
const brevoClient = new Brevo.TransactionalEmailsApi();
if (!process.env.BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY is not defined');
}
brevoClient.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

// Create a DOMPurify instance for sanitizing user input
const { window } = new JSDOM('');
const purify = DOMPurify(window);

// Function to sanitize input and replace **text** with <strong>text</strong>
const formatMessage = (message: string) => {
    // Replace **text** with <strong>text</strong>
    let formattedMessage = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace newlines with <br>
    formattedMessage = formattedMessage.replace(/\n/g, '<br>');
    return purify.sanitize(formattedMessage); // Sanitize final message
};

// Handle POST requests to /api/contact
export async function POST(request: Request) {
    const { name, email, message, phone, service, budget } = await request.json();

    // Validate input. Only require fields that are necessary.
    if (!name || !email || !message || !phone || !service) {
        return NextResponse.json({ error: 'All fields except budget are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s\-+()]*$/;

    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    if (!phoneRegex.test(phone)) {
        return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedMessage = formatMessage(message);
    const sanitizedName = purify.sanitize(name);
    const sanitizedEmail = purify.sanitize(email);
    const sanitizedPhone = purify.sanitize(phone);
    const sanitizedService = purify.sanitize(service);
    const sanitizedBudget = budget ? purify.sanitize(budget) : "Not provided"; // Sanitize budget if present

    try {
        const adminEmailData = {
            sender: { email: "kumawatlakshya@gmail.com", name: "Contact Form" },
            to: [{ email: process.env.ADMIN_EMAIL as string }],
            subject: "New Contact Form Submission",
            htmlContent: `
                <div style="font-family: Arial, sans-serif;">
                    <p><strong>Name:</strong> ${sanitizedName}</p>
                    <p><strong>Email:</strong> ${sanitizedEmail}</p>
                    <p><strong>Phone:</strong> ${sanitizedPhone}</p>
                    <p><strong>Service:</strong> ${sanitizedService}</p>
                    <p><strong>Budget:</strong> ${sanitizedBudget}</p> <!-- Include budget in the email -->
                    <p><strong>Message:</strong></p>
                    <p>${sanitizedMessage}</p>
                </div>
            `,
        };

        const response = await brevoClient.sendTransacEmail(adminEmailData);
        console.log("Email sent successfully:", response); // Log success response
        return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error); // Log detailed error
        const errorMessage = (error instanceof Error) ? error.message : 'Failed to send emails';
        return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
    }
}