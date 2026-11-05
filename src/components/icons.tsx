/**
 * Small inline SVG icons for the Nov 2026 redesign. All paths were drawn for this site
 * (design package of 5 Nov 2026) except the WhatsApp glyph, which is the standard
 * click-to-chat mark already used by WhatsAppButton.tsx.
 */
interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function PhoneIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path
        d="M6.2 2.8c-.6-.5-1.4-.4-1.9.1L2.7 4.5c-1 1.1-.9 2.7-.4 4.1 2 5.5 6.5 9.9 12 12 1.4.5 3 .6 4.1-.4l1.6-1.6c.6-.6.6-1.4.1-2L17 13.4c-.5-.5-1.3-.6-1.9-.2l-1.8 1.2c-2.5-1.4-4.4-3.3-5.8-5.8l1.2-1.8c.4-.6.3-1.4-.2-1.9L6.2 2.8Z"
        fill={color}
      />
    </svg>
  );
}

export function MailIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path d="M3 5h18v14H3z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="m3 7 9 6 9-6" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path d="M5 4h14v16H5zM5 9h14M9 2v4M15 2v4" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 13h2v2H9zm4 0h2v2h-2z" fill={color} />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path
        fill={color}
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path d="M4 12h16m-6-6 6 6-6 6" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ size = 20, color = "currentColor", className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} style={{ flexShrink: 0 }}>
      <path d="m4 12 5 5L20 6" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
