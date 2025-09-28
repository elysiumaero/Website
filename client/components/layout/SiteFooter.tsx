import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 overflow-hidden">
      <div aria-hidden className="starfield absolute inset-0 -z-10 opacity-25" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-end">
          <a
            href="https://elysiumaero.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground underline decoration-dotted hover:text-foreground"
          >
            Launch Software
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm text-muted-foreground">A brand of</div>
            <div className="text-lg font-semibold">Krrypto Edutech</div>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Elysium Aerotech is building next‑gen unmanned aerial vehicles
              with a relentless focus on reliability, autonomy, and elegance.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <div className="text-sm font-semibold mb-2">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link className="hover:text-foreground" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" to="/technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" to="/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Legal</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Social</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    className="hover:text-foreground"
                    href="#"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-foreground"
                    href="#"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Programs</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Prototype — Flight 2025</li>
                <li>Autonomy — Edge R&D</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Elysium Aerotech</div>
          <div>Made with precision and passion.</div>
        </div>
      </div>
    </footer>
  );
}
