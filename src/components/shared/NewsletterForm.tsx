"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production this would POST to an API
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-xl border-2 border-primary-100 bg-white px-4 py-2 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary-500 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
      >
        <Send className="h-4 w-4" />
        <span className="sr-only sm:not-sr-only">Subscribe</span>
      </button>
      {status === "success" && <p className="self-center text-xs text-success-500">Subscribed!</p>}
    </form>
  );
}
