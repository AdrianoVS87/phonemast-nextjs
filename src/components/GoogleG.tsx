import Image from "next/image";

/**
 * The official full-colour Google G (GoogleG_FullColor_RGB.png from Google's Brand Resource Center,
 * downloaded 24 Nov 2026), used only next to our rating with a link to our Business Profile, as
 * Google's customer-reviews guidance allows. The rules it follows: the file is unaltered (not cropped),
 * it sits on white, and the clear space on every side is at least the width of the G. The official file
 * already carries that clear space: the G fills about a third of the canvas, so at 60 px the G is about
 * 20 px with about 20 px of white around it. Decorative here: the text beside it says "on Google".
 */
export default function GoogleG() {
  return (
    <span className="google-g-chip" aria-hidden="true">
      <Image src="/images/google-g.png" alt="" width={60} height={60} />
    </span>
  );
}
