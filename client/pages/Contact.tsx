export default function Contact() {
  const phone = "9319247500";
  const email = "ProjectDirector.Elysium@krrypto.com";
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Reach our project leadership directly. We respond to qualified
            inquiries promptly.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl space-y-4 rounded-xl border border-white/10 bg-black/30 p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Phone</div>
            <a
              className="text-sm font-medium hover:underline"
              href={`tel:${phone}`}
            >
              {phone}
            </a>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Email</div>
            <a
              className="text-sm font-medium hover:underline"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
