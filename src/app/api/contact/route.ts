import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

export async function POST(req: NextRequest) {
  try {
    const { name, email, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["nishantkoundalkoundal@gmail.com"],
      replyTo: email,
      subject: `New contact from ${name} — Portfolio`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e5e5e5; padding: 32px; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #00c8ff; margin: 0 0 24px; font-size: 20px; letter-spacing: 0.1em; text-transform: uppercase;">
            📬 New Portfolio Contact
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #1a1a1a;">
              <td style="padding: 10px 0; color: #666; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1a1a1a;">
              <td style="padding: 10px 0; color: #666; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0; color: #00c8ff; font-size: 14px;">
                <a href="mailto:${email}" style="color: #00c8ff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #1a1a1a;">
              <td style="padding: 10px 0; color: #666; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;">Budget</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; vertical-align: top; padding-top: 16px;">Message</td>
              <td style="padding: 10px 0; padding-top: 16px;"></td>
            </tr>
          </table>

          <div style="background: #111; border-left: 2px solid #00c8ff; padding: 16px; margin-top: 8px; border-radius: 0 4px 4px 0; color: #ccc; font-size: 14px; line-height: 1.7;">
            ${message.replace(/\n/g, "<br/>")}
          </div>

          <p style="margin-top: 24px; color: #444; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">
            Sent via nishantkoundal.dev · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
