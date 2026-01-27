'use client';

import { submitContact } from '@/lib/actions/message.action';
import  { useState } from 'react';


const JoinPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    try {
      await submitContact(formData);
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send message');
      console.error('Error submitting contact form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 z-1">
      <form
        action={handleSubmit}
        className="w-full max-w-md bg-transparent rounded-xl border border-border p-6 shadow-sm flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-center">
          Share your interest and JOIN US!
        </h2>

        {isSuccess && (
          <div className="rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
            ✅ Your message has been sent successfully!
          </div>
        )}

        {error && (
          <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md border border-border px-4 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="rounded-md border border-border px-4 py-2 resize-none"
            placeholder="Write your interest here..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-md bg-primary px-4 py-2 font-semibold text-white disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default JoinPage;
