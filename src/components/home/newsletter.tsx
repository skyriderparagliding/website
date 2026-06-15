"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 px-8 py-16 text-center md:px-16">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')] bg-cover bg-center opacity-10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Stay in the Loop
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sky-100">
                Get flying tips, equipment deals, and Pokhara travel guides
                delivered to your inbox.
              </p>
              {submitted ? (
                <p className="mt-8 text-lg font-semibold text-white">
                  Thank you for subscribing!
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 border-0 bg-white/95"
                  />
                  <Button type="submit" variant="secondary" size="lg">
                    Subscribe
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
