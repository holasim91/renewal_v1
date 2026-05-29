/* eslint-disable @next/next/no-img-element */

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex aspect-[4/3] w-full items-end overflow-hidden bg-surface-container md:h-[400px] md:items-center md:rounded-2xl md:shadow-sm"
      aria-labelledby="hero-title"
    >
      <img
        alt="Happy dogs running in a field"
        className="absolute inset-0 h-full w-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2bFL0ZrTQzj4LFLIhuShBKL1SwwHYbSyU2kuZgg_c5gg77qPRfs7HjupF1bz0G4ZbiItGfX_0clecs7opfkNZ1kboBaXcZc_hyp1B_pbLg5sDoVzYkQiExsFcohk2SGOyY1RXotKxwIIVeT2MnBlSd0kqsBtD5gsOOwPv4JQmOrbkvoj3r2_iM7ImIuwnVLRD7BcLNQNYUoJx3804eWQBrNPMXHOfdZWQZG5eXm5SrAuickX1mpuXT2vvFbCkZNGaqc_iSfiO2cs"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
      <div className="relative z-10 m-5 max-w-sm pb-3 md:ml-12 md:max-w-lg md:rounded-xl md:bg-white/70 md:p-12 md:backdrop-blur-sm">
        <h1
          id="hero-title"
          className="text-[28px] font-bold leading-[1.2] text-white md:text-[32px] md:text-on-surface"
        >
          Unbox Happiness for Your Pet
        </h1>
        <p className="mb-6 mt-3 text-base leading-[1.6] text-surface-bright md:mt-4 md:text-lg md:text-on-surface-variant">
          Discover our curated selection of premium toys, treats, and care
          products for B2B partners.
        </p>
        <a
          className="inline-flex w-full max-w-[200px] items-center justify-center rounded-lg bg-primary-container px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-on-primary shadow-sm transition hover:bg-primary md:w-auto md:rounded-full md:px-8"
          href="#contact"
        >
          거래 문의
        </a>
      </div>
    </section>
  );
}
