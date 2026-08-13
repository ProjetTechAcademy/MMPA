import Link from "next/link";

const navItems = [
  ["Accueil", "/"],
  ["Nos services", "/expertise"],
  ["Estimer mon besoin", "/simulateur"],
  ["À propos", "/a-propos"],
  ["Contact", "/contact"],
];

export function SiteHeader({ current = "" }: { current?: string }) {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/" aria-label="PAÏA by MMPA — Accueil">
        <img src="/brand/logo-compact.png" alt="PAÏA by MMPA" />
      </Link>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navItems.map(([label, href], index) => (
          <Link className={current === label ? "active" : ""} href={href} key={href}>
            <span>{String(index + 1).padStart(2, "0")}</span>{label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Décrire mon besoin <span aria-hidden="true">↗</span>
      </Link>
      <details className="mobile-nav">
        <summary aria-label="Ouvrir le menu"><span /><span /><span /></summary>
        <div className="mobile-nav-panel">
          {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="button button-primary" href="/contact">Décrire mon besoin</Link>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo-panel"><img src="/brand/logo-compact.png" alt="PAÏA by MMPA" /></div>
        <div>
          <p className="footer-kicker">TAMP · PDP · TADP</p>
          <p>Des services de paie et d’administration du personnel adaptés à votre besoin.</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <p className="footer-title">Découvrir</p>
          <Link href="/expertise">Nos trois services</Link>
          <Link href="/simulateur">Estimer votre besoin</Link>
        </div>
        <div>
          <p className="footer-title">Échanger</p>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Décrire votre projet</Link>
        </div>
        <div>
          <p className="footer-title">Informations</p>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MMPA — Tous droits réservés.</p>
        <p>Paie · Absences · Indemnisation · Analyse</p>
      </div>
    </footer>
  );
}

export function CtaBand({ title, text, label, href }: { title: string; text: string; label: string; href: string }) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow eyebrow-gold">Premier échange</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button button-gold" href={href}>{label}</Link>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
