import Link from "next/link";

const CTABand = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Your spatial data is already worth money.
            <br className="hidden md:block" /> Let&apos;s prove it in two weeks.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 md:text-lg">
            Book a free consultation and walk away with a concrete assessment of
            what your data can do — quick wins, a roadmap, and budget ranges.
            No commitment, no jargon, reply within 24 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary transition hover:bg-white/90"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              See Service Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
