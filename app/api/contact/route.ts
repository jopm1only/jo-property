import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, location, portfolio, message } = body

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required.' },
        { status: 400 }
      )
    }

    // Notification email to JO
    await resend.emails.send({
      from: "JO's Property Management <hello@jopm.co.uk>",
      to: ['jacobogidi@rocketmail.com'],
      reply_to: email,
      subject: `New consultation request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#1c1c1c;padding:24px;margin-bottom:24px;">
            <h1 style="color:#b8a070;font-family:Georgia,serif;font-size:22px;margin:0;font-weight:400;">
              New Consultation Request
            </h1>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:140px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Location</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;">${location || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Portfolio Size</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;">${portfolio || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#666;vertical-align:top;">Message</td>
              <td style="padding:10px 0;">${message || 'No message provided'}</td>
            </tr>
          </table>
        </div>
      `,
    })

    // Auto-reply to the enquirer
    await resend.emails.send({
      from: "JO's Property Management <hello@jopm.co.uk>",
      to: [email],
      subject: "We've received your request — JO's Property Management",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#1c1c1c;padding:32px;margin-bottom:32px;">
            <h1 style="color:#b8a070;font-family:Georgia,serif;font-size:24px;margin:0 0 8px;font-weight:400;">
              JO's Property Management
            </h1>
            <p style="color:rgba(242,237,228,0.6);font-size:13px;margin:0;letter-spacing:0.1em;">
              PREMIUM SHORT-TERM RENTAL MANAGEMENT
            </p>
          </div>
          <h2 style="font-family:Georgia,serif;font-size:20px;font-weight:400;margin-bottom:14px;">
            Thank you, ${firstName}.
          </h2>
          <p style="color:#555;line-height:1.7;margin-bottom:14px;">
            We've received your request and one of our property strategists will be
            in touch within 4 business hours to discuss how we can help.
          </p>
          <p style="color:#555;line-height:1.7;margin-bottom:28px;">
            If you have anything urgent in the meantime, you can reach us directly
            on <strong>07898 922 474</strong> or reply to this email.
          </p>
          <div style="background:#f9f9f9;padding:20px;border-left:3px solid #b8a070;font-style:italic;color:#666;margin-bottom:28px;">
            "Your property, performing at its true potential."
          </div>
          <p style="color:#999;font-size:12px;">
            JO's Property Management &middot; hello@jopm.co.uk &middot; 07898 922 474 &middot; jopm.co.uk
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
