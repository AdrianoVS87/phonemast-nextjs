/**
 * Studio layout — strips all site chrome (no header/footer/nav).
 * The Studio is a full-screen single-page app.
 */
export const metadata = {
  title: "Sanity Studio | Phone Mast Advice CMS",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
