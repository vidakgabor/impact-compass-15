const navItems = [
  { href: "#osszefoglalo", label: "Összefoglaló" },
  { href: "#resztvevok", label: "Résztvevők" },
  { href: "#szervezok", label: "Szervezők" },
  { href: "#bogardus", label: "Bogardus" },
  { href: "#helyszinek", label: "Helyszínek" },
];

export default function DashboardNav() {
  return (
    <nav
      aria-label="Dashboard navigáció"
      data-pdf-ignore="true"
      className="sticky top-4 z-40"
    >
      <div className="rounded-full border border-border/80 bg-background/90 px-2 py-2 shadow-sm backdrop-blur">
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}