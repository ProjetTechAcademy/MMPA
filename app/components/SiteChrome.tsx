import Link from "next/link";

const navItems = [
  ["Accueil", "/"],
  ["L’expertise PAÏA", "/expertise"],
  ["Méthode & livrables", "/methode"],
  ["À propos", "/a-propos"],
  ["Contact", "/contact"],
];

export function SiteHeader({ current = "" }: { current?: string }) {
  return (
    <header className="site-header">
      <div className="header-brand-row">
        <Link className="brand-link" href="/" aria-label="PAÏA by MMPA — Accueil">
          <picture>
            <source media="(max-width: 640px)" srcSet="/brand/logo-compact.png" />
            <img
              src="/brand/banner-paia.png"
              alt="PAÏA by MMPA — Paie, Absences, Indemnisation, Analyse"
            />
          </picture>
        </Link>
        <div className="header-marquee" aria-label="Les piliers de l’intervention PAÏA">
          <div className="header-marquee-track">
            <div className="header-marquee-group">
              <span>Comprendre</span><i>•</i><span>Rapprocher</span><i>•</i><span>Documenter</span><i>•</i><span>Prioriser</span><i>•</i><span>Transmettre</span><i>•</i>
            </div>
            <div className="header-marquee-group" aria-hidden="true">
              <span>Comprendre</span><i>•</i><span>Rapprocher</span><i>•</i><span>Documenter</span><i>•</i><span>Prioriser</span><i>•</i><span>Transmettre</span><i>•</i>
            </div>
          </div>
        </div>
      </div>

      <div className="header-navigation-row">
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([label, href], index) => (
            <Link className={current === label ? "active" : ""} href={href} key={href}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Premier échange <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-nav">
          <summary aria-label="Ouvrir le menu"><span /><span /><span /></summary>
          <div className="mobile-nav-panel">
            {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link className="button button-primary" href="/contact">Premier échange</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo-panel"><img src="/brand/logo-compact.png" alt="PAÏA by MMPA" /></div>
        <div>
          <p className="footer-kicker">Traitement des Absences Maladie en Paie</p>
          <p>Clarifier les données. Prioriser les actions. Transmettre une méthode.</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <p className="footer-title">Découvrir</p>
          <Link href="/expertise">L’expertise PAÏA</Link>
          <Link href="/methode">Méthode &amp; livrables</Link>
          <Link href="/livrables">Les livrables</Link>
          <Link href="/simulateur">Simuler votre besoin</Link>
        </div>
        <div>
          <p className="footer-title">Échanger</p>
          <Link href="/a-propos">À propos de PAÏA</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p className="footer-title">Informations</p>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/cookies">Cookies &amp; traceurs</Link>
          <Link href="/securite">Sécurité</Link>
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
      <div className="cta-copy">
        <p className="eyebrow eyebrow-gold">Premier échange</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-reassurance" aria-label="Déroulement du premier échange">
          <span>Écoute du contexte</span>
          <span>Périmètre clarifié</span>
          <span>Prochaine étape claire</span>
        </div>
      </div>
      <div className="cta-action">
        <span className="cta-orbit" aria-hidden="true" />
        <Link className="cta-premium-button" href={href}>
          <span>Commencer simplement</span>
          <strong>{label}</strong>
          <b aria-hidden="true">↗</b>
        </Link>
      </div>
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
      <div className="page-hero-aside" aria-hidden="true">
        <span>PAÏA</span>
        <small>Paie · Absences · Indemnisation · Analyse</small>
      </div>
    </section>
  );
}
