import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface MailingListFormProps {
  variant?: 'default' | 'hero';
}

export function MailingListForm({ variant = 'default' }: MailingListFormProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button 
          type="submit"
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8"
        >
          {subscribed ? 'Subscribed!' : 'Join Now'}
        </Button>
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg text-gray-900 mb-2">Stay Updated</h3>
      <p className="text-gray-600 mb-4">
        Join our mailing list to receive updates about upcoming events, Olympiads, and important announcements.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button 
          type="submit"
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
        >
          {subscribed ? 'Subscribed!' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
}