import type { NextApiRequest, NextApiResponse } from 'next';
import resumeData from '@/data/resume.json';

// POST /api/contact
// Body: { name: string, email: string, message: string }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO_EMAIL || (resumeData as { email?: string }).email || '';
  const FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'; // Resend sandbox sender

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Server email not configured (RESEND_API_KEY missing)' });
  }
  if (!TO) {
    return res.status(500).json({ error: 'Recipient email not configured (CONTACT_TO_EMAIL or resume.json email)' });
  }

  try {
    const subject = `Portfolio contact from ${name}`;
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: [email],
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(502).json({ error: 'Email provider error', details: text });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
