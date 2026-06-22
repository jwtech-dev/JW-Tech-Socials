import Image from "next/image";

const SOCIAL_LINKS = [
  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "start-up-black-alpha.vercel.app",
    href: "https://start-up-black-alpha.vercel.app/",
    platform: "portfolio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "@jwtech.dev3",
    href: "https://www.instagram.com/jwtech.dev3/",
    platform: "instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "facebook",
    title: "Facebook",
    subtitle: "JW Tech Official",
    href: "https://www.facebook.com/jwtechofficial/",
    platform: "facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "JW Tech Digital Studio",
    href: "https://www.linkedin.com/in/jw-tech-digital-studio-67a524415/",
    platform: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "jwtech-dev",
    href: "https://github.com/jwtech-dev",
    platform: "github",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <div className="bg-mesh">
        <div className="bg-mesh-accent" />
      </div>
      <div className="grid-overlay" />

      {/* Main Content */}
      <div className="page-container">
        {/* Profile Section */}
        <section className="profile" id="profile">
          <div className="avatar-wrapper">
            <div className="avatar-glow" />
            <div className="avatar-ring" />
            <Image
              className="avatar-image"
              src="/avatar.png"
              alt="JW Tech profile avatar"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">JW Tech</h1>
            <p className="profile-handle">Digital Studio</p>
            <p className="profile-bio">
              Building sleek digital experiences. Connect with me across platforms.
            </p>
          </div>
        </section>

        {/* Social Links */}
        <nav className="links-container" id="social-links" aria-label="Social media links">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={link.id}
              id={`link-${link.id}`}
              className="link-card"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--delay": index } as React.CSSProperties}
            >
              <div className={`link-icon link-icon--${link.platform}`}>
                {link.icon}
              </div>
              <div className="link-text">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <div className="link-arrow">
                <ArrowIcon />
              </div>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="footer" id="footer">
          <div className="footer-divider" />
          <p className="footer-text">JW Tech © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}
