"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { flights } from "@/data/flights";

type BookingFormProps = {
  defaultFlightType?: string;
};

export function BookingForm({ defaultFlightType }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [flightType, setFlightType] = useState(defaultFlightType ?? "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-sky-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-sky-500" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          Booking Request Received!
        </h3>
        <p className="mt-2 text-slate-600">
          We&apos;ll confirm your flight within 2 hours. Check your email for details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" required placeholder="+977 98XXXXXXXX" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" name="date" type="date" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Flight Type</Label>
          <Select value={flightType} onValueChange={setFlightType} required>
            <SelectTrigger>
              <SelectValue placeholder="Select flight type" />
            </SelectTrigger>
            <SelectContent>
              {flights.map((f) => (
                <SelectItem key={f.id} value={f.slug}>
                  {f.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input id="weight" name="weight" type="number" required placeholder="70" min="30" max="100" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pickup">Hotel Pickup Location</Label>
        <Input id="pickup" name="pickupLocation" placeholder="Hotel name, Lakeside Pokhara" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Any special requests or questions..." />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Request Booking
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
