export async function validContactSession(sessionId: string): Promise<{ valid: boolean }> {
  try {
    const res = await fetch(`/api/contact-session/${sessionId}`);
    if (!res.ok) return { valid: false };

    const data = await res.json();
    return { valid: data?.valid ?? false };
  } catch {
    return { valid: false };
  }
}
