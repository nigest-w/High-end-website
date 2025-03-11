
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();
    const resend = new Resend('re_fMjq44x1_55BHJvuavoZrWpTU3VNM8e16');
    
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You can change this after domain verification
      to: 'wnigest@gmail.com',
      subject: `New Contact Message from ${name}`,
      html: `
        <div>
          <h2>New Contact Form Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <div>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}