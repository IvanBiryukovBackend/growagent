"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? ""),
      website: String(formData.get("website") ?? ""),
      goal: String(formData.get("goal") ?? ""),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setSubmitState("error");
        setErrorMessage(result.error ?? "Could not submit the form.");
        return;
      }

      event.currentTarget.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3 md:grid-cols-2">
      <input
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:ring"
      />
      <input
        name="website"
        type="url"
        placeholder="https://your-site.com"
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:ring"
      />
      <textarea
        name="goal"
        required
        minLength={10}
        placeholder="Grow to 1,000 qualified leads in 90 days with $3,000/month budget."
        className="min-h-28 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:ring md:col-span-2"
      />
      <button
        type="submit"
        disabled={submitState === "loading"}
        className="rounded-xl bg-emerald-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
      >
        {submitState === "loading" ? "Submitting..." : "Join waitlist"}
      </button>
      {submitState === "success" ? (
        <p className="text-sm text-emerald-300 md:col-span-2">
          You are in. We will contact you with early access details.
        </p>
      ) : null}
      {submitState === "error" ? (
        <p className="text-sm text-red-300 md:col-span-2">{errorMessage}</p>
      ) : null}
    </form>
  );
}
