import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'augmented.vr@gmail.com',
    // Здесь нужно использовать пароль приложения из Google Account
    pass: process.env.GMAIL_APP_PASSWORD || 'ваш_пароль_приложения'
  }
});

function safeStr(value: unknown): string {
  if (value == null || value === undefined) return '';
  if (typeof value === 'string') return value;
  return String(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = safeStr(body?.name);
    const email = safeStr(body?.email);
    const phone = safeStr(body?.phone);
    const message = safeStr(body?.message);

    const mailOptions = {
      from: {
        name: 'AVR Group Website',
        address: 'augmented.vr@gmail.com'
      },
      to: 'augmented.vr@gmail.com',
      subject: 'Новая заявка с сайта AVR Group',
      html: [
        '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">',
        '<h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Новая заявка с сайта</h2>',
        '<div style="margin: 20px 0;">',
        '<p style="margin: 10px 0;"><strong>Имя:</strong> ' + name + '</p>',
        '<p style="margin: 10px 0;"><strong>Email:</strong> ' + email + '</p>',
        '<p style="margin: 10px 0;"><strong>Телефон:</strong> ' + phone + '</p>',
        '<div style="margin: 20px 0;">',
        '<strong>Сообщение:</strong>',
        '<p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px;">' + message + '</p>',
        '</div>',
        '</div>',
        '<div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee;">',
        'Отправлено с сайта AVR Group',
        '</div>',
        '</div>'
      ].join('')
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ReferenceError && error.message.includes('returnNaN')) {
      console.error('[api/contact] ReferenceError returnNaN — полный стек:', error.stack);
    }
    console.error('Ошибка при отправке email:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке сообщения' },
      { status: 500 }
    );
  }
} 