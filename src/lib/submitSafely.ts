/**
 * Runs a form's server action so that a failed or stalled request always ends in a result the form
 * can show. Rural signal is the realistic trigger: without this the button stays on "Sending…".
 */
export const OFFICE_PHONE = "01691 791543";

export const SEND_FAILED_MESSAGE =
  `Sorry, we could not send your details. Your connection may have dropped. Please try again, or call us on ${OFFICE_PHONE}.`;

const DEFAULT_TIMEOUT_MS = 30_000;

export interface SubmitResult {
  success: boolean;
  error?: string;
  id?: string;
}

/** Every failure message ends up naming the office number. */
export function withOfficePhone(message: string | undefined): string {
  if (!message) return SEND_FAILED_MESSAGE;
  return message.includes(OFFICE_PHONE) ? message : `${message} You can also call us on ${OFFICE_PHONE}.`;
}

export async function submitSafely<T extends SubmitResult>(
  send: () => Promise<T>,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<T | SubmitResult> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const stalled = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error("Form submission timed out")), timeoutMs);
  });
  try {
    const result = await Promise.race([send(), stalled]);
    return result.success ? result : { ...result, error: withOfficePhone(result.error) };
  } catch (error) {
    console.error("Form submission failed:", error);
    return { success: false, error: SEND_FAILED_MESSAGE };
  } finally {
    clearTimeout(timer);
  }
}
