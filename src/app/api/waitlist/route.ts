import { NextResponse } from "next/server";

type WaitlistPayload = {
  email?: string;
  website?: string;
  goal?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeWebsite(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`;
    const parsed = new URL(withProtocol);
    return parsed.toString();
  } catch {
    return "";
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as WaitlistPayload;
    const email = body.email?.trim().toLowerCase() ?? "";
    const website = body.website?.trim() ?? "";
    const goal = body.goal?.trim() ?? "";

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (goal.length < 10) {
      return NextResponse.json(
        { error: "Please add a clearer growth goal (at least 10 characters)." },
        { status: 400 },
      );
    }

    const normalizedWebsite = normalizeWebsite(website);
    if (website && !normalizedWebsite) {
      return NextResponse.json(
        { error: "Please enter a valid website URL." },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return NextResponse.json(
        { error: "Server is not configured yet. Add Supabase env variables." },
        { status: 500 },
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/waitlist_leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          website: normalizedWebsite || null,
          goal,
          source: "landing_page",
        }),
      },
    );

    if (!response.ok) {
      const details = await response.text();
      console.error("Supabase insert failed:", details);
      return NextResponse.json(
        { error: "Could not save your request. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 },
    );
  }
}
