import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getSmtpConfig() {
    const smtpUser = process.env.SMTP_USER || "your-email@gmail.com";

    return {
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT || 587),
        user: smtpUser,
        pass: process.env.SMTP_PASS || "",
        to: process.env.SMTP_TO || smtpUser,
    };
}

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body ?? {};
        const { host: smtpHost, port: smtpPort, user: smtpUser, pass: smtpPass, to: smtpTo } = getSmtpConfig();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Please complete all fields before sending your message." },
                { status: 400 }
            );
        }

        if (typeof name !== "string" || typeof email !== "string" || typeof subject !== "string" || typeof message !== "string") {
            return NextResponse.json(
                { error: "Invalid form payload." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        if (!smtpPass) {
            return NextResponse.json(
                {
                    error:
                        "SMTP is not configured. Add SMTP_PASS in your environment variables to enable email delivery.",
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 12px;">New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
          ${message.replace(/\n/g, "<br />")}
        </div>
      </div>
    `;

        await transporter.sendMail({
            from: `"Portfolio Contact" <${smtpUser}>`,
            to: smtpTo,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: emailHtml,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact email error:", error);
        return NextResponse.json(
            {
                error: "Something went wrong while sending the message. Please try again later.",
            },
            { status: 500 }
        );
    }
}
