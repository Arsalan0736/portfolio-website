import { useState } from 'react';
import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; error?: string }>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMS_ENDPOINT;
      const isFormspree = Boolean(endpoint);
      const url = isFormspree ? String(endpoint) : '/api/contact';
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        setResult({ ok: false, error: data?.error || 'Failed to send message' });
      } else {
        if (isFormspree) {
          // Formspree returns { ok: true } when using JSON API
          const data = await resp.json().catch(() => ({}));
          if (!data?.ok) {
            setResult({ ok: false, error: 'Form provider error' });
            setSubmitting(false);
            return;
          }
        }
        setResult({ ok: true });
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch {
      setResult({ ok: false, error: 'Network error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out using the form or through the social handles.
        I&apos;m always open to new opportunities and connections.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.flex}>
            <div className={styles.formControl}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can I help?"
              rows={6}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={submitting}>
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
          {result && (
            <p style={{ marginTop: '0.75rem', color: result.ok ? 'var(--accent-color)' : 'salmon' }}>
              {result.ok ? 'Message sent! I will get back to you soon.' : `Error: ${result.error}`}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
