import Link from "next/link";

export default function PageBanner({ title, breadcrumbs = [] }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay" />
      <div className="page-banner-content">
        <h1>{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                <span className="breadcrumb-sep">/</span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
