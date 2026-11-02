"use client";

import { useEffect, useRef } from "react";

/**
 * Moves focus to the success or error message and brings it into view. The form can be far longer
 * than the message that replaces it, which would otherwise leave the visitor looking at something else.
 */
export function useFormMessageFocus(status: string) {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    messageRef.current?.focus({ preventScroll: true });
    messageRef.current?.scrollIntoView({ block: "center" });
  }, [status]);

  return messageRef;
}
